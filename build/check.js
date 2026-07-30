#!/usr/bin/env node
/* Verificación del sitio generado. Se corre después de `node build.js`:

     node build/check.js

   Comprueba lo que se rompe en silencio: enlaces internos muertos, títulos o
   descripciones duplicados, JSON-LD inválido, páginas sin H1, canonical mal armado
   y URLs del sitemap que no existen. */

const fs = require("fs");
const path = require("path");
const { SITE } = require("./config");

const ROOT = path.join(__dirname, "..");
const errors = [];
const warnings = [];

const err = m => errors.push(m);
const warn = m => warnings.push(m);

/* ------------------------------------------------ Páginas generadas --- */

function htmlFiles(dir = ROOT, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name === "node_modules" || entry.name === "build") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) htmlFiles(full, acc);
    else if (entry.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

const files = htmlFiles();

/* Ruta pública de un archivo: temas/x/index.html → /temas/x/ */
const urlOf = f => {
  const rel = path.relative(ROOT, f);
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return "/" + rel.slice(0, -"index.html".length);
  return "/" + rel;
};

const known = new Set(files.map(urlOf));

/* ---------------------------------------------------- Comprobaciones --- */

const titles = new Map();
const descs = new Map();

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const url = urlOf(file);
  const at = `${url}`;

  /* --- H1 --- */
  const h1s = html.match(/<h1[\s>]/g) || [];
  if (h1s.length !== 1) err(`${at}: ${h1s.length} etiquetas <h1> (debe haber exactamente 1)`);

  /* --- title --- */
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  if (!title) err(`${at}: falta <title>`);
  else {
    if (titles.has(title)) err(`${at}: <title> duplicado con ${titles.get(title)} — "${title}"`);
    titles.set(title, at);
    if (title.length > 62) warn(`${at}: <title> de ${title.length} caracteres, Google suele cortar en ~60 — "${title}"`);
    if (title.length < 20) warn(`${at}: <title> muy corto (${title.length})`);
  }

  /* --- description --- */
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  if (!desc) err(`${at}: falta meta description`);
  else {
    if (descs.has(desc)) err(`${at}: meta description duplicada con ${descs.get(desc)}`);
    descs.set(desc, at);
    if (desc.length > 165) warn(`${at}: description de ${desc.length} caracteres (se corta cerca de 160)`);
    if (desc.length < 70) warn(`${at}: description de solo ${desc.length} caracteres`);
  }

  /* --- canonical --- */
  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  const noindex = /content="noindex/.test(html);
  if (!canonical) err(`${at}: falta canonical`);
  else if (!noindex && canonical !== SITE.url + url) err(`${at}: canonical apunta a ${canonical}`);

  /* --- Open Graph mínimo --- */
  for (const prop of ["og:title", "og:description", "og:image", "og:url"]) {
    if (!html.includes(`property="${prop}"`)) err(`${at}: falta ${prop}`);
  }

  /* La imagen de Open Graph vive en un meta, no en un href: si no se chequea acá,
     se rompe en silencio y solo se nota cuando alguien comparte el enlace. */
  const og = (html.match(/<meta property="og:image" content="([^"]*)"/) || [])[1];
  if (og) {
    const rel = og.replace(SITE.url, "");
    if (!fs.existsSync(path.join(ROOT, rel))) err(`${at}: og:image inexistente → ${rel} (¿falta correr node build/og.js?)`);
  }

  /* --- JSON-LD --- */
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!noindex && !blocks.length) err(`${at}: sin JSON-LD`);
  blocks.forEach((b, i) => {
    try {
      const data = JSON.parse(b[1].replace(/\\u003c/g, "<"));
      if (!data["@type"]) err(`${at}: bloque JSON-LD #${i + 1} sin @type`);
    } catch (e) {
      err(`${at}: bloque JSON-LD #${i + 1} no parsea — ${e.message}`);
    }
  });

  /* --- Enlaces internos --- */
  const hrefs = [...html.matchAll(/href="(\/[^"#?]*)/g)].map(m => m[1]);
  for (const href of new Set(hrefs)) {
    if (href.startsWith("/assets/") || href.startsWith("/data/")) {
      if (!fs.existsSync(path.join(ROOT, href))) err(`${at}: recurso inexistente ${href}`);
      continue;
    }
    if (href === "/site.webmanifest" || href === "/sitemap.xml" || href === "/robots.txt") {
      if (!fs.existsSync(path.join(ROOT, href))) err(`${at}: falta ${href}`);
      continue;
    }
    if (!known.has(href)) err(`${at}: enlace interno roto → ${href}`);
  }

  /* --- Contenido real en el HTML, no solo en JS --- */
  const text = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
  const words = text.split(/\s+/).filter(w => w.length > 1).length;
  if (!noindex && words < 300) warn(`${at}: solo ~${words} palabras de contenido renderizado`);
}

/* ----------------------------------------------------------- sitemap --- */

const sitemap = fs.readFileSync(path.join(ROOT, "sitemap.xml"), "utf8");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
for (const loc of locs) {
  const url = loc.replace(SITE.url, "");
  if (!known.has(url)) err(`sitemap.xml: ${loc} no corresponde a ninguna página generada`);
}
const indexable = [...known].filter(u => u !== "/404.html");
for (const url of indexable) {
  if (!locs.includes(SITE.url + url)) err(`sitemap.xml: falta ${url}`);
}

const robots = fs.readFileSync(path.join(ROOT, "robots.txt"), "utf8");
if (!robots.includes(`Sitemap: ${SITE.url}/sitemap.xml`)) err("robots.txt: no declara el sitemap");

/* ------------------------------------------------------------ Salida --- */

console.log(`Revisadas ${files.length} páginas, ${locs.length} URLs en el sitemap.\n`);
warnings.forEach(w => console.log(`  aviso  ${w}`));
if (warnings.length) console.log("");
errors.forEach(e => console.log(`  ERROR  ${e}`));

if (errors.length) {
  console.log(`\n✗ ${errors.length} error(es), ${warnings.length} aviso(s)`);
  process.exit(1);
}
console.log(`✓ Sin errores${warnings.length ? ` (${warnings.length} aviso(s))` : ""}`);

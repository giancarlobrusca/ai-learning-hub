#!/usr/bin/env node
/* Genera las imágenes de Open Graph (1200×630) de las páginas principales.

     node build/og.js

   Es un paso aparte del build normal porque necesita Chrome instalado y tarda
   unos segundos. Las imágenes quedan versionadas en assets/og/, así que solo hay
   que volver a correrlo si cambian los títulos o el diseño de la tarjeta.

   Por qué existe: una imagen genérica en todas las páginas hace que compartir
   "Cursos de IA gratis" se vea igual que compartir la portada. La imagen propia
   sube el clic, y el clic es lo que termina produciendo enlaces. */

const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFileSync } = require("child_process");

const { SITE } = require("./config");
const { COPY, RUTAS } = require("./copy");
const { COLECCIONES } = require("./colecciones");
const { GUIA, SOBRE } = require("./content");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "assets", "og");

const CHROME = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].find(p => fs.existsSync(p));

if (!CHROME) {
  console.error("No encontré Chrome. Instalalo o generá las imágenes a mano en assets/og/.");
  process.exit(1);
}

/* ------------------------------------------------------------ plantilla --- */

const esc = s => (s || "").toString()
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* Resalta con degradado la última parte del título, para que la tarjeta tenga el
   mismo aire que el hero del sitio. */
function tarjeta({ kicker, titulo, sub, stat }) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
  * { box-sizing: border-box; margin: 0; }
  html, body { width: 1200px; height: 630px; }
  body {
    background: #0b0d12; color: #e6e9f0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Helvetica, Arial, sans-serif;
    padding: 66px 72px;
    display: flex; flex-direction: column; justify-content: space-between;
    position: relative; overflow: hidden;
  }
  .glow { position: absolute; border-radius: 50%; filter: blur(90px); }
  .g1 { width: 620px; height: 620px; background: #7c9cff; top: -300px; right: -170px; opacity: .28; }
  .g2 { width: 520px; height: 520px; background: #d78bff; bottom: -310px; left: -150px; opacity: .20; }
  .g3 { width: 380px; height: 380px; background: #64e0c0; bottom: -250px; right: 180px; opacity: .14; }
  .top { display: flex; align-items: center; gap: 15px; position: relative; }
  .mark {
    width: 52px; height: 52px; border-radius: 14px;
    background: linear-gradient(135deg, #7c9cff, #d78bff 55%, #64e0c0);
    display: flex; align-items: center; justify-content: center;
    color: #0b0d12; font-weight: 800; font-size: 22px; letter-spacing: -1px;
  }
  .brand { font-size: 21px; font-weight: 700; letter-spacing: -.3px; }
  .brand span { display: block; font-size: 14px; font-weight: 400; color: #7f8aa3; letter-spacing: 0; }
  .kicker {
    position: relative; font-size: 17px; font-weight: 700; letter-spacing: 1.6px;
    text-transform: uppercase; color: #7c9cff; margin-bottom: 16px;
  }
  h1 {
    position: relative; font-weight: 700; letter-spacing: -2.4px;
    font-size: ${titulo.length > 46 ? 60 : titulo.length > 30 ? 70 : 78}px;
    line-height: 1.05; max-width: 17ch;
  }
  h1 em {
    font-style: normal;
    background: linear-gradient(100deg, #7c9cff, #d78bff 55%, #64e0c0);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .sub { position: relative; font-size: 23px; color: #9aa3b8; margin-top: 20px; max-width: 44ch; line-height: 1.4; }
  .bottom { display: flex; align-items: flex-end; justify-content: space-between; position: relative; }
  .stat {
    background: rgba(255,255,255,.045); border: 1px solid rgba(255,255,255,.10);
    border-radius: 12px; padding: 11px 19px; font-size: 19px; color: #c7cddb;
  }
  .stat b { color: #fff; }
  .url { font-size: 18px; color: #7c9cff; font-weight: 600; }
</style></head><body>
  <div class="glow g1"></div><div class="glow g2"></div><div class="glow g3"></div>
  <div class="top">
    <div class="mark">AI</div>
    <div class="brand">AI Learning Hub<span>Recursos de IA en español</span></div>
  </div>
  <div>
    ${kicker ? `<div class="kicker">${esc(kicker)}</div>` : ""}
    <h1>${titulo}</h1>
    ${sub ? `<p class="sub">${esc(sub)}</p>` : ""}
  </div>
  <div class="bottom">
    <div class="stat">${stat}</div>
    <div class="url">recursos-ia.giancarlobrusca.com</div>
  </div>
</body></html>`;
}

/* -------------------------------------------------------------- páginas --- */

/* Resalta la última palabra significativa del título con el degradado. */
function resaltar(t) {
  const partes = t.split(" ");
  if (partes.length < 3) return esc(t);
  const corte = partes.length - (partes.length > 6 ? 2 : 1);
  return esc(partes.slice(0, corte).join(" ")) + " <em>" + esc(partes.slice(corte).join(" ")) + "</em>";
}

const paginas = [
  { file: "guia", kicker: "Guía", titulo: "Cómo aprender inteligencia artificial",
    sub: GUIA.lede.replace(/\s+/g, " ").trim(), stat: "Qué estudiar, en qué orden y <b>cuánto lleva</b>" },
  { file: "rutas", kicker: "Rutas de aprendizaje", titulo: "Cuatro caminos según de dónde venís",
    sub: "Elegí una, seguila en orden y recién después dispersate.", stat: "<b>4</b> rutas con pasos y tiempos reales" },
  { file: "sobre", kicker: "Sobre el sitio", titulo: "Quién armó esto y con qué criterio",
    sub: SOBRE.lede, stat: "Sin publicidad, sin afiliados, <b>sin rastreo</b>" },
];

for (const r of RUTAS) {
  paginas.push({
    file: `ruta-${r.slug}`, kicker: "Ruta de aprendizaje", titulo: r.h1,
    sub: r.para, stat: `<b>${r.pasos.length}</b> pasos · ${r.tiempo}`,
  });
}

for (const c of COLECCIONES) {
  paginas.push({
    file: `col-${c.slug}`, kicker: "Colección", titulo: c.h1,
    sub: c.description.split(":")[0] + ".", stat: "Curados uno por uno, <b>con notas</b>",
  });
}

/* Las páginas de tema comparten plantilla pero cambian título y subtítulo. */
for (const [slug, c] of Object.entries(COPY)) {
  paginas.push({
    file: `tema-${slug}`, kicker: "Tema", titulo: c.h1,
    sub: c.description.split(/[.:]/)[0] + ".", stat: "Recursos curados <b>en español</b>",
  });
}

/* ------------------------------------------------------------- generar --- */

fs.mkdirSync(OUT, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "alh-og-"));

let n = 0;
for (const p of paginas) {
  const html = tarjeta({ ...p, titulo: resaltar(p.titulo) });
  const src = path.join(tmp, p.file + ".html");
  fs.writeFileSync(src, html);

  execFileSync(CHROME, [
    "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
    `--screenshot=${path.join(OUT, p.file + ".png")}`,
    "--window-size=1200,630",
    "file://" + src,
  ], { stdio: "ignore" });
  n++;
  if (n % 10 === 0) console.log(`  ${n}/${paginas.length}…`);
}

fs.rmSync(tmp, { recursive: true, force: true });
console.log(`✓ ${n} imágenes de Open Graph en assets/og/`);
console.log(`  Referencialas desde ${SITE.url}/assets/og/<archivo>.png`);

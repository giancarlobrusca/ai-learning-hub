#!/usr/bin/env node
/* Generador estático de AI Learning Hub.
   Node sin dependencias: lee los archivos de data/, los cruza con el copy de build/
   y escribe HTML plano. Todo el contenido queda en el HTML, no en JavaScript.

   Uso:  node build.js
*/

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const { SITE, AUTHOR, LAST_REVIEWED } = require("./build/config");
const { COPY, RUTAS } = require("./build/copy");
const { COLECCIONES } = require("./build/colecciones");
const { HOME, GUIA, SOBRE, TIMELINE, FUTURO_HTML, CALLOUT_PASIVO } = require("./build/content");
const T = require("./build/render");

const ROOT = __dirname;

/* ------------------------------------------------- Carga de datos --- */

/* Los archivos de data/ están escritos para el navegador (usan `window`).
   Los ejecutamos en un sandbox con un `window` falso para reutilizarlos tal cual. */
function loadData() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  const files = fs.readdirSync(path.join(ROOT, "data")).filter(f => f.endsWith(".js")).sort();
  for (const f of files) {
    const code = fs.readFileSync(path.join(ROOT, "data", f), "utf8");
    vm.runInContext(code, sandbox, { filename: f });
  }
  return { R: sandbox.window.R || [], SECTIONS: sandbox.window.SECTIONS || [] };
}

const { R, SECTIONS } = loadData();
const SECTION_LIST = SECTIONS.filter(s => s.slug);
const SECTION_MAP = Object.fromEntries(SECTION_LIST.map(s => [s.slug, s]));

/* `roadmaps` vive en /rutas/, no en /temas/. */
const TEMAS = SECTION_LIST.filter(s => s.slug !== "roadmaps");
const NAV_SECTIONS = SECTIONS.filter(s => s.group !== "Empezar aquí" && s.slug !== "roadmaps");

const counts = {};
R.forEach(r => (counts[r.sec] = (counts[r.sec] || 0) + 1));

/* ------------------------------------------------------- Utilidades --- */

function write(relPath, content) {
  const full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
  return relPath;
}

const written = [];
const pageOf = (relPath, html) => { written.push(relPath); return write(relPath, html); };

const HOME_CRUMB = { name: "Inicio", path: "/" };

function copyFor(slug) {
  return COPY[slug] || {};
}

/* ------------------------------------------------------------ Home --- */

function statsHTML() {
  const count = t => R.filter(r => r.type === t).length;
  const stats = [
    [R.length, "recursos"],
    [count("paper"), "papers"],
    [count("curso") + count("video"), "cursos y videos"],
    [count("libro"), "libros"],
    [count("repo") + count("herramienta"), "repos y herramientas"],
    [R.filter(r => r.top).length, "imprescindibles"],
  ];
  return `<div class="stats" id="stats">${
    stats.map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`).join("")
  }</div>`;
}

function rutaCardsHTML() {
  return `<div class="roadmap">${RUTAS.map(r => `
          <article class="rm-card">
            <h3><a href="/rutas/${r.slug}/"><span aria-hidden="true">${r.icon}</span> ${T.esc(r.nav)}</a></h3>
            <div class="rm-for">${T.esc(r.para)}</div>
            <ol>${r.pasos.slice(0, 4).map(p => `<li>${T.esc(p.t)}</li>`).join("")}</ol>
            <p class="rm-more"><a href="/rutas/${r.slug}/">Ver la ruta completa (${r.pasos.length} pasos, ${T.esc(r.tiempo)}) →</a></p>
          </article>`).join("")}</div>`;
}

/* En la portada mostramos una selección por sección y enlazamos al listado completo:
   evita duplicar 336 tarjetas en dos URLs y concentra los enlaces internos. */
const PREVIEW_N = 6;

function homeSectionsHTML() {
  let out = "";
  let openGroup = false;

  for (const s of SECTIONS) {
    if (s.group) {
      if (s.group === "Empezar aquí") continue;
      if (openGroup) out += `\n      </div>`;
      out += `\n      <h2 class="group-heading">${T.esc(s.group)}</h2>\n      <div class="group-body">`;
      openGroup = true;
      continue;
    }
    if (s.slug === "roadmaps") continue;

    const items = T.sortItems(R.filter(r => r.sec === s.slug));
    const c = copyFor(s.slug);
    const preview = items.slice(0, PREVIEW_N);

    out += `
        <section class="section" id="${s.slug}">
          <h3><a href="/temas/${s.slug}/"><span class="sec-ico" aria-hidden="true">${s.icon}</span> ${T.esc(s.title)}</a></h3>
          <p class="sec-desc">${T.esc(s.desc)}</p>
          ${preview.length ? `<div class="cards">${preview.map(r => T.cardHTML(r, s.title)).join("")}</div>` : ""}
          <p class="more"><a href="/temas/${s.slug}/">${
            items.length ? `Ver los ${items.length} recursos de ${T.esc(T.lowerTitle(s.title))}` : `Ir a ${T.esc(s.title)}`
          } →</a></p>
        </section>`;
  }
  if (openGroup) out += `\n      </div>`;
  return out;
}

function buildHome() {
  const pagePath = "/";
  const schema = [
    T.siteSchema,
    T.pageSchema({
      type: "CollectionPage", path: pagePath, title: HOME.title, description: HOME.description,
      extra: {
        about: { "@type": "Thing", name: "Inteligencia artificial" },
        keywords: "recursos de IA, aprender IA, inteligencia artificial en español, cursos de IA gratis, machine learning, deep learning",
      },
    }),
    T.faqSchema(HOME.faq),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Temas para aprender inteligencia artificial",
      numberOfItems: TEMAS.length,
      itemListElement: TEMAS.map((s, i) => ({
        "@type": "ListItem", position: i + 1, name: s.title,
        url: T.abs(`/temas/${s.slug}/`), description: s.desc,
      })),
    },
  ];

  const main = `
      <header class="hero">
        <h1>${HOME.h1}</h1>
        <p class="lede">${HOME.lede}</p>
        ${statsHTML()}
      </header>
      <div class="prose home-intro">${HOME.intro}</div>

      <section class="section" id="rutas">
        <h2><span class="sec-ico" aria-hidden="true">🧭</span> Rutas de aprendizaje</h2>
        <p class="sec-desc">
          El error más común al aprender inteligencia artificial es empezar por todos lados a la vez.
          Elegí una ruta según de dónde venís, seguila en orden y recién después dispersate.
        </p>
        ${rutaCardsHTML()}
      </section>

      <section class="section" id="colecciones">
        <h2><span class="sec-ico" aria-hidden="true">🗂️</span> Colecciones</h2>
        <p class="sec-desc">
          Los mismos recursos cortados por otro eje: por precio, por formato o por cuán
          imprescindibles son. Es como los busca mucha gente.
        </p>
        <nav class="related colecciones" aria-label="Colecciones">
          <ul>${COLECCIONES.map(c => `<li><a href="/colecciones/${c.slug}/"><span aria-hidden="true">${c.icon}</span> ${T.esc(c.h1)}<em>${R.filter(c.filtro).length} recursos</em></a></li>`).join("")}</ul>
        </nav>
      </section>

      <h2 class="group-heading" id="temas">Todos los temas</h2>
      <p class="sec-desc">
        ${R.length} recursos organizados en ${TEMAS.length} temas, de la matemática de base a la
        interpretabilidad y la seguridad. Cada tema tiene su propia página con el listado completo.
      </p>
${homeSectionsHTML()}

      ${T.faqHTML(HOME.faq, "Preguntas frecuentes sobre aprender IA")}`;

  return pageOf("index.html", T.layout(
    { path: pagePath, title: HOME.title, description: HOME.description, schema },
    { nav: T.navHTML(NAV_SECTIONS, counts, "/"), breadcrumb: "", main }
  ));
}

/* -------------------------------------------------- Páginas de tema --- */

function temaMain(s, c, items) {
  const secTitle = s.title;

  if (s.slug === "papers-clave") {
    return `
      <header class="hero page-hero">
        <h1>${T.esc(c.h1)}</h1>
        <div class="prose lede">${c.intro}</div>
      </header>
      <div class="prose">
        <div class="timeline">${TIMELINE.map(t => `
          <div class="tl-item">
            <div class="tl-year">${T.esc(t.year)}</div>
            <h2>${T.esc(t.title)}</h2>
            <p>${T.esc(t.text)}</p>
          </div>`).join("")}
        </div>
      </div>`;
  }

  if (s.slug === "futuro") {
    return `
      <header class="hero page-hero">
        <h1>${T.esc(c.h1)}</h1>
        <div class="prose lede">${c.intro}</div>
      </header>
      <div class="prose">${FUTURO_HTML}</div>
      ${items.length ? T.cardsHTML(items, secTitle) : ""}`;
  }

  return `
      <header class="hero page-hero">
        <h1>${T.esc(c.h1)}</h1>
        <div class="prose lede">${c.intro}</div>
      </header>
      <section class="section" id="recursos">
        <h2>${T.esc(c.lista ? c.lista.replace("{n}", items.length) : `${items.length} recursos de ${T.lowerTitle(secTitle)}`)}</h2>
        <p class="sec-desc">
          Ordenados con los imprescindibles primero y agrupados por tipo. Los marcados con ★ son los que
          recomendaría alguien que ya recorrió el camino; los que dicen «gratis» no cuestan nada.
        </p>
        ${T.cardsHTML(items, secTitle)}
      </section>`;
}

function buildTema(s) {
  const c = copyFor(s.slug);
  if (!c.h1) throw new Error(`Falta copy SEO para la sección "${s.slug}" en build/copy.js`);

  const pagePath = `/temas/${s.slug}/`;
  const items = T.sortItems(R.filter(r => r.sec === s.slug));
  const trail = [HOME_CRUMB, { name: "Temas", path: "/#temas" }, { name: s.title, path: pagePath }];

  const schema = [
    T.pageSchema({
      type: "CollectionPage", path: pagePath, title: c.title, description: c.description,
      extra: { about: { "@type": "Thing", name: s.title } },
    }),
    T.breadcrumbSchema(trail),
  ];
  if (items.length) schema.push(T.itemListSchema(items, { name: `Recursos de ${s.title}`, path: pagePath }));
  if (c.faq) schema.push(T.faqSchema(c.faq));

  const main = `${temaMain(s, c, items)}
      ${T.faqHTML(c.faq, c.faqTitulo || `Preguntas frecuentes sobre ${T.lowerTitle(s.title)}`)}
      ${T.relatedHTML(c.related || [], SECTION_MAP)}`;

  return pageOf(path.join("temas", s.slug, "index.html"), T.layout(
    { path: pagePath, title: c.title, description: c.description, schema, ogImage: `/assets/og/tema-${s.slug}.png` },
    { nav: T.navHTML(NAV_SECTIONS, counts, pagePath), breadcrumb: T.breadcrumbHTML(trail), main }
  ));
}

/* ------------------------------------------------- Rutas de aprendizaje --- */

function buildRutasIndex() {
  const pagePath = "/rutas/";
  const title = "Rutas para aprender IA: 4 caminos según tu punto de partida";
  const description = "Cuatro rutas para aprender IA según de dónde venís: desde cero, construir con LLMs, entrenar modelos o investigar. Con pasos, tiempos y recursos de cada etapa.";
  const trail = [HOME_CRUMB, { name: "Rutas de aprendizaje", path: pagePath }];

  const schema = [
    T.pageSchema({ type: "CollectionPage", path: pagePath, title, description }),
    T.breadcrumbSchema(trail),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Rutas de aprendizaje de inteligencia artificial",
      numberOfItems: RUTAS.length,
      itemListElement: RUTAS.map((r, i) => ({
        "@type": "ListItem", position: i + 1, name: r.h1,
        url: T.abs(`/rutas/${r.slug}/`), description: r.para,
      })),
    },
  ];

  const main = `
      <header class="hero page-hero">
        <h1>Rutas para aprender inteligencia artificial</h1>
        <div class="prose lede">
          <p>
            El error más común al empezar es estudiar por todos lados a la vez: un curso de matemática, un
            tutorial de PyTorch, un video sobre transformers y tres newsletters la misma semana. Elegí una
            de estas cuatro rutas según de dónde venís y a dónde querés llegar, seguila en orden y recién
            después dispersate.
          </p>
          <p>
            Cada ruta tiene sus pasos, el tiempo realista que lleva y los recursos concretos de cada etapa.
            Si todavía no sabés cuál es la tuya, empezá por la
            <a href="/guia/como-aprender-ia-desde-cero/">guía sobre cómo aprender IA</a>.
          </p>
        </div>
      </header>
      <section class="section">
        ${rutaCardsHTML()}
      </section>
      <div class="prose">${CALLOUT_PASIVO}</div>`;

  return pageOf(path.join("rutas", "index.html"), T.layout(
    { path: pagePath, title, description, schema, ogImage: "/assets/og/rutas.png" },
    { nav: T.navHTML(NAV_SECTIONS, counts, pagePath), breadcrumb: T.breadcrumbHTML(trail), main }
  ));
}

function buildRuta(r) {
  const pagePath = `/rutas/${r.slug}/`;
  const trail = [HOME_CRUMB, { name: "Rutas", path: "/rutas/" }, { name: r.nav, path: pagePath }];

  const schema = [
    T.pageSchema({ type: "WebPage", path: pagePath, title: r.title, description: r.description }),
    T.breadcrumbSchema(trail),
    T.howToSchema(r),
  ];
  if (r.faq) schema.push(T.faqSchema(r.faq));

  const otras = RUTAS.filter(o => o.slug !== r.slug);

  const main = `
      <header class="hero page-hero">
        <h1><span aria-hidden="true">${r.icon}</span> ${T.esc(r.h1)}</h1>
        <p class="ruta-para">${T.esc(r.para)}</p>
        <div class="prose lede">${r.intro}</div>
        <p class="ruta-meta"><strong>Tiempo estimado:</strong> ${T.esc(r.tiempo)} · <strong>${r.pasos.length} pasos</strong></p>
      </header>
      <section class="section" id="pasos">
        <h2>Los ${r.pasos.length} pasos, en orden</h2>
        <ol class="pasos">${r.pasos.map((p, i) => `
          <li id="paso-${i + 1}">
            <h3>${T.esc(p.t)}</h3>
            <p>${T.esc(p.d)}</p>
            ${SECTION_MAP[p.sec] ? `<p class="paso-link"><a href="/temas/${p.sec}/">Recursos de ${T.esc(SECTION_MAP[p.sec].title.toLowerCase())} →</a></p>` : ""}
          </li>`).join("")}
        </ol>
      </section>
      <div class="prose">${CALLOUT_PASIVO}</div>
      ${T.faqHTML(r.faq)}
      <nav class="related" aria-label="Otras rutas">
        <h2>Las otras rutas</h2>
        <ul>${otras.map(o => `<li><a href="/rutas/${o.slug}/"><span aria-hidden="true">${o.icon}</span> ${T.esc(o.nav)}<em>${T.esc(o.para)}</em></a></li>`).join("")}</ul>
      </nav>`;

  return pageOf(path.join("rutas", r.slug, "index.html"), T.layout(
    { path: pagePath, title: r.title, description: r.description, schema, ogImage: `/assets/og/ruta-${r.slug}.png` },
    { nav: T.navHTML(NAV_SECTIONS, counts, "/rutas/"), breadcrumb: T.breadcrumbHTML(trail), main }
  ));
}

/* --------------------------------------------------------- Guía pilar --- */

function buildGuia() {
  const pagePath = `/guia/${GUIA.slug}/`;
  const trail = [HOME_CRUMB, { name: "Cómo aprender IA", path: pagePath }];

  const schema = [
    T.pageSchema({
      type: "Article", path: pagePath, title: GUIA.title, description: GUIA.description,
      extra: {
        articleSection: "Educación",
        about: { "@type": "Thing", name: "Aprender inteligencia artificial" },
        mainEntityOfPage: { "@type": "WebPage", "@id": T.abs(pagePath) },
        image: SITE.ogImage,
      },
    }),
    T.breadcrumbSchema([HOME_CRUMB, { name: "Cómo aprender IA", path: pagePath }]),
    T.faqSchema(GUIA.faq),
  ];

  const main = `
      <article>
        <header class="hero page-hero">
          <h1>${T.esc(GUIA.h1)}</h1>
          <p class="lede">${T.esc(GUIA.lede)}</p>
          <p class="byline-top">Por <a href="${AUTHOR.url}" rel="author">${T.esc(AUTHOR.name)}</a> ·
            Actualizado el <time datetime="${LAST_REVIEWED}">30 de julio de 2026</time></p>
        </header>
        <div class="prose guia">${GUIA.body}</div>
      </article>
      ${T.faqHTML(GUIA.faq)}
      <nav class="related" aria-label="Siguiente paso">
        <h2>Elegí tu ruta</h2>
        <ul>${RUTAS.map(r => `<li><a href="/rutas/${r.slug}/"><span aria-hidden="true">${r.icon}</span> ${T.esc(r.nav)}<em>${T.esc(r.para)}</em></a></li>`).join("")}</ul>
      </nav>`;

  return pageOf(path.join("guia", GUIA.slug, "index.html"), T.layout(
    { path: pagePath, title: GUIA.title, description: GUIA.description, schema, ogType: "article", ogImage: "/assets/og/guia.png" },
    { nav: T.navHTML(NAV_SECTIONS, counts, pagePath), breadcrumb: T.breadcrumbHTML(trail), main }
  ));
}

/* ------------------------------------------------------ Colecciones --- */

/* Cortan los mismos recursos por otro eje (gratis, libros, papers…). Cada una
   responde a una búsqueda distinta y lleva su propio texto. */
function buildColeccion(col) {
  const pagePath = `/colecciones/${col.slug}/`;
  const items = col.orden
    ? R.filter(col.filtro).sort(col.orden)
    : T.sortItems(R.filter(col.filtro));
  const trail = [HOME_CRUMB, { name: "Colecciones", path: "/colecciones/" }, { name: col.nav, path: pagePath }];

  const schema = [
    T.pageSchema({ type: "CollectionPage", path: pagePath, title: col.title, description: col.description }),
    T.breadcrumbSchema(trail),
    T.itemListSchema(items, { name: col.h1, path: pagePath }),
    T.faqSchema(col.faq),
  ];

  const otras = COLECCIONES.filter(o => o.slug !== col.slug);

  const main = `
      <header class="hero page-hero">
        <h1>${T.esc(col.h1)}</h1>
        <div class="prose lede">${col.intro}</div>
      </header>
      <section class="section" id="recursos">
        <h2>${items.length} recursos</h2>
        ${T.cardsHTML(items, r => SECTION_MAP[r.sec]?.title || "")}
      </section>
      ${T.faqHTML(col.faq)}
      <nav class="related" aria-label="Otras colecciones">
        <h2>Otras formas de recorrer la lista</h2>
        <ul>${otras.map(o => `<li><a href="/colecciones/${o.slug}/"><span aria-hidden="true">${o.icon}</span> ${T.esc(o.nav)}<em>${T.esc(o.h1)}</em></a></li>`).join("")}</ul>
      </nav>
      ${T.relatedHTML(col.related || [], SECTION_MAP)}`;

  return pageOf(path.join("colecciones", col.slug, "index.html"), T.layout(
    { path: pagePath, title: col.title, description: col.description, schema, ogImage: `/assets/og/col-${col.slug}.png` },
    { nav: T.navHTML(NAV_SECTIONS, counts, pagePath), breadcrumb: T.breadcrumbHTML(trail), main }
  ));
}

function buildColeccionesIndex() {
  const pagePath = "/colecciones/";
  const title = "Colecciones: cursos gratis, libros, papers y canales de IA";
  const description = "Los 336 recursos cortados por otro eje: cursos gratuitos, libros, papers fundamentales, canales de YouTube y la lista corta de imprescindibles.";
  const trail = [HOME_CRUMB, { name: "Colecciones", path: pagePath }];

  const conteo = col => R.filter(col.filtro).length;

  const schema = [
    T.pageSchema({ type: "CollectionPage", path: pagePath, title, description }),
    T.breadcrumbSchema(trail),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Colecciones de recursos de IA",
      numberOfItems: COLECCIONES.length,
      itemListElement: COLECCIONES.map((c, i) => ({
        "@type": "ListItem", position: i + 1, name: c.h1,
        url: T.abs(`/colecciones/${c.slug}/`), description: T.plain(c.description),
      })),
    },
  ];

  const main = `
      <header class="hero page-hero">
        <h1>Colecciones de recursos de IA</h1>
        <div class="prose lede">
          <p>
            Las <a href="/#temas">páginas de tema</a> ordenan los recursos por materia. Estas los cortan
            por otro eje, que es como los busca mucha gente: por precio, por formato o por cuán
            imprescindibles son.
          </p>
        </div>
      </header>
      <nav class="related colecciones" aria-label="Colecciones">
        <ul>${COLECCIONES.map(c => `<li><a href="/colecciones/${c.slug}/"><span aria-hidden="true">${c.icon}</span> ${T.esc(c.h1)}<em>${conteo(c)} recursos · ${T.plain(c.description)}</em></a></li>`).join("")}</ul>
      </nav>`;

  return pageOf(path.join("colecciones", "index.html"), T.layout(
    { path: pagePath, title, description, schema },
    { nav: T.navHTML(NAV_SECTIONS, counts, pagePath), breadcrumb: T.breadcrumbHTML(trail), main }
  ));
}

/* ------------------------------------------------------------ Sobre --- */

function buildSobre() {
  const pagePath = `/${SOBRE.slug}/`;
  const trail = [HOME_CRUMB, { name: "Sobre el sitio", path: pagePath }];

  const schema = [
    T.pageSchema({
      type: "AboutPage", path: pagePath, title: SOBRE.title, description: SOBRE.description,
      extra: { mainEntity: T.personSchema },
    }),
    T.breadcrumbSchema(trail),
    T.faqSchema(SOBRE.faq),
  ];

  const main = `
      <article>
        <header class="hero page-hero">
          <h1>${T.esc(SOBRE.h1)}</h1>
          <p class="lede">${T.esc(SOBRE.lede)}</p>
        </header>
        <div class="prose guia">${SOBRE.body}</div>
      </article>
      ${T.faqHTML(SOBRE.faq)}`;

  return pageOf(path.join(SOBRE.slug, "index.html"), T.layout(
    { path: pagePath, title: SOBRE.title, description: SOBRE.description, schema, ogType: "profile", ogImage: "/assets/og/sobre.png" },
    { nav: T.navHTML(NAV_SECTIONS, counts, pagePath), breadcrumb: T.breadcrumbHTML(trail), main }
  ));
}

/* ------------------------------------------------------------- 404 --- */

function build404() {
  const main = `
      <header class="hero page-hero">
        <h1>Esta página no existe</h1>
        <p class="lede">
          El enlace que seguiste no lleva a ningún lado. Puede que la página haya cambiado de dirección
          o que haya un error de tipeo.
        </p>
      </header>
      <nav class="related">
        <h2>Probá por acá</h2>
        <ul>
          <li><a href="/">Portada<em>Los ${R.length} recursos, organizados por tema</em></a></li>
          <li><a href="/rutas/">Rutas de aprendizaje<em>Cuatro caminos según tu punto de partida</em></a></li>
          <li><a href="/guia/${GUIA.slug}/">Cómo aprender IA<em>La guía sobre el método</em></a></li>
        </ul>
      </nav>`;

  return pageOf("404.html", T.layout(
    { path: "/404.html", title: "Página no encontrada | AI Learning Hub",
      description: "La página que buscás no existe.", noindex: true, schema: [] },
    { nav: T.navHTML(NAV_SECTIONS, counts, ""), breadcrumb: "", main }
  ));
}

/* --------------------------------------------- sitemap / robots / etc --- */

function buildSitemap(urls) {
  const body = urls.map(u => `  <url>
    <loc>${T.abs(u.path)}</loc>
    <lastmod>${LAST_REVIEWED}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.prio}</priority>
  </url>`).join("\n");

  write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`);
}

function buildRobots() {
  write("robots.txt", `# ${SITE.name} — ${SITE.url}
User-agent: *
Allow: /

# Los rastreadores no necesitan el JSON de datos ni los scripts.
Disallow: /*?q=

Sitemap: ${SITE.url}/sitemap.xml
`);
}

/* llms.txt: índice en markdown para los buscadores con IA (ChatGPT, Perplexity,
   Claude). Cada vez más tráfico de "¿por dónde aprendo IA?" pasa por ahí y no por
   una SERP clásica, y estos rastreadores leen mucho mejor markdown que HTML. */
function buildLlmsTxt() {
  const linea = (titulo, url, desc) => `- [${titulo}](${SITE.url}${url}): ${desc}`;

  const cuerpo = `# AI Learning Hub

> Colección curada de ${R.length} recursos para aprender inteligencia artificial, escrita en español
> por ${AUTHOR.name} (Buenos Aires, Argentina). Cubre desde la matemática de base hasta el
> entrenamiento, la alineación y el despliegue de modelos frontera. Cada recurso fue revisado
> individualmente; no es una lista agregada automáticamente.

Última revisión: ${LAST_REVIEWED}. Todo el material propio está en castellano; los recursos
enlazados están mayoritariamente en inglés, con una sección específica de material en español.

## Empezar

${linea("Guía: cómo aprender IA desde cero", `/guia/${GUIA.slug}/`, "Qué estudiar y en qué orden, cuánto tiempo lleva, qué matemática hace falta y los errores que hacen abandonar.")}
${linea("Rutas de aprendizaje", "/rutas/", "Cuatro caminos según el punto de partida.")}
${RUTAS.map(r => linea(r.h1, `/rutas/${r.slug}/`, `${r.para} Tiempo estimado: ${r.tiempo}.`)).join("\n")}

## Colecciones

${COLECCIONES.map(c => linea(c.h1, `/colecciones/${c.slug}/`, `${T.plain(c.description)} (${R.filter(c.filtro).length} recursos)`)).join("\n")}

## Temas

${TEMAS.map(s => linea(s.title, `/temas/${s.slug}/`, `${s.desc} (${counts[s.slug] || 0} recursos)`)).join("\n")}

## Sobre el sitio

- Autor: ${AUTHOR.name} — ${AUTHOR.sameAs.join(", ")}
- Criterio de curación y método: ${SITE.url}/${SOBRE.slug}/
- Código fuente: https://github.com/giancarlobrusca/ai-learning-hub
- Idioma: español (es), pensado para lectores de Latinoamérica y España
`;

  write("llms.txt", cuerpo);
}

function buildManifest() {
  write("site.webmanifest", JSON.stringify({
    name: "AI Learning Hub — Recursos para aprender IA",
    short_name: "AI Learning Hub",
    description: SITE.tagline,
    lang: "es",
    start_url: "/",
    display: "standalone",
    background_color: SITE.themeColor,
    theme_color: SITE.themeColor,
    icons: [
      { src: "/assets/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/assets/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/assets/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  }, null, 2) + "\n");
}

/* ------------------------------------------------------------- main --- */

function main() {
  const urls = [{ path: "/", freq: "weekly", prio: "1.0" }];

  buildHome();

  buildGuia();
  urls.push({ path: `/guia/${GUIA.slug}/`, freq: "monthly", prio: "0.9" });

  buildRutasIndex();
  urls.push({ path: "/rutas/", freq: "monthly", prio: "0.9" });
  for (const r of RUTAS) {
    buildRuta(r);
    urls.push({ path: `/rutas/${r.slug}/`, freq: "monthly", prio: "0.8" });
  }

  for (const s of TEMAS) {
    buildTema(s);
    urls.push({ path: `/temas/${s.slug}/`, freq: "monthly", prio: "0.8" });
  }

  buildColeccionesIndex();
  urls.push({ path: "/colecciones/", freq: "monthly", prio: "0.7" });
  for (const c of COLECCIONES) {
    buildColeccion(c);
    urls.push({ path: `/colecciones/${c.slug}/`, freq: "monthly", prio: "0.8" });
  }

  buildSobre();
  urls.push({ path: `/${SOBRE.slug}/`, freq: "yearly", prio: "0.5" });

  build404();
  buildSitemap(urls);
  buildRobots();
  buildManifest();
  buildLlmsTxt();

  console.log(`✓ ${written.length} páginas generadas`);
  console.log(`  ${R.length} recursos · ${TEMAS.length} temas · ${RUTAS.length} rutas`);
  console.log(`  sitemap.xml con ${urls.length} URLs · robots.txt · llms.txt · site.webmanifest`);
}

main();

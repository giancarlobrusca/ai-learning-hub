/* Plantillas HTML + todo el SEO técnico en un solo lugar:
   canonical, Open Graph, hreflang, breadcrumbs y JSON-LD. */

const { SITE, AUTHOR, LAST_REVIEWED } = require("./config");

const esc = s => (s || "").toString()
  .replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* Para atributos y meta tags: sin etiquetas HTML y en una sola línea. */
const plain = s => esc((s || "").toString().replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());

const abs = path => SITE.url + (path.startsWith("/") ? path : "/" + path);

/* Pasa un título a minúsculas para meterlo dentro de una frase, sin destrozar las
   siglas: "Infraestructura y GPUs" → "infraestructura y GPUs", no "gpus". */
const SIGLAS = ["GPUs", "GPU", "LLMs", "LLM", "RLHF", "RAG", "IA", "MoE", "SFT", "DPO", "GRPO", "CUDA", "KV"];
const lowerTitle = s => {
  let out = (s || "").toString().toLowerCase();
  for (const sigla of SIGLAS) {
    out = out.replace(new RegExp(`\\b${sigla.toLowerCase()}\\b`, "g"), sigla);
  }
  return out;
};

const json = obj => JSON.stringify(obj, null, 0).replace(/</g, "\\u003c");

/* ---------------------------------------------------------------- <head> --- */

/* page = { path, title, description, ogType, schema, noindex } */
function head(page) {
  const url = abs(page.path);
  const title = page.title;
  const desc = plain(page.description);
  const ogImage = page.ogImage ? SITE.url + page.ogImage : SITE.ogImage;

  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="${url}">
<meta name="robots" content="${page.noindex ? "noindex, follow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}">
<meta name="author" content="${esc(AUTHOR.name)}">
<meta name="theme-color" content="${SITE.themeColor}">
<link rel="alternate" hreflang="es" href="${url}">
<link rel="alternate" hreflang="x-default" href="${url}">

<meta property="og:type" content="${page.ogType || "website"}">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:locale" content="${SITE.locale}">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(title)} — AI Learning Hub">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="${SITE.twitter}">
<meta name="twitter:creator" content="${SITE.twitter}">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${desc}">
<meta name="twitter:image" content="${ogImage}">

<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/icon-180.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
<link rel="stylesheet" href="/assets/styles.css">
<script>try{var t=localStorage.getItem("alh-theme");if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
${(page.schema || []).map(s => `<script type="application/ld+json">${json(s)}</script>`).join("\n")}`;
}

/* ------------------------------------------------------------ JSON-LD --- */

const personSchema = {
  "@type": "Person",
  "@id": SITE.url + "/#autor",
  name: AUTHOR.name,
  url: AUTHOR.url,
  jobTitle: AUTHOR.jobTitle,
  sameAs: AUTHOR.sameAs,
  address: { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressCountry: "AR" },
};

const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SITE.url + "/#website",
  url: SITE.url + "/",
  name: SITE.name,
  alternateName: "Recursos de IA en español",
  description: SITE.tagline,
  inLanguage: "es",
  publisher: { "@id": SITE.url + "/#autor" },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: SITE.url + "/?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

function breadcrumbSchema(trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

function faqSchema(faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/* Lista de recursos de una sección: le dice a Google qué hay en la página
   sin depender de que interprete las tarjetas. */
function itemListSchema(items, { name, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: abs(path),
    numberOfItems: items.length,
    itemListElement: items.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.title,
      url: r.url,
      description: r.note || undefined,
    })),
  };
}

function pageSchema({ type = "WebPage", path, title, description, extra = {} }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": abs(path) + "#page",
    url: abs(path),
    name: title,
    headline: title,
    description: plain(description),
    inLanguage: "es",
    isPartOf: { "@id": SITE.url + "/#website" },
    author: personSchema,
    publisher: { "@id": SITE.url + "/#autor" },
    datePublished: "2026-07-29",
    dateModified: LAST_REVIEWED,
    ...extra,
  };
}

/* Una ruta de aprendizaje es literalmente un instructivo paso a paso. */
function howToSchema(ruta) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: ruta.h1,
    description: plain(ruta.description),
    inLanguage: "es",
    totalTime: "P90D",
    author: personSchema,
    step: ruta.pasos.map((p, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: p.t,
      text: p.d,
      url: abs(`/rutas/${ruta.slug}/#paso-${i + 1}`),
    })),
  };
}

/* ------------------------------------------------------------ Tarjetas --- */

const TYPES = {
  paper:       { label: "Paper",       icon: "📄" },
  curso:       { label: "Curso",       icon: "🎓" },
  video:       { label: "Video",       icon: "▶️" },
  canal:       { label: "Canal",       icon: "📺" },
  libro:       { label: "Libro",       icon: "📚" },
  blog:        { label: "Blog/Post",   icon: "✍️" },
  repo:        { label: "Repo",        icon: "🐙" },
  herramienta: { label: "Herramienta", icon: "🛠️" },
  docs:        { label: "Docs",        icon: "📘" },
  newsletter:  { label: "Newsletter",  icon: "📬" },
  podcast:     { label: "Podcast",     icon: "🎙️" },
  cuenta:      { label: "Cuenta",      icon: "👤" },
  comunidad:   { label: "Comunidad",   icon: "💬" },
  benchmark:   { label: "Benchmark",   icon: "📊" },
};

const LEVELS = {
  intro:    { label: "Inicial",    cls: "lvl-intro" },
  medio:    { label: "Intermedio", cls: "lvl-medio" },
  avanzado: { label: "Avanzado",   cls: "lvl-avanzado" },
};

const TYPE_ORDER = ["curso", "video", "canal", "podcast", "libro", "paper", "blog", "newsletter",
                    "repo", "herramienta", "docs", "benchmark", "cuenta", "comunidad"];

/* `secTitle` puede ser un texto fijo (páginas de tema) o una función del recurso
   (colecciones, donde cada tarjeta viene de una sección distinta). */
function cardHTML(r, secTitle) {
  const t = TYPES[r.type] || { label: r.type, icon: "•" };
  const lv = LEVELS[r.level];
  const sec = typeof secTitle === "function" ? secTitle(r) : secTitle;
  return `<a class="card" href="${esc(r.url)}" target="_blank" rel="noopener">
      <div class="card-top">
        <span class="card-title">${esc(r.title)}</span>
        ${r.top ? '<span class="star" title="Imprescindible">★</span>' : ""}
        ${r.by ? `<span class="card-author">· ${esc(r.by)}</span>` : ""}
      </div>
      ${r.note ? `<p class="card-note">${esc(r.note)}</p>` : ""}
      <div class="card-meta">
        <span class="tag type">${t.icon} ${t.label}</span>
        ${lv ? `<span class="tag ${lv.cls}">${lv.label}</span>` : ""}
        ${r.year ? `<span class="tag year">${r.year}</span>` : ""}
        ${r.free ? '<span class="tag free">gratis</span>' : ""}
        ${r.es ? '<span class="tag es">español</span>' : ""}
        ${sec ? `<span class="tag">${esc(sec)}</span>` : ""}
      </div>
    </a>`;
}

const sortItems = list =>
  [...list].sort((a, b) => (b.top ? 1 : 0) - (a.top ? 1 : 0) || (a.title > b.title ? 1 : -1));

/* Dentro de una sección agrupamos por tipo si hay variedad suficiente. */
function cardsHTML(items, secTitle) {
  const byType = {};
  items.forEach(r => (byType[r.type] = byType[r.type] || []).push(r));
  const groups = TYPE_ORDER.filter(t => byType[t]);

  if (groups.length >= 3) {
    return groups.map(t => `
      <h3 class="subhead">${TYPES[t].icon} ${TYPES[t].label}</h3>
      <div class="cards">${sortItems(byType[t]).map(r => cardHTML(r, secTitle)).join("")}</div>`).join("");
  }
  return `<div class="cards">${sortItems(items).map(r => cardHTML(r, secTitle)).join("")}</div>`;
}

/* ------------------------------------------------------------- Layout --- */

function navHTML(sections, counts, currentPath) {
  const link = (href, inner, active) =>
    `<a href="${href}"${active ? ' aria-current="page"' : ""}>${inner}</a>`;

  const items = sections.map(s => {
    if (s.group) return `<div class="nav-group-title">${esc(s.group)}</div>`;
    const href = `/temas/${s.slug}/`;
    const c = counts[s.slug];
    return link(href,
      `<span class="n-ico" aria-hidden="true">${s.icon}</span><span>${esc(s.title)}</span>` +
      (c ? `<span class="n-count">${c}</span>` : ""),
      currentPath === href);
  }).join("\n      ");

  return `<div class="nav-group-title">Inicio</div>
      ${link("/", '<span class="n-ico" aria-hidden="true">🏠</span><span>Portada</span>', currentPath === "/")}
      ${link("/rutas/", '<span class="n-ico" aria-hidden="true">🧭</span><span>Rutas de aprendizaje</span>', currentPath === "/rutas/")}
      ${link("/guia/como-aprender-ia-desde-cero/", '<span class="n-ico" aria-hidden="true">📖</span><span>Cómo aprender IA</span>', currentPath === "/guia/como-aprender-ia-desde-cero/")}
      ${link("/colecciones/", '<span class="n-ico" aria-hidden="true">🗂️</span><span>Colecciones</span>', currentPath.startsWith("/colecciones/"))}
      ${items}
      <div class="nav-group-title">El sitio</div>
      ${link("/sobre/", '<span class="n-ico" aria-hidden="true">✍️</span><span>Quién lo hace</span>', currentPath === "/sobre/")}`;
}

function breadcrumbHTML(trail) {
  if (trail.length < 2) return "";
  const parts = trail.map((c, i) =>
    i === trail.length - 1
      ? `<li><span aria-current="page">${esc(c.name)}</span></li>`
      : `<li><a href="${c.path}">${esc(c.name)}</a></li>`);
  return `<nav class="breadcrumb" aria-label="Miga de pan"><ol>${parts.join("")}</ol></nav>`;
}

function faqHTML(faq, heading = "Preguntas frecuentes") {
  if (!faq || !faq.length) return "";
  return `<section class="section faq" id="preguntas-frecuentes">
        <h2>${heading}</h2>
        ${faq.map(f => `<details>
          <summary><h3>${esc(f.q)}</h3></summary>
          <div class="faq-a"><p>${esc(f.a)}</p></div>
        </details>`).join("\n        ")}
      </section>`;
}

function relatedHTML(slugs, sectionMap) {
  const links = slugs.map(s => sectionMap[s]).filter(Boolean);
  if (!links.length) return "";
  return `<nav class="related" aria-label="Temas relacionados">
        <h2>Seguí por acá</h2>
        <ul>${links.map(s =>
          `<li><a href="/temas/${s.slug}/"><span aria-hidden="true">${s.icon}</span> ${esc(s.title)}
            <em>${esc(s.desc)}</em></a></li>`).join("")}</ul>
      </nav>`;
}

function footerHTML() {
  return `<footer>
        <p class="byline">
          Curado y escrito por <a href="${AUTHOR.url}" rel="author">${esc(AUTHOR.name)}</a>,
          desarrollador de software en Buenos Aires.
          <span>Última revisión: <time datetime="${LAST_REVIEWED}">30 de julio de 2026</time>.</span>
        </p>
        <p>
          <strong>AI Learning Hub</strong> · Colección curada de recursos para aprender inteligencia artificial
          en español. Todos los enlaces apuntan a las fuentes originales; el mérito es de sus autores.
        </p>
        <p class="foot-nav">
          <a href="/">Portada</a> ·
          <a href="/rutas/">Rutas de aprendizaje</a> ·
          <a href="/guia/como-aprender-ia-desde-cero/">Cómo aprender IA</a> ·
          <a href="/colecciones/cursos-de-ia-gratis/">Cursos gratis</a> ·
          <a href="/temas/espanol/">Recursos en español</a> ·
          <a href="/sobre/">Quién lo hace</a> ·
          <a href="https://github.com/giancarlobrusca/ai-learning-hub" rel="noopener">Código en GitHub</a>
        </p>
      </footer>`;
}

/* page = { path, title, description, schema, ogType, bodyClass }
   parts = { nav, breadcrumb, main, statsHTML } */
function layout(page, parts) {
  return `<!DOCTYPE html>
<html lang="es" data-theme="dark">
<head>
${head(page)}
</head>
<body${page.bodyClass ? ` class="${page.bodyClass}"` : ""}>
<a class="skip-link" href="#contenido">Saltar al contenido</a>

<div class="layout">

  <aside class="sidebar" id="sidebar">
    <a class="brand" href="/">
      <div class="brand-mark" aria-hidden="true">AI</div>
      <div class="brand-text">
        <strong>AI Learning Hub</strong>
        <span>Recursos de IA en español</span>
      </div>
    </a>
    <nav class="nav" id="nav" aria-label="Secciones">
      ${parts.nav}
    </nav>
  </aside>

  <main class="main">

    <div class="topbar">
      <button class="menu-btn" id="menu-btn" aria-label="Abrir menú" aria-expanded="false">☰</button>
      <form class="search-wrap" role="search" action="/" method="get">
        <label class="sr-only" for="search">Buscar recursos de IA</label>
        <input id="search" name="q" type="search" autocomplete="off" spellcheck="false"
               placeholder="Buscar: transformers, LoRA, karpathy, RLHF, difusión…">
        <span class="kbd" aria-hidden="true">/</span>
      </form>
      <div class="topbar-actions">
        <button class="btn" id="clear-btn">Limpiar</button>
        <button class="btn" id="theme-btn" aria-label="Cambiar tema">☀️</button>
      </div>
    </div>

    <div class="content" id="contenido">
${SEARCH_SLOT}
      <div id="page-content">
${parts.breadcrumb}
${parts.main}
${footerHTML()}
      </div>
    </div>
  </main>
</div>

<script src="/data/00-secciones.js" defer></script>
<script src="/data/01-fundamentos.js" defer></script>
<script src="/data/02-arquitecturas.js" defer></script>
<script src="/data/03-entrenamiento-aplicado.js" defer></script>
<script src="/data/04-multimodal-eval-safety.js" defer></script>
<script src="/data/05-medios-comunidad.js" defer></script>
<script src="/data/06-futuro.js" defer></script>
<script src="/assets/app.js" defer></script>
</body>
</html>`;
}

/* Bloque de resultados de búsqueda: vacío en el HTML, lo llena app.js. */
const SEARCH_SLOT = `
      <div class="controls" hidden id="controls">
        <div class="filters">
          <div class="filter-label">Tipo de recurso</div>
          <div id="f-types" class="filters" style="border:0;margin:0;padding:0"></div>
          <div class="filter-label" style="margin-top:14px">Nivel y atajos</div>
          <div id="f-levels" class="filters" style="border:0;margin:0;padding:0"></div>
        </div>
        <div class="results-meta" id="results-meta"></div>
      </div>
      <section id="results-section" aria-label="Resultados de búsqueda">
        <div id="results"></div>
      </section>`;

module.exports = {
  esc, plain, abs, lowerTitle, head, layout,
  cardsHTML, cardHTML, sortItems, navHTML, breadcrumbHTML, faqHTML, relatedHTML, footerHTML,
  siteSchema, personSchema, breadcrumbSchema, faqSchema, itemListSchema, pageSchema, howToSchema,
  SEARCH_SLOT, TYPES, LEVELS, TYPE_ORDER,
};

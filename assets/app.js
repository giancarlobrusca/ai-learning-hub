/* ===========================================================
   AI Learning Hub — lógica de render, búsqueda y filtros
   =========================================================== */

const R = window.R || [];

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
  intro:    { label: "Inicial",   cls: "lvl-intro" },
  medio:    { label: "Intermedio", cls: "lvl-medio" },
  avanzado: { label: "Avanzado",  cls: "lvl-avanzado" },
};

/* Orden y metadatos de las secciones. `prose: true` = sección escrita a mano en el HTML. */
const SECTIONS = [
  { group: "Empezar aquí" },
  { slug: "roadmaps",           icon: "🧭", title: "Rutas de aprendizaje", prose: true,
    desc: "Cuatro caminos según de dónde venís y a dónde querés llegar. Elegí uno y seguilo en orden." },

  { group: "Fundamentos" },
  { slug: "matematicas",        icon: "📐", title: "Matemática",
    desc: "Álgebra lineal, cálculo, probabilidad y optimización: lo mínimo indispensable para no leer papers como si fueran magia." },
  { slug: "programacion",       icon: "⌨️", title: "Programación y tooling",
    desc: "Python, PyTorch, JAX y las herramientas con las que vas a pasar el 90% del tiempo." },
  { slug: "ml-clasico",         icon: "📈", title: "Machine learning clásico",
    desc: "Regresión, árboles, validación cruzada, bias-variance. Todo lo que sigue vigente aunque ya no aparezca en los titulares." },
  { slug: "deep-learning",      icon: "🧠", title: "Deep learning",
    desc: "Redes profundas, backpropagation, optimización, regularización y los fenómenos raros que todavía no entendemos del todo." },

  { group: "Modelos" },
  { slug: "arquitecturas",      icon: "🏗️", title: "Arquitecturas",
    desc: "Transformers y todo lo demás: MoE, modelos de espacio de estados, híbridos, difusión, GNNs. Qué hay, qué cambia y qué se mantiene." },
  { slug: "transformers-llm",   icon: "🔤", title: "Transformers y LLMs",
    desc: "De 'Attention Is All You Need' a los reportes técnicos de los modelos frontera actuales." },
  { slug: "entrenar-desde-cero", icon: "⚙️", title: "Entrenar desde cero",
    desc: "El pipeline completo de pre-entrenamiento: código, paralelismo, clusters y los detalles sucios que ningún paper cuenta." },
  { slug: "datos-scaling",      icon: "🗃️", title: "Datos, tokenización y scaling laws",
    desc: "Cómo se arma un corpus, cómo se parte el texto y cómo predecir qué vas a obtener antes de gastar el presupuesto." },

  { group: "Hacerlos útiles" },
  { slug: "post-training",      icon: "🎯", title: "Post-training, RLHF y razonamiento",
    desc: "SFT, modelos de recompensa, DPO, GRPO y RL con recompensas verificables: donde se decide hoy la calidad de un modelo." },
  { slug: "fine-tuning",        icon: "🔧", title: "Fine-tuning práctico",
    desc: "LoRA, QLoRA y las herramientas para adaptar un modelo con una sola GPU (y cuándo conviene no hacerlo)." },
  { slug: "inferencia",         icon: "⚡", title: "Inferencia y optimización",
    desc: "FlashAttention, KV cache, cuantización, decodificación especulativa y motores de serving. Acá se define el costo real." },
  { slug: "infra",              icon: "🖥️", title: "Infraestructura y GPUs",
    desc: "CUDA, Triton, clusters, tracking de experimentos y la economía del cómputo." },
  { slug: "rag-agentes",        icon: "🤖", title: "RAG, agentes y contexto",
    desc: "Recuperación, uso de herramientas, memoria, orquestación y el arte de administrar el contexto como recurso escaso." },
  { slug: "multimodal",         icon: "🎨", title: "Multimodal y generativos",
    desc: "Visión, difusión, audio, video y modelos del mundo. La rama que dejó de ser un anexo del texto." },

  { group: "Medir y controlar" },
  { slug: "evaluacion",         icon: "📊", title: "Evaluación y benchmarks",
    desc: "Sin evaluaciones no hay ingeniería. Qué mide cada benchmark, cómo se contaminan y cómo armar las tuyas." },
  { slug: "interpretabilidad",  icon: "🔬", title: "Interpretabilidad",
    desc: "Abrir el modelo y mirar adentro: circuitos, superposición, autoencoders dispersos, grafos de atribución." },
  { slug: "seguridad",          icon: "🛡️", title: "Alineamiento y seguridad",
    desc: "Alineamiento, red-teaming, riesgos, políticas de escalado y regulación. Técnico y no técnico." },

  { group: "Mantenerse al día" },
  { slug: "medios",             icon: "📡", title: "Blogs, canales y podcasts",
    desc: "Las fuentes que vale la pena seguir de forma sostenida, ordenadas por tipo." },
  { slug: "cuentas",            icon: "👥", title: "Cuentas y comunidades",
    desc: "A quién seguir y dónde se discuten las cosas antes de que lleguen a los papers." },
  { slug: "espanol",            icon: "🌎", title: "Recursos en español",
    desc: "Material de calidad en castellano. Es menos y suele ir un poco atrasado, pero sirve como puente." },

  { group: "Perspectiva" },
  { slug: "papers-clave",       icon: "🗺️", title: "Línea de tiempo", prose: true,
    desc: "Los papers que definieron cada etapa, en orden, para entender cómo llegamos hasta acá." },
  { slug: "futuro",             icon: "🔮", title: "Qué se viene",
    desc: "Qué es apuesta segura, qué está cambiando ahora mismo y qué está genuinamente en disputa." },
];

const SECTION_MAP = Object.fromEntries(SECTIONS.filter(s => s.slug).map(s => [s.slug, s]));

/* --------------------- Estado --------------------- */

const state = {
  q: "",
  types: new Set(),
  levels: new Set(),
  onlyTop: false,
  onlyEs: false,
};

/* --------------------- Utilidades --------------------- */

const norm = s => (s || "")
  .toString().toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const esc = s => (s || "").replace(/[&<>"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));

R.forEach((r, i) => {
  r._id = i;
  r._hay = norm([r.title, r.by, r.note, r.type, r.sec, SECTION_MAP[r.sec]?.title].join(" "));
});

function matches(r) {
  if (state.onlyTop && !r.top) return false;
  if (state.onlyEs && !r.es) return false;
  if (state.types.size && !state.types.has(r.type)) return false;
  if (state.levels.size && !state.levels.has(r.level)) return false;
  if (state.q) {
    const terms = norm(state.q).split(/\s+/).filter(Boolean);
    if (!terms.every(t => r._hay.includes(t))) return false;
  }
  return true;
}

const isFiltering = () =>
  state.q.trim() !== "" || state.types.size > 0 || state.levels.size > 0 || state.onlyTop || state.onlyEs;

/* --------------------- Render --------------------- */

function cardHTML(r) {
  const t = TYPES[r.type] || { label: r.type, icon: "•" };
  const lv = LEVELS[r.level];
  const secTitle = SECTION_MAP[r.sec]?.title || "";
  return `
    <a class="card" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">
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
        <span class="tag">${esc(secTitle)}</span>
      </div>
    </a>`;
}

/* Dentro de una sección, agrupamos por tipo para que se lea ordenado. */
const TYPE_ORDER = ["curso", "video", "canal", "podcast", "libro", "paper", "blog", "newsletter",
                    "repo", "herramienta", "docs", "benchmark", "cuenta", "comunidad"];

function renderSections() {
  document.querySelectorAll("[data-sec]").forEach(mount => {
    const slug = mount.dataset.sec;
    const items = R.filter(r => r.sec === slug);
    if (!items.length) { mount.innerHTML = ""; return; }

    const byType = {};
    items.forEach(r => (byType[r.type] = byType[r.type] || []).push(r));
    const groups = TYPE_ORDER.filter(t => byType[t]);

    // Si hay 3 o más tipos distintos, subdividimos con encabezados.
    if (groups.length >= 3) {
      mount.innerHTML = groups.map(t => `
        <div class="subhead">${TYPES[t].icon} ${TYPES[t].label}</div>
        <div class="cards">${sortItems(byType[t]).map(cardHTML).join("")}</div>
      `).join("");
    } else {
      mount.innerHTML = `<div class="cards">${sortItems(items).map(cardHTML).join("")}</div>`;
    }
  });
}

function sortItems(list) {
  return [...list].sort((a, b) => (b.top ? 1 : 0) - (a.top ? 1 : 0) || (a.title > b.title ? 1 : -1));
}

function renderResults() {
  const wrap = document.getElementById("results");
  const hits = R.filter(matches);
  const meta = document.getElementById("results-meta");

  if (!isFiltering()) {
    document.body.classList.remove("filtering");
    wrap.innerHTML = "";
    meta.textContent = `${R.length} recursos en ${SECTIONS.filter(s => s.slug).length} secciones`;
    return;
  }

  const wasFiltering = document.body.classList.contains("filtering");
  document.body.classList.add("filtering");
  // Al empezar a filtrar, volvemos arriba: si no, los resultados aparecen fuera de pantalla.
  if (!wasFiltering) window.scrollTo({ top: 0, behavior: "instant" });
  meta.textContent = hits.length === 0
    ? "Sin resultados"
    : `${hits.length} ${hits.length === 1 ? "recurso" : "recursos"}`;

  if (!hits.length) {
    wrap.innerHTML = `<p class="empty">Nada coincide con esos filtros. Probá con menos restricciones o buscá por autor (por ejemplo <code>karpathy</code>).</p>`;
    return;
  }

  // Agrupados por sección, respetando el orden general.
  const order = SECTIONS.filter(s => s.slug).map(s => s.slug);
  const bySec = {};
  hits.forEach(r => (bySec[r.sec] = bySec[r.sec] || []).push(r));

  wrap.innerHTML = order.filter(s => bySec[s]).map(s => `
    <div class="subhead">${SECTION_MAP[s].icon} ${SECTION_MAP[s].title} · ${bySec[s].length}</div>
    <div class="cards">${sortItems(bySec[s]).map(cardHTML).join("")}</div>
  `).join("");
}

/* --------------------- Sidebar --------------------- */

function renderNav() {
  const nav = document.getElementById("nav");
  const counts = {};
  R.forEach(r => counts[r.sec] = (counts[r.sec] || 0) + 1);

  nav.innerHTML = SECTIONS.map(s => {
    if (s.group) return `<div class="nav-group-title">${s.group}</div>`;
    const c = counts[s.slug];
    return `<a href="#${s.slug}" data-nav="${s.slug}">
      <span class="n-ico">${s.icon}</span><span>${s.title}</span>
      ${c ? `<span class="n-count">${c}</span>` : ""}
    </a>`;
  }).join("");
}

function setupScrollSpy() {
  const links = [...document.querySelectorAll("[data-nav]")];
  const secs = links.map(l => document.getElementById(l.dataset.nav)).filter(Boolean);
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(l => l.classList.toggle("active", l.dataset.nav === e.target.id));
    });
  }, { rootMargin: "-80px 0px -70% 0px", threshold: 0 });
  secs.forEach(s => obs.observe(s));
}

/* --------------------- Filtros --------------------- */

function renderFilters() {
  const present = new Set(R.map(r => r.type));
  const typeRow = document.getElementById("f-types");
  typeRow.innerHTML = TYPE_ORDER.filter(t => present.has(t)).map(t =>
    `<button class="chip" data-f="type" data-v="${t}" aria-pressed="false">${TYPES[t].icon} ${TYPES[t].label}</button>`
  ).join("");

  const lvlRow = document.getElementById("f-levels");
  lvlRow.innerHTML = Object.entries(LEVELS).map(([k, v]) =>
    `<button class="chip" data-f="level" data-v="${k}" aria-pressed="false">${v.label}</button>`
  ).join("") +
  `<button class="chip" data-f="top" data-v="1" aria-pressed="false">★ Solo imprescindibles</button>` +
  `<button class="chip" data-f="es" data-v="1" aria-pressed="false">🌎 En español</button>`;

  document.querySelectorAll(".chip").forEach(btn => {
    btn.addEventListener("click", () => {
      const kind = btn.dataset.f, val = btn.dataset.v;
      const on = btn.getAttribute("aria-pressed") === "true";
      if (kind === "type") on ? state.types.delete(val) : state.types.add(val);
      else if (kind === "level") on ? state.levels.delete(val) : state.levels.add(val);
      else if (kind === "top") state.onlyTop = !on;
      else if (kind === "es") state.onlyEs = !on;
      btn.setAttribute("aria-pressed", String(!on));
      renderResults();
    });
  });
}

function clearFilters() {
  state.q = ""; state.types.clear(); state.levels.clear();
  state.onlyTop = false; state.onlyEs = false;
  document.getElementById("search").value = "";
  document.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", "false"));
  renderResults();
}

/* --------------------- Tema --------------------- */

function initTheme() {
  const saved = localStorage.getItem("alh-theme");
  if (saved) document.documentElement.dataset.theme = saved;
  const btn = document.getElementById("theme-btn");
  const sync = () => btn.textContent = document.documentElement.dataset.theme === "light" ? "🌙" : "☀️";
  sync();
  btn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("alh-theme", next);
    sync();
  });
}

/* --------------------- Stats --------------------- */

function renderStats() {
  const el = document.getElementById("stats");
  const count = t => R.filter(r => r.type === t).length;
  const stats = [
    [R.length, "recursos"],
    [count("paper"), "papers"],
    [count("curso") + count("video"), "cursos y videos"],
    [count("libro"), "libros"],
    [count("repo") + count("herramienta"), "repos y herramientas"],
    [R.filter(r => r.top).length, "imprescindibles"],
  ];
  el.innerHTML = stats.map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`).join("");
}

/* --------------------- Init --------------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderSections();
  renderFilters();
  renderStats();
  renderResults();
  setupScrollSpy();
  initTheme();

  // El contenido se inserta después del parseo, así que el salto por hash hay que rehacerlo
  // (y hay que desactivar la restauración de scroll del navegador, que pisa el destino).
  if (location.hash) {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const target = document.getElementById(location.hash.slice(1));
    if (target) setTimeout(() => target.scrollIntoView({ behavior: "instant", block: "start" }), 0);
  }

  const search = document.getElementById("search");
  let t;
  search.addEventListener("input", e => {
    clearTimeout(t);
    t = setTimeout(() => { state.q = e.target.value; renderResults(); }, 110);
  });

  document.getElementById("clear-btn").addEventListener("click", clearFilters);

  document.addEventListener("keydown", e => {
    if (e.key === "/" && document.activeElement !== search) { e.preventDefault(); search.focus(); }
    if (e.key === "Escape") { search.blur(); clearFilters(); }
  });

  // Menú móvil
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.getElementById("menu-btn");
  const close = () => {
    sidebar.classList.remove("open");
    document.querySelector(".scrim")?.remove();
  };
  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
    const scrim = document.createElement("div");
    scrim.className = "scrim";
    scrim.addEventListener("click", close);
    document.body.appendChild(scrim);
  });
  sidebar.addEventListener("click", e => { if (e.target.closest("a")) close(); });
});

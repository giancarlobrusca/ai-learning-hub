/* ===========================================================
   AI Learning Hub — búsqueda, filtros y tema.

   El contenido de las páginas se genera en el build (ver build.js): lo que hay acá
   es solo interacción. Nada de lo que se ve por defecto depende de este archivo.
   =========================================================== */

const R = window.R || [];
const SECTIONS = window.SECTIONS || [];

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

const SECTION_MAP = Object.fromEntries(SECTIONS.filter(s => s.slug).map(s => [s.slug, s]));

/* --------------------- Estado --------------------- */

const state = { q: "", types: new Set(), levels: new Set(), onlyTop: false, onlyEs: false };

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

/* --------------------- Render de resultados --------------------- */

function cardHTML(r) {
  const t = TYPES[r.type] || { label: r.type, icon: "•" };
  const lv = LEVELS[r.level];
  const secTitle = SECTION_MAP[r.sec]?.title || "";
  return `
    <a class="card" href="${esc(r.url)}" target="_blank" rel="noopener">
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

const sortItems = list =>
  [...list].sort((a, b) => (b.top ? 1 : 0) - (a.top ? 1 : 0) || (a.title > b.title ? 1 : -1));

function renderResults() {
  const wrap = document.getElementById("results");
  const meta = document.getElementById("results-meta");
  const controls = document.getElementById("controls");
  if (!wrap) return;

  if (!isFiltering()) {
    document.body.classList.remove("filtering");
    if (controls) controls.hidden = true;
    wrap.innerHTML = "";
    return;
  }

  const hits = R.filter(matches);
  const wasFiltering = document.body.classList.contains("filtering");
  document.body.classList.add("filtering");
  if (controls) controls.hidden = false;
  // Al empezar a filtrar volvemos arriba: si no, los resultados quedan fuera de pantalla.
  if (!wasFiltering) window.scrollTo({ top: 0, behavior: "instant" });

  meta.textContent = hits.length === 0
    ? "Sin resultados"
    : `${hits.length} ${hits.length === 1 ? "recurso" : "recursos"} de ${R.length}`;

  if (!hits.length) {
    wrap.innerHTML = `<p class="empty">Nada coincide con esos filtros. Probá con menos restricciones o buscá por autor (por ejemplo <code>karpathy</code>).</p>`;
    return;
  }

  const order = SECTIONS.filter(s => s.slug).map(s => s.slug);
  const bySec = {};
  hits.forEach(r => (bySec[r.sec] = bySec[r.sec] || []).push(r));

  wrap.innerHTML = order.filter(s => bySec[s]).map(s => `
    <h2 class="subhead"><a href="/temas/${s}/">${SECTION_MAP[s].icon} ${esc(SECTION_MAP[s].title)}</a> · ${bySec[s].length}</h2>
    <div class="cards">${sortItems(bySec[s]).map(cardHTML).join("")}</div>
  `).join("");
}

/* --------------------- Filtros --------------------- */

function renderFilters() {
  const typeRow = document.getElementById("f-types");
  const lvlRow = document.getElementById("f-levels");
  if (!typeRow || !lvlRow) return;

  const present = new Set(R.map(r => r.type));
  typeRow.innerHTML = TYPE_ORDER.filter(t => present.has(t)).map(t =>
    `<button type="button" class="chip" data-f="type" data-v="${t}" aria-pressed="false">${TYPES[t].icon} ${TYPES[t].label}</button>`
  ).join("");

  lvlRow.innerHTML = Object.entries(LEVELS).map(([k, v]) =>
    `<button type="button" class="chip" data-f="level" data-v="${k}" aria-pressed="false">${v.label}</button>`
  ).join("") +
  `<button type="button" class="chip" data-f="top" data-v="1" aria-pressed="false">★ Solo imprescindibles</button>` +
  `<button type="button" class="chip" data-f="es" data-v="1" aria-pressed="false">🌎 En español</button>`;

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
      syncUrl();
    });
  });
}

function clearFilters() {
  state.q = ""; state.types.clear(); state.levels.clear();
  state.onlyTop = false; state.onlyEs = false;
  const search = document.getElementById("search");
  if (search) search.value = "";
  document.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", "false"));
  renderResults();
  syncUrl();
}

/* La búsqueda queda en la URL para que se pueda compartir y volver atrás.
   `replaceState` para no llenar el historial con cada tecla. */
function syncUrl() {
  if (!window.history?.replaceState) return;
  const url = new URL(window.location.href);
  if (state.q.trim()) url.searchParams.set("q", state.q.trim());
  else url.searchParams.delete("q");
  window.history.replaceState(null, "", url);
}

/* --------------------- Tema --------------------- */

function initTheme() {
  const btn = document.getElementById("theme-btn");
  if (!btn) return;
  const sync = () => btn.textContent = document.documentElement.dataset.theme === "light" ? "🌙" : "☀️";
  sync();
  btn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("alh-theme", next); } catch (e) { /* modo privado */ }
    sync();
  });
}

/* --------------------- Init --------------------- */

function init() {
  renderFilters();
  initTheme();

  const search = document.getElementById("search");
  if (search) {
    // ?q=... permite enlazar una búsqueda concreta y es lo que declara el SearchAction.
    const initial = new URLSearchParams(window.location.search).get("q");
    if (initial) { search.value = initial; state.q = initial; }

    let t;
    search.addEventListener("input", e => {
      clearTimeout(t);
      t = setTimeout(() => { state.q = e.target.value; renderResults(); syncUrl(); }, 110);
    });
    search.form?.addEventListener("submit", e => {
      e.preventDefault();
      state.q = search.value;
      renderResults();
      syncUrl();
    });
  }

  renderResults();

  document.getElementById("clear-btn")?.addEventListener("click", clearFilters);

  document.addEventListener("keydown", e => {
    if (e.key === "/" && document.activeElement !== search) { e.preventDefault(); search?.focus(); }
    if (e.key === "Escape") { search?.blur(); clearFilters(); }
  });

  // Menú móvil
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.getElementById("menu-btn");
  if (sidebar && menuBtn) {
    const close = () => {
      sidebar.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      document.querySelector(".scrim")?.remove();
    };
    menuBtn.addEventListener("click", () => {
      sidebar.classList.add("open");
      menuBtn.setAttribute("aria-expanded", "true");
      const scrim = document.createElement("div");
      scrim.className = "scrim";
      scrim.addEventListener("click", close);
      document.body.appendChild(scrim);
    });
    sidebar.addEventListener("click", e => { if (e.target.closest("a")) close(); });
  }
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();

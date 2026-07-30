/* Configuración global del sitio.
   Si algún día cambia el dominio, se cambia acá y nada más: canonical, sitemap,
   Open Graph y JSON-LD salen todos de este archivo. */

const SITE_URL = "https://recursos-ia.giancarlobrusca.com";

const SITE = {
  url: SITE_URL,
  name: "AI Learning Hub",
  shortName: "AI Learning Hub",
  tagline: "Recursos para aprender inteligencia artificial, en español",
  lang: "es",
  locale: "es_AR",
  themeColor: "#0b0d12",
  ogImage: SITE_URL + "/assets/og.png",
  twitter: "@giancarlobrusca",
};

const AUTHOR = {
  name: "Giancarlo Brusca",
  url: "https://github.com/giancarlobrusca",
  sameAs: [
    "https://github.com/giancarlobrusca",
    "https://x.com/giancarlobrusca",
  ],
  jobTitle: "Desarrollador de software",
  location: "Buenos Aires, Argentina",
};

/* Fecha de última revisión del contenido. Se usa en JSON-LD y en el sitemap.
   Actualizala cuando hagas una pasada real sobre los recursos. */
const LAST_REVIEWED = "2026-07-30";

module.exports = { SITE, AUTHOR, LAST_REVIEWED };

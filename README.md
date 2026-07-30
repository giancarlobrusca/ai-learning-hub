# AI Learning Hub

Guía curada de los mejores recursos para aprender inteligencia artificial: desde la matemática de
base hasta cómo se entrena, alinea y sirve un modelo frontera, más una sección sobre hacia dónde va
el campo.

Todo el material propio está en español, orientado a lectores de Latinoamérica y España.

🔗 **https://recursos-ia.giancarlobrusca.com**

## Cómo funciona

El sitio es **HTML estático generado**. Un script de Node sin dependencias (`build.js`) lee los
datos de `data/` y el contenido de `build/`, y escribe 38 páginas HTML con todo el texto adentro.
No hay framework, no hay bundler y no hay `node_modules`.

Esto es deliberado y es una decisión de SEO: antes los 336 recursos se pintaban con JavaScript en
una sola página, y Google veía un `<div>` vacío hasta ejecutar el JS. Ahora cada tema tiene su URL
propia con contenido real en el HTML.

```bash
npm run build      # genera el sitio (o: node build.js)
npm run check      # genera y verifica SEO/enlaces (o: node build/check.js)
npm run dev        # genera y sirve en http://localhost:8000
npm run og         # regenera las imágenes de Open Graph (necesita Chrome)
```

**Importante:** los archivos generados (`index.html`, `temas/`, `rutas/`, `guia/`, `colecciones/`,
`sobre/`, `sitemap.xml`, `robots.txt`, `llms.txt`) están commiteados. Después de tocar `data/` o `build/`, corré
`npm run check` y commiteá el resultado, o el sitio publicado queda desactualizado.

## Estructura

```
ai-learning-hub/
├── build.js                    # generador: orquesta todo y escribe los archivos
├── build/
│   ├── config.js               # dominio, autor, fecha de revisión → tocá acá si cambia el dominio
│   ├── copy.js                 # copy SEO por tema (título, description, intro, FAQ) y las 4 rutas
│   ├── content.js              # portada, guía pilar, línea de tiempo y sección de futuro
│   ├── colecciones.js          # cortes transversales: cursos gratis, libros, papers, canales
│   ├── render.js               # plantillas HTML: <head>, JSON-LD, tarjetas, layout
│   ├── og.js                   # genera las imágenes de Open Graph con Chrome headless
│   └── check.js                # verificador: enlaces rotos, títulos duplicados, JSON-LD, sitemap
├── data/
│   ├── 00-secciones.js         # metadatos de las 22 secciones (compartido con el navegador)
│   ├── 01-fundamentos.js       # matemática, programación, ML clásico, deep learning
│   ├── 02-arquitecturas.js     # arquitecturas, LLMs, pre-entrenamiento, datos y scaling
│   ├── 03-entrenamiento-aplicado.js  # post-training, fine-tuning, inferencia, infra, agentes
│   ├── 04-multimodal-eval-safety.js  # multimodal, evaluación, interpretabilidad, seguridad
│   ├── 05-medios-comunidad.js  # blogs, canales, podcasts, cuentas, español
│   └── 06-futuro.js            # lecturas prospectivas
├── assets/
│   ├── styles.css              # todos los estilos
│   ├── app.js                  # búsqueda, filtros y tema (solo interacción)
│   ├── og.png                  # imagen de Open Graph de la portada (1200×630)
│   ├── og/                     # una imagen de Open Graph por página
│   └── favicon.svg, icon-*.png
├── vercel.json                 # URLs limpias, cache y cabeceras de seguridad
├── DIFUSION.md                 # plan de enlaces y difusión: lo único que no se resuelve con código
└── [generado] index.html, temas/, rutas/, guia/, colecciones/, sobre/, 404.html,
                sitemap.xml, robots.txt, llms.txt
```

## Qué incluye

- **336 recursos** curados: papers, cursos, videos, libros, blogs, repos, herramientas,
  newsletters, podcasts, cuentas de redes y comunidades.
- **22 páginas temáticas**, cada una con introducción propia, listado completo y preguntas
  frecuentes.
- **5 colecciones** que cortan la lista por otro eje: cursos gratis, libros, papers, canales de
  YouTube e imprescindibles.
- **4 rutas de aprendizaje** con pasos numerados y tiempos realistas.
- **Una guía pilar** sobre el método: qué estudiar, en qué orden y cuánto tarda.
- **Línea de tiempo** de los momentos que definieron el campo.
- **Sección "Qué se viene"** separando apuestas seguras, cambios en curso y disputas abiertas.
- Búsqueda y filtros por texto, tipo, nivel, imprescindibles y recursos en español, con la consulta
  reflejada en la URL (`/?q=karpathy`).
- Tema claro/oscuro, responsive, atajos de teclado (`/` para buscar, `Esc` para limpiar).

## Cómo agregar un recurso

Editá cualquier archivo de `data/`, sumá un objeto al array y volvé a construir.

```js
{
  sec:   "arquitecturas",   // slug de sección (ver data/00-secciones.js)
  type:  "paper",           // paper | curso | video | canal | libro | blog | repo |
                            // herramienta | docs | newsletter | podcast | cuenta |
                            // comunidad | benchmark
  level: "avanzado",        // intro | medio | avanzado
  year:  2024,
  top:   true,              // opcional: lo marca con ★ y lo ordena primero
  free:  true,              // opcional: muestra la etiqueta "gratis"
  es:    true,              // opcional: recurso en español
  title: "Título del recurso",
  by:    "Autor u organización",
  url:   "https://…",
  note:  "Por qué vale la pena y qué vas a sacar de acá."
}
```

Las notas están escritas para responder una sola pregunta: *¿por qué debería dedicarle
tiempo a esto y no a otra cosa?* Si agregás algo, mantené ese criterio; una lista sin
juicio editorial es una lista inútil.

### Agregar una sección nueva

1. Sumá una entrada a `data/00-secciones.js` (`slug`, `icon`, `title`, `desc`).
2. Agregá su copy en `build/copy.js`: `h1`, `title`, `description`, `intro`, `faq` y `related`.
   El build falla con un error explícito si falta.
3. `npm run og` para generar su imagen de Open Graph.
4. `npm run check`.

### Agregar una colección

Una colección es un corte transversal de los mismos recursos (por precio, formato, nivel…). Se
define en `build/colecciones.js` con un `filtro` sobre cada recurso, más su propio texto. El
sitemap, la navegación y el `llms.txt` se actualizan solos.

## SEO

Lo que ya está resuelto en el generador, para no perderlo de vista al editar:

- Una URL por tema, ruta y colección, con `<title>` y meta description únicos, verificados por
  `build/check.js` (falla si hay duplicados).
- Contenido en el HTML, no en JavaScript.
- JSON-LD por página: `WebSite` con `SearchAction`, `Person` como autor, `CollectionPage`,
  `ItemList`, `BreadcrumbList`, `FAQPage` y `HowTo` en las rutas.
- Canonical absoluto, `hreflang`, migas de pan visibles y una imagen de Open Graph propia por
  página (`build/og.js`), verificada por el checker.
- Página de autoría y método (`/sobre/`) con `AboutPage` + `Person`, que es lo que Google evalúa
  como E-E-A-T en contenido educativo.
- `sitemap.xml`, `robots.txt` y `llms.txt` regenerados en cada build.
- Enlaces internos contextuales: `build/render.js` enlaza términos del texto al tema que los
  explica (primera aparición, nunca a la propia página, tope de 3 por bloque).

**Si cambia el dominio**, se toca únicamente `SITE_URL` en `build/config.js` y se vuelve a
construir: canonical, sitemap, Open Graph y JSON-LD salen todos de ahí.

Después de publicar, hay que dar de alta el sitio en
[Google Search Console](https://search.google.com/search-console) y enviar `sitemap.xml`.

Lo que **no** se resuelve desde el código —conseguir que otros sitios enlacen a este, que es el
factor que decide en las búsquedas competitivas— está en **[DIFUSION.md](DIFUSION.md)**: targets
concretos, textos listos para usar y qué medir.

## Notas sobre el contenido

- Los recursos marcados con **★** son los que priorizaría dentro de cada sección si el tiempo
  fuera escaso. Filtralos con el atajo "Solo imprescindibles".
- El contenido refleja el estado del campo a mediados de 2026. Las secciones de fundamentos
  envejecen muy lento; las de post-training, agentes y futuro envejecen rápido — revisalas
  cada algunos meses. Al hacerlo, actualizá `LAST_REVIEWED` en `build/config.js`.
- Los enlaces apuntan siempre a la fuente original. Si alguno cayó, buscá el título:
  casi todos estos materiales están espejados en varios lugares.

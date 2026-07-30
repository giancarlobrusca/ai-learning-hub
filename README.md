# AI Learning Hub

Una web estática con los mejores recursos para aprender sobre modelos de inteligencia artificial:
desde la matemática de base hasta cómo se entrena, alinea y sirve un modelo frontera, más una
sección sobre hacia dónde va el campo.

Todo en español, sin dependencias, sin build, sin conexión (salvo los enlaces, obviamente).

## Cómo abrirla

```bash
# opción 1: abrir directo
open index.html

# opción 2: servidor local (recomendado)
python3 -m http.server 8000
# → http://localhost:8000
```

> Si abrís el archivo con `file://` y tu navegador bloquea los `<script>` locales,
> usá la opción 2. Con `python3 -m http.server` funciona siempre.

## Qué incluye

- **336 recursos** curados: papers, cursos, videos, libros, blogs, repos, herramientas,
  newsletters, podcasts, cuentas de redes y comunidades.
- **22 secciones temáticas**, de fundamentos matemáticos a interpretabilidad y seguridad.
- **4 rutas de aprendizaje** según punto de partida (nunca entrené un modelo / quiero construir
  con LLMs / quiero entrenar modelos / quiero investigar).
- **Línea de tiempo** de los momentos que definieron el campo.
- **Sección "Qué se viene"** separando apuestas seguras, cambios en curso y disputas abiertas.
- **Búsqueda y filtros** por texto, tipo, nivel, imprescindibles y recursos en español.
- Tema claro/oscuro, responsive, atajos de teclado (`/` para buscar, `Esc` para limpiar).

## Estructura

```
ai-learning-hub/
├── index.html                  # estructura, rutas, línea de tiempo y sección de futuro
├── assets/
│   ├── styles.css              # todos los estilos
│   └── app.js                  # render, búsqueda, filtros, navegación
└── data/
    ├── 01-fundamentos.js       # matemática, programación, ML clásico, deep learning
    ├── 02-arquitecturas.js     # arquitecturas, LLMs, pre-entrenamiento, datos y scaling
    ├── 03-entrenamiento-aplicado.js  # post-training, fine-tuning, inferencia, infra, agentes
    ├── 04-multimodal-eval-safety.js  # multimodal, evaluación, interpretabilidad, seguridad
    ├── 05-medios-comunidad.js  # blogs, canales, podcasts, cuentas, español
    └── 06-futuro.js            # lecturas prospectivas
```

## Cómo agregar un recurso

Editá cualquier archivo de `data/` y sumá un objeto al array. Ese es todo el trabajo:
no hay build ni índice que regenerar.

```js
{
  sec:   "arquitecturas",   // slug de sección (ver SECTIONS en assets/app.js)
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

1. Sumá una entrada a `SECTIONS` en `assets/app.js` (`slug`, `icon`, `title`, `desc`).
2. Agregá en `index.html` un bloque:

```html
<section class="section" id="mi-slug">
  <h2><span class="sec-ico">🎲</span> Mi sección</h2>
  <p class="sec-desc">Descripción.</p>
  <div data-sec="mi-slug"></div>
</section>
```

La navegación lateral, los contadores y los filtros se actualizan solos.

## Notas sobre el contenido

- Los recursos marcados con **★** son los que priorizaría dentro de cada sección si el tiempo
  fuera escaso. Filtralos con el atajo "Solo imprescindibles".
- El contenido refleja el estado del campo a mediados de 2026. Las secciones de fundamentos
  envejecen muy lento; las de post-training, agentes y futuro envejecen rápido — revisalas
  cada algunos meses.
- Los enlaces apuntan siempre a la fuente original. Si alguno cayó, buscá el título:
  casi todos estos materiales están espejados en varios lugares.

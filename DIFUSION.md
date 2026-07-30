# Plan de difusión y enlaces

Todo lo que depende de la página ya está hecho: contenido, estructura, datos estructurados,
rendimiento. Lo que falta para competir por **"recursos de ia"** y **"aprender ia"** es lo único que
no se resuelve escribiendo código — que otros sitios enlacen a este.

Este documento es la lista concreta de qué hacer, en qué orden, y con qué texto.

---

## Antes que nada: dos cosas sin las cuales nada de esto sirve

1. **Que el dominio resuelva.** `recursos-ia.giancarlobrusca.com` tiene que estar apuntado en Vercel
   con su CNAME. Hasta entonces cada enlace que consigas apunta al vacío.
2. **Google Search Console.** Es lo único que falta y son cinco minutos:

   1. Entrá a [Search Console](https://search.google.com/search-console) → *Agregar propiedad* →
      **Prefijo de URL** → `https://recursos-ia.giancarlobrusca.com`
   2. Elegí el método **Etiqueta HTML**. Google te muestra algo como
      `<meta name="google-site-verification" content="AbC123..." />`.
      Copiá **solo** el valor de `content`.
   3. Pegalo en `googleVerification` dentro de `build/config.js`, y después:
      ```bash
      npm run build && npx vercel --prod
      ```
      Se emite en las 37 páginas automáticamente.
   4. Volvé a Search Console y apretá *Verificar*.
   5. Ya adentro: *Sitemaps* → enviar `sitemap.xml`. Y en *Inspección de URLs*, pedir indexación
      de la portada, `/guia/como-aprender-ia-desde-cero/` y `/colecciones/cursos-de-ia-gratis/`.

   Sin esto el rastreo inicial puede tardar semanas en vez de días.

También conviene dar de alta [Bing Webmaster Tools](https://www.bing.com/webmasters): es cinco
minutos y Bing alimenta las respuestas de ChatGPT, que es tráfico creciente para consultas de este
tipo.

### IndexNow (ya configurado)

El sitio publica una clave de IndexNow en la raíz, así que Bing, Yandex y Seznam aceptan avisos
directos de cambios sin necesidad de cuenta. Las 37 URLs ya se enviaron una vez. Después de agregar
o modificar páginas, volvé a avisar:

```bash
npm run indexnow
```

Google no participa de IndexNow: para Google la vía sigue siendo Search Console.

---

## Nivel 1 — Enlaces que dependen solo de vos

### El repositorio de GitHub

`github.com/giancarlobrusca/ai-learning-hub` es un dominio con autoridad enorme que ya controlás. Hoy
está desaprovechado:

- Poner la URL del sitio en el campo **Website** del repo.
- Descripción: `Guía curada de 336 recursos para aprender inteligencia artificial, en español.`
- Topics: `inteligencia-artificial`, `machine-learning`, `deep-learning`, `learning-resources`,
  `awesome-list`, `spanish`, `español`, `llm`, `ai-education`.
- El README ya enlaza al sitio arriba de todo. ✔

Comando, si preferís hacerlo desde la terminal:

```bash
gh repo edit giancarlobrusca/ai-learning-hub \
  --homepage "https://recursos-ia.giancarlobrusca.com" \
  --description "Guía curada de 336 recursos para aprender inteligencia artificial, en español." \
  --add-topic inteligencia-artificial --add-topic machine-learning --add-topic deep-learning \
  --add-topic learning-resources --add-topic awesome-list --add-topic spanish --add-topic llm
```

Un repo con buenas topics aparece en las búsquedas internas de GitHub, que es descubrimiento gratis y
sostenido.

### Tus perfiles

X, LinkedIn y GitHub aceptan una URL en el perfil. Son enlaces `nofollow`, así que no transmiten
autoridad directa, pero sí tráfico — y el tráfico produce menciones.

Importante para el JSON-LD: el sitio declara como autor a una `Person` con `sameAs` apuntando a tu
GitHub y tu X. **Que esos perfiles enlacen de vuelta al sitio cierra el círculo** y es lo que le
permite a Google confirmar que sos vos. Es de las cosas con mejor relación esfuerzo/resultado de toda
esta lista.

---

## Nivel 2 — Awesome lists (el mejor retorno por esfuerzo)

Las listas curadas de GitHub aceptan aportes por pull request, tienen autoridad alta y enlaces
permanentes. La clave es **aportar de verdad**: leé el `CONTRIBUTING.md` de cada una y respetá el
formato exacto, porque las PR que no lo hacen se cierran sin leer.

Candidatas, en orden de afinidad:

| Lista | Por qué encaja |
|---|---|
| `josephmisiti/awesome-machine-learning` | Tiene sección por idioma; un recurso en español encaja natural |
| `ChristosChristofidis/awesome-deep-learning` | Sección de cursos y tutoriales |
| Listas `awesome-spanish` / recursos en español | Nicho exacto, menos competencia y más receptivas |
| `awesome-llm` y derivadas | La sección de aprendizaje suele estar floja |

Texto sugerido para la entrada:

> [AI Learning Hub](https://recursos-ia.giancarlobrusca.com) — 336 curated resources to learn AI,
> in Spanish. Organized in 22 topics and 4 learning paths, from the underlying math to training and
> aligning frontier models.

Y para las listas en castellano:

> [AI Learning Hub](https://recursos-ia.giancarlobrusca.com) — 336 recursos curados para aprender
> inteligencia artificial, en español. 22 temas, 4 rutas de aprendizaje y notas explicando por qué
> vale la pena cada recurso.

**Ritmo:** una PR por semana, no diez el mismo día. Un patrón de envíos masivos se lee como spam y
puede costarte el rechazo en todas.

---

## Nivel 3 — Comunidades hispanohablantes

Acá el criterio es aportar a una conversación existente, no anunciar. La forma que funciona es
responder a alguien que efectivamente preguntó "¿por dónde empiezo con IA?" con una respuesta útil
que además enlaza la página concreta que le sirve — no la portada.

- **Reddit:** r/programacion, r/devsarg, r/mexico, r/españa, r/argentina. Cada uno tiene reglas
  distintas sobre autopromoción: leelas antes. Casi todos aceptan compartir un recurso propio si
  participás de la comunidad además de publicar.
- **Discord y Telegram de IA en español.** Varios de los que están listados en
  `/temas/cuentas/` y `/temas/espanol/` tienen canal de recursos.
- **Foros de bootcamps y comunidades de desarrolladores de LATAM.**

La página que más rinde compartir depende de dónde:

| Contexto | Enlace |
|---|---|
| "¿por dónde empiezo?" | `/rutas/desde-cero/` |
| "¿algo gratis?" | `/colecciones/cursos-de-ia-gratis/` |
| "¿hay algo en español?" | `/temas/espanol/` |
| "soy dev, quiero construir con LLMs" | `/rutas/construir-con-llms/` |
| presentación general | `/` |

Cada una tiene su propia imagen de Open Graph, así que se ve bien compartida en cualquier lado.

---

## Nivel 4 — Publicaciones y agregadores

- **Hacker News (Show HN).** Público mayoritariamente anglosajón, pero un recurso en español bien
  hecho suele recibir buena recepción. Un solo intento, martes a jueves por la mañana hora del
  Pacífico. Título sugerido: `Show HN: A curated guide to learning AI, in Spanish (336 resources)`.
- **dev.to / Hashnode.** Publicar un artículo derivado de la guía —por ejemplo "Cómo aprender IA
  desde cero: el orden que funciona"— con `canonical_url` apuntando a la página original. Así el
  contenido no compite con vos y el enlace suma.
- **Menéame.** Si te interesa el público de España.
- **Newsletters de IA en español.** Varias de las listadas en `/temas/medios/` incluyen secciones de
  recursos y aceptan sugerencias.

---

## Lo que no hay que hacer

- **Comprar enlaces o usar redes de blogs.** Es la forma más rápida de comerte una penalización
  manual, y revertirla lleva meses.
- **Comentar en blogs con el enlace.** No suma autoridad desde hace más de una década y quema
  reputación.
- **Publicar el mismo texto en veinte lados.** Google detecta el patrón y las comunidades también.
- **Directorios de enlaces genéricos.** Neutros en el mejor caso, tóxicos en el peor.

---

## Qué mirar para saber si funciona

En Search Console, cada dos semanas:

1. **Impresiones por consulta.** Antes que las posiciones. Si aparecés para "cursos de ia gratis" y
   "aprender ia desde cero" aunque sea en la posición 40, el sitio está entendido; subir es cuestión
   de tiempo y enlaces.
2. **Páginas indexadas.** Deberían estar las 37. Si alguna queda como "detectada, no indexada", casi
   siempre es falta de enlaces internos o externos hacia ella.
3. **CTR de las páginas que ya rankean.** Si estás en la posición 8 con 1% de clics, el problema es
   el título, no el ranking — y eso se arregla editando `build/copy.js`.

**Expectativa honesta:** el long-tail ("qué matemática hace falta para IA", "recursos de IA en
español", "cursos de IA gratis") debería empezar a moverse en 4 a 8 semanas. Las cabeza de serie
—"recursos de ia", "aprender ia"— son otra escala: ahí compiten dominios con años de historia y
cientos de enlaces. El sitio ya está construido para poder ganarlas; lo que falta es tiempo y que
la gente lo comparta.

#!/usr/bin/env node
/* Avisa a Bing, Yandex y Seznam de que las páginas cambiaron.

     node build/indexnow.js

   No hace falta ninguna cuenta: los buscadores comprueban que el envío es legítimo
   leyendo la clave publicada en la raíz del dominio. Google no participa de este
   protocolo — para Google la vía es Search Console.

   Corré esto después de desplegar, no antes: si la página todavía no responde, el
   buscador la descarta. */

const https = require("https");
const { SITE, INDEXNOW_KEY } = require("./config");

const host = new URL(SITE.url).host;

function pedir(url, opciones = {}, cuerpo = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, opciones, res => {
      let data = "";
      res.on("data", c => (data += c));
      res.on("end", () => resolve({ status: res.statusCode, data }));
    });
    req.on("error", reject);
    if (cuerpo) req.write(cuerpo);
    req.end();
  });
}

(async () => {
  const { data: sitemap } = await pedir(SITE.url + "/sitemap.xml");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

  if (!urls.length) {
    console.error("No pude leer URLs del sitemap publicado. ¿Está desplegado el sitio?");
    process.exit(1);
  }

  /* La clave tiene que estar accesible en producción o el envío se rechaza. */
  const clave = await pedir(`${SITE.url}/${INDEXNOW_KEY}.txt`);
  if (clave.status !== 200 || clave.data.trim() !== INDEXNOW_KEY) {
    console.error(`La clave no responde en ${SITE.url}/${INDEXNOW_KEY}.txt — desplegá antes de enviar.`);
    process.exit(1);
  }

  const cuerpo = JSON.stringify({
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE.url}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  });

  const res = await pedir("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8", "Content-Length": Buffer.byteLength(cuerpo) },
  }, cuerpo);

  if (res.status === 200 || res.status === 202) {
    console.log(`✓ ${urls.length} URLs enviadas a IndexNow (HTTP ${res.status})`);
    console.log("  Bing, Yandex y Seznam las rastrean en las próximas horas.");
    console.log("  Google no participa de IndexNow: usá Search Console.");
  } else {
    console.error(`✗ IndexNow devolvió HTTP ${res.status}: ${res.data.slice(0, 300)}`);
    process.exit(1);
  }
})();

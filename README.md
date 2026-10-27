# CECUBI · Landing

Sitio del colegio CECUBI (Mérida, Yucatán): maternal, preescolar, primaria y secundaria, instalaciones, comunidad y admisiones por WhatsApp (999 151 1136).

## Abrir en local

Abre `index.html` o sirve la carpeta con cualquier servidor estático. No requiere dependencias, compilación, backend ni base de datos.

## Contenido

- HTML, CSS y JavaScript de la landing.
- Logotipo original en `assets/logo-original.png`.
- Fotografías reales del colegio en `assets/fotos` (ver [IMAGENES-DEMO.md](IMAGENES-DEMO.md)).
- [Propuesta de evolución de la plataforma](PROPUESTA.md).

## Publicación

Cloudflare Workers (archivos estáticos), cuenta ideasxinfin: https://cecubi.ideasxinfin.workers.dev

```bash
node build.mjs
npx wrangler deploy
```

`build.mjs` copia a `dist/` solo los archivos públicos; las cabeceras y la caché están en `_headers`. Si cambia el dominio, actualizar las URLs según `SEO.md`.

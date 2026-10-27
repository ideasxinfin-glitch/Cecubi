# SEO · CECUBI

Cambios técnicos invisibles (2026-10-27). El diseño, los textos y el funcionamiento no cambiaron.

## Implementado
- `title` y `meta description` enfocados en búsqueda local (Mérida, Yucatán + niveles).
- `canonical`, `hreflang` es-MX, `robots` meta, `geo.region` MX-YUC y `geo.placename`.
- Open Graph y Twitter Cards con imagen dedicada `assets/og-cecubi.jpg` (1200×630, no se muestra en la página).
- JSON-LD `@graph`: School (dirección, teléfono, correo, logo, mapa, niveles como `department`, redes) + WebSite + WebPage.
- `robots.txt` y `sitemap.xml` (con imágenes).
- `aria-hidden` en íconos decorativos; caché de assets (1 día) y de CSS/JS (1 hora) en `_headers` (Cloudflare).

## Si cambia el dominio
Reemplazar `https://cecubi.ideasxinfin.workers.dev` en `index.html` (canonical, og, JSON-LD), `robots.txt` y `sitemap.xml`. Actualizar `lastmod` del sitemap cuando cambie el contenido.

## Google Search Console
1. search.google.com/search-console → Agregar propiedad → **Prefijo de URL** `https://cecubi.ideasxinfin.workers.dev/`.
2. Verificación por **etiqueta HTML**: pegar la meta `google-site-verification` donde indica el comentario en el `<head>` de `index.html` y publicar.
3. Sitemaps → enviar `sitemap.xml`.
4. Inspección de URL → `https://cecubi.ideasxinfin.workers.dev/` → Solicitar indexación.
5. Con dominio propio, crear propiedad de **Dominio** (verificación DNS).

## Google Analytics 4
Crear propiedad GA4 y pasar el ID `G-XXXXXXX`. Como mide visitantes, conviene agregar un aviso de privacidad/cookies; eso sí es visible y requiere aprobación.

## Google Business Profile (lo que más impacta en búsquedas locales)
- Reclamar o crear el perfil "CECUBI" con categoría **Escuela** (secundarias: Preescolar, Escuela primaria, Escuela secundaria, Guardería si aplica).
- Dirección idéntica a la web: Calle 23 #365 x 38 y 40, Mérida, Yuc., C.P. 97138. Teléfono 999 151 1136. Sitio: `https://cecubi.ideasxinfin.workers.dev/`.
- Horario real, fotos reales (fachada, patios, salones), y pedir reseñas a las familias.
- Mantener el mismo nombre, dirección y teléfono en Facebook, Instagram y TikTok.

## Recomendaciones opcionales (cambian contenido visible; requieren aprobación)
- Mencionar "Mérida, Yucatán" en un texto visible del hero o de Nosotros.
- Agregar horarios de atención y una sección de preguntas frecuentes (permite FAQPage en datos estructurados).
- Un mapa de Google embebido en Contacto.
- Dominio propio (p. ej. cecubi.edu.mx o cecubi.mx).
- Textos alternativos con nombre del nivel y la ciudad en algunas fotos (son invisibles, pero describen la imagen y conviene que el colegio los revise).

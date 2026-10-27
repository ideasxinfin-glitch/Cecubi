// Copia a dist/ solo los archivos públicos del sitio (sin Fotos/, respaldos ni documentación)
// y versiona style.css y app.js con un hash de su contenido para que cada deploy se vea al instante.
import { cpSync, rmSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const publicos = ['index.html', 'style.css', 'app.js', 'robots.txt', 'sitemap.xml', '_headers', 'assets'];
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
for (const ruta of publicos) cpSync(ruta, `dist/${ruta}`, { recursive: true });

const hash = (archivo) => createHash('sha1').update(readFileSync(archivo)).digest('hex').slice(0, 8);
let html = readFileSync('dist/index.html', 'utf8');
for (const archivo of ['style.css', 'app.js']) {
  html = html.replace(`"${archivo}"`, `"${archivo}?v=${hash(archivo)}"`);
}
writeFileSync('dist/index.html', html);
console.log('dist listo:', publicos.join(', '));

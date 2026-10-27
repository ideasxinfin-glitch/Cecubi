// Copia a dist/ solo los archivos públicos del sitio (sin Fotos/, respaldos ni documentación).
import { cpSync, rmSync, mkdirSync } from 'node:fs';

const publicos = ['index.html', 'style.css', 'app.js', 'robots.txt', 'sitemap.xml', '_headers', 'assets'];
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
for (const ruta of publicos) cpSync(ruta, `dist/${ruta}`, { recursive: true });
console.log('dist listo:', publicos.join(', '));

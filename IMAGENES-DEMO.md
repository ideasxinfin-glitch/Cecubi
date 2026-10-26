# Imágenes · CECUBI

Desde el 2026-10-26 la landing usa solo fotografías reales del colegio (carpeta `Fotos`, originales sin tocar). Los recortes optimizados están en `assets/fotos`. Las imágenes de muestra generadas con IA y la versión demo anterior quedaron en `_respaldo-demo` (excluidas del deploy por `.vercelignore`).

| Archivo en assets/fotos | Origen en Fotos | Sección |
| --- | --- | --- |
| hero-resbaladilla.jpg | 11-33-37 (completa) | Portada |
| alumnos.jpg | 11-33-41 (recorte 4:5) | Nosotros |
| maternal.jpg | 11-33-21 (recorte 4:5) | Nivel Maternal |
| preescolar.jpg | 11-33-37 (niño de la izquierda) | Nivel Preescolar |
| primaria.jpg | 11-33-41 (alumna) | Nivel Primaria |
| secundaria.jpg | 11-33-41 (alumno) | Nivel Secundaria |
| area-techada.jpg | 11-32-43 | Instalaciones |
| juegos-madera.jpg | 11-33-49 | Instalaciones |
| patio-juegos.jpg | 11-33-46 | Instalaciones |
| area-mesas.jpg | 11-33-51 (sin los carteles de la pared) | Instalaciones |
| fachada.jpg | 11-33-44 | Admisiones |

`11-33-18` es un duplicado exacto de `11-32-43`.

Para regenerar los recortes: script de Pillow con las cajas de recorte de la tabla, JPEG calidad 82 progresivo.

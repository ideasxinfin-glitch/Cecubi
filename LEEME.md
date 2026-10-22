# CECUBI · Demo navegable

## Abrir la página

Extrae el ZIP completo. Entra a la carpeta `cecubi_demo` y abre `index.html` con Chrome, Edge, Firefox o Safari. Conserva `style.css`, `app.js` y `assets` junto al HTML. No requiere instalación, compilación, backend ni base de datos.

La vista de navegador de esta conversación usa http://127.0.0.1:4173 y solo está disponible en este equipo mientras siga encendido el servidor de vista previa. No es una dirección pública.

## Qué incluye

- Diseño naranja y azul marino, con el logo recuperado del ZIP original.
- Maternal, preescolar, primaria y secundaria; instalaciones; vida escolar; admisiones; contacto. Incluye 15 imágenes escolares de muestra creadas con IA, integradas como archivos locales.
- Menú móvil, enlaces internos, preguntas desplegables y botones con movimiento discreto. Respeta la preferencia de movimiento reducido.
- Selector de nivel y motivo de consulta que preparan un mensaje para el WhatsApp **9991511136**. El visitante debe enviarlo desde WhatsApp; la página no lo envía ni reserva citas.
- Enlaces Facebook e Instagram proporcionados por el usuario.
- TikTok `https://www.tiktok.com/@escuelacecubi_`, detrás de un aviso de perfil pendiente de confirmación.
- CECUBI Conecta: pestañas de avisos, calendario y mensajes, exclusivamente con datos ficticios. Sin registro, acceso de familias ni comunicación real.

## Publicar en Vercel

La ruta más sencilla para esta página estática es [Vercel Drop](https://vercel.com/drop):

1. Descomprime el ZIP.
2. Abre Vercel Drop y arrastra la carpeta `cecubi_demo` que contiene `index.html` directamente.
3. Si iniciaste sesión, elige tu equipo y nombre del proyecto, y pulsa **Deploy**.
4. Abre la URL que devuelve Vercel y prueba el menú, las pestañas y los enlaces de contacto. Conserva la URL para compartir la demo.

Vercel también permite importar un repositorio Git o publicar desde su CLI. En una importación Git selecciona **Other** como framework, sin comando de compilación, y la carpeta que contiene `index.html` como raíz del proyecto. No se necesitan variables de entorno ni servicios adicionales.

Referencia oficial consultada: [Deploying to Vercel](https://vercel.com/docs/deployments). Esta entrega no ha creado ni publicado un proyecto en una cuenta Vercel.

## Imágenes y contenido pendientes para una publicación institucional

Se recuperó el logotipo del archivo `cecubi_demo_landing.zip` encontrado en Descargas. Se conserva intacto en `assets/logo-original.png`. Un encuadre SVG elimina únicamente el espacio blanco alrededor al mostrarlo, sin modificar su dibujo o colores. El pie lo muestra sobre blanco para mantenerlo visible.

Las fotografías del ZIP eran recortes del mockup, con gráficos o textos incrustados. En esta versión se sustituyeron por 15 imágenes originales de muestra creadas con la herramienta integrada de generación de imágenes. Cubren portada, cuatro niveles educativos, comunidad escolar, cinco instalaciones, tres actividades y admisiones. La barra superior, la galería de instalaciones y el pie identifican su carácter de demo. Los alumnos, uniformes y espacios representados son ficticios.

Para la versión institucional, sustituye los archivos `assets/*-demo.jpg` por fotografías originales autorizadas del colegio. Conserva sus nombres para mantener los enlaces; adapta la descripción `alt` a cada foto real. Las imágenes se muestran completas con `width:100%;height:auto` y sin recortes de rostros. Si cambia la proporción del archivo, actualiza sus atributos `width` y `height` en HTML. La galería de instalaciones presenta posibilidades visuales de muestra; no confirma que el colegio ofrezca esos espacios.

La dirección y el correo se conservaron del HTML original. Los textos de presentación son una propuesta editorial; no se inventaron precios, horarios, cupos, acreditaciones ni testimonios. Confirma dirección, correo y contenido con CECUBI antes de convertir esta demo en sitio oficial.

TikTok no pudo verificarse: el servicio impidió acceder al perfil durante esta sesión. El aviso visible evita presentarlo como confirmado.

La demo incluye `noindex,nofollow` en HTML y en `vercel.json`. Para indexar una futura versión oficial, retira ambas instrucciones después de validar el contenido. No hay cookies, analítica, formularios que almacenen datos ni dependencias de tipografías externas.

## Archivos

- `index.html`: estructura y textos.
- `style.css`: colores, tamaños, responsive y animaciones.
- `app.js`: navegación, consulta de WhatsApp y pestañas.
- `assets/logo-original.png`: logo original recuperado.
- `assets/*-demo.jpg`: imágenes escolares ficticias optimizadas para la página.
- `IMAGENES-DEMO.md`: inventario, instrucciones para reemplazarlas y descripción de los prompts utilizados.
- `vercel.json`: configuración de publicación estática y no indexación.

## Comprobación realizada

La versión con imágenes se inspeccionó en navegador de escritorio de 1280 px y en marcos de 390, 320 y 768 px (área útil de 375, 305 y 753 px, descontando barras de desplazamiento). Sin desbordamiento horizontal de documento ni elementos de contenido fuera del ancho útil en estas medidas. Se verificaron las 15 imágenes locales, las galerías de instalaciones y vida escolar, el menú móvil que abre y cierra al navegar y las pestañas de Conecta. Las imágenes se muestran completas, sin recorte adicional en CSS. Se retiró el botón flotante para que no tape los textos o las acciones de las secciones.

WhatsApp prepara una URL con el número y mensaje seleccionados y ofrece un enlace directo si la ventana emergente no se abre. No se envió ningún mensaje; no se comprobó recepción en el teléfono. No se verificó en dispositivos físicos ni en todos los navegadores.

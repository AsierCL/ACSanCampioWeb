Quiero que generes la estructura completa de una landing page para una asociación cultural. Necesito que sigas estas instrucciones de forma estricta, y que el código resultante sea modular, limpio y fácil de editar, evitando archivos enormes y separando lógica, estilos y contenido cuando sea posible.

🎯 Objetivo general

Crear una web estática compuesta por:

index.html (Inicio)

actividades.html (Actividades con días y horarios)

contacto.html (Contacto con ubicación, teléfono, email, etc.)

Un archivo CSS global (/css/styles.css)

Un archivo JS para interacciones mínimas (/js/main.js)

Una carpeta /assets para imágenes, logos e íconos.

Todas las páginas deben compartir:

Mismo navbar

Mismo footer

Mismo estilo global

🧭 Navbar (en TODAS las páginas)

Debe incluir:

A la izquierda: el logo de la asociación (usar un placeholder).

En el centro: enlaces a

Inicio

Actividades

Contacto

A la derecha: iconos de redes sociales (Facebook, Instagram, YouTube).
Puede usar iconos SVG o de un CDN como FontAwesome.

El navbar debe ser responsive.

🏞️ Header (solo en index.html)

Un header grande tipo "hero":

Una foto de fondo (imagen placeholder en /assets/hero.jpg)

Título principal de la asociación

Un subtítulo o lema opcional

El texto debe ser fácilmente editable.

🏛️ index.html — Página Inicio

Debe incluir:

Sección de presentación de la asociación (texto placeholder)

Diseño limpio y modular (cada sección dentro de <section> con clases claras)

🎵 actividades.html — Página Actividades

Mostrar:

Lista o tarjetas con actividades culturales (ej: clases de música)

Cada tarjeta debe incluir:

Nombre de la actividad

Breve descripción

Día/s

Horario

(Opcional) foto o icono

📍 contacto.html — Página de Contacto

Debe incluir:

Dirección de la asociación

Número de teléfono

Correo electrónico

Mapa embebido (Google Maps iframe con placeholder)

Un pequeño formulario de contacto sencillo (no funcional)

🧩 Footer (en TODAS las páginas)

Contendrá:

Copyright

“Dev by AsierCL”

Logo de la asociación (usar un placeholder)

Debe ser simple pero consistente.

🎨 Estilo general

Estilo moderno, limpio y coherente en todas las páginas.

Usar CSS modular con variables (colores, tipografías, tamaños).

Layout responsive (flex / grid).

Evitar frameworks (NO Bootstrap), usar CSS puro.

📁 Estructura de archivos requerida
```
/css
   styles.css

/js
   main.js

/assets
   logo.png
   hero.jpg
   icons/

index.html
actividades.html
contacto.html
```

🛠️ Requisitos técnicos

Código bien indentado y comentado.

Clases con nombres claros (BEM recomendado).

Separar contenido, estructura y estilo.

No usar código inline salvo lo imprescindible.

🧨 Entrega final

Genera:

La estructura completa del proyecto.

El código HTML de las 3 páginas.

El CSS global.

El archivo JS con funciones básicas (ej: menú responsive).

Instrucciones para sustituir imágenes o textos fácilmente.

Genera todo el proyecto ahora.

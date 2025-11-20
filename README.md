# 🎯 Asociación Cultural - Landing Page

Sitio web estático para una asociación cultural con diseño moderno y responsive.

## 📋 Descripción del Proyecto

Landing page completa con 3 páginas principales:
- **Inicio**: Presentación de la asociación con hero header
- **Actividades**: Catálogo de actividades culturales con horarios
- **Contacto**: Información de contacto, formulario y mapa

## 🗂️ Estructura del Proyecto

```
AsociacionSancampioWeb/
│
├── index.html              # Página de inicio
├── actividades.html        # Página de actividades
├── contacto.html           # Página de contacto
│
├── css/
│   └── styles.css          # Estilos globales (con variables CSS)
│
├── js/
│   └── main.js             # JavaScript para interacciones
│
├── assets/
│   ├── logo.png            # Logo de la asociación (REEMPLAZAR)
│   ├── hero.jpg            # Imagen hero del inicio (REEMPLAZAR)
│   ├── icons/              # Carpeta para íconos personalizados
│   └── README.md           # Instrucciones para imágenes
│
└── README.md               # Este archivo
```

## 🚀 Cómo Usar

### 1. Instalación
No requiere instalación. Es un sitio web estático con HTML, CSS y JavaScript puro.

### 2. Visualización
Simplemente abre cualquier archivo HTML en tu navegador:
- `index.html` - Página principal
- `actividades.html` - Ver actividades
- `contacto.html` - Ver contacto

O usa un servidor local (opcional pero recomendado):
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego visita: `http://localhost:8000`

## ✏️ Personalización

### 📝 Editar Textos

#### Página de Inicio (`index.html`)
- **Línea 61-62**: Título y subtítulo del hero
- **Líneas 73-88**: Texto de presentación de la asociación

#### Página de Actividades (`actividades.html`)
- **Líneas 67-167**: Tarjetas de actividades (nombre, descripción, días, horarios)

#### Página de Contacto (`contacto.html`)
- **Líneas 74-125**: Dirección, teléfono, email, horario
- **Líneas 176-186**: URL del mapa de Google Maps

### 🎨 Cambiar Colores

Edita el archivo `css/styles.css` (líneas 1-30) para cambiar los colores:

```css
:root {
    --color-primary: #2c3e50;      /* Color principal */
    --color-secondary: #e74c3c;    /* Color secundario/acentos */
    --color-accent: #3498db;       /* Color de enlaces */
}
```

### 🖼️ Reemplazar Imágenes

1. **Logo** (`assets/logo.png`):
   - Dimensiones: 200x200 px (recomendado)
   - Formato: PNG con fondo transparente

2. **Hero** (`assets/hero.jpg`):
   - Dimensiones: 1920x1080 px (recomendado)
   - Formato: JPG optimizado

Ver instrucciones completas en `assets/README.md`

### 📱 Redes Sociales

Edita las URLs de redes sociales en el navbar de cada página HTML:

```html
<!-- Busca estas líneas (aproximadamente línea 40-50 en cada HTML) -->
<a href="https://facebook.com" target="_blank">        <!-- Tu Facebook -->
<a href="https://instagram.com" target="_blank">       <!-- Tu Instagram -->
<a href="https://youtube.com" target="_blank">         <!-- Tu YouTube -->
```

### 🗺️ Cambiar el Mapa

En `contacto.html` (línea 176), reemplaza el iframe de Google Maps:

1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca tu dirección
3. Haz clic en "Compartir" → "Insertar un mapa"
4. Copia el código iframe
5. Pégalo en `contacto.html`

## 🎯 Características

✅ Diseño responsive (móvil, tablet, desktop)
✅ CSS puro (sin frameworks)
✅ Variables CSS para fácil personalización
✅ Nomenclatura BEM para clases CSS
✅ Menú hamburguesa para móvil
✅ Iconos de Font Awesome
✅ Código comentado y organizado
✅ Formulario de contacto (frontend only)
✅ Mapa de Google Maps embebido
✅ Smooth scroll
✅ Animaciones sutiles

## 🛠️ Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Estilos con variables, Grid y Flexbox
- **JavaScript (Vanilla)**: Interacciones sin librerías
- **Font Awesome**: Iconos de redes sociales y UI

## 📦 CDNs Utilizados

- Font Awesome 6.4.0 (para iconos)

## ⚙️ Funcionalidades JavaScript

- Menú responsive (hamburguesa)
- Smooth scroll
- Validación básica de formulario
- Observador de intersección para animaciones
- Cierre automático del menú móvil

## 📱 Responsive

El sitio es completamente responsive con breakpoints en:
- **Desktop**: > 768px
- **Tablet**: 768px - 481px
- **Móvil**: < 480px

## 🔮 Próximas Mejoras Posibles

- [ ] Añadir backend para el formulario de contacto
- [ ] Galería de fotos de eventos
- [ ] Sistema de inscripción a actividades
- [ ] Blog/noticias
- [ ] Área de socios con login
- [ ] Calendario de eventos interactivo
- [ ] Versiones en otros idiomas

## 👨‍💻 Desarrollador

**Dev by AsierCL**

## 📄 Licencia

Este proyecto es de uso libre para la asociación cultural.

---

## 🆘 Soporte

Si necesitas ayuda para personalizar o modificar el sitio:

1. Lee este README completo
2. Revisa `assets/README.md` para imágenes
3. Los archivos están comentados para facilitar la edición
4. Usa las variables CSS para cambios de estilo rápidos

## ✨ Tips de Edición Rápida

### Cambiar el nombre de la asociación
Busca "Asociación Cultural" en todos los archivos HTML y reemplázalo.

### Añadir una nueva actividad
Copia un bloque `<article class="activity-card">` completo en `actividades.html` y edita su contenido.

### Cambiar el footer
Edita las líneas del footer en cada HTML (están al final, antes del `</body>`).

---

¡Disfruta de tu nuevo sitio web! 🎉

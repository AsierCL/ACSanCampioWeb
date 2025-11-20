# Instrucciones para Imágenes

Este directorio `/assets` contiene las imágenes y recursos visuales del sitio web.

## 📁 Archivos Necesarios

### 1. **logo.png**
- **Descripción**: Logo de la Asociación Cultural
- **Ubicación**: `/assets/logo.png`
- **Uso**: Aparece en el navbar y footer de todas las páginas
- **Recomendaciones**:
  - Formato: PNG con fondo transparente
  - Dimensiones recomendadas: 200x200 px (máximo)
  - Peso: < 100 KB

### 2. **hero.jpg**
- **Descripción**: Imagen de fondo para el header hero de la página de inicio
- **Ubicación**: `/assets/hero.jpg`
- **Uso**: Solo en `index.html` como imagen de fondo del header principal
- **Recomendaciones**:
  - Formato: JPG o PNG
  - Dimensiones recomendadas: 1920x1080 px (Full HD)
  - Peso: < 500 KB (optimizada para web)
  - Contenido: Imagen relacionada con cultura, eventos, o la asociación

### 3. **icons/** (carpeta)
- **Descripción**: Carpeta opcional para íconos personalizados
- **Ubicación**: `/assets/icons/`
- **Nota**: Actualmente se usan iconos de Font Awesome (CDN), pero puedes agregar íconos personalizados aquí si lo deseas

## 🔄 Cómo Reemplazar las Imágenes

### Paso 1: Prepara tus imágenes
1. Optimiza las imágenes antes de subirlas (usa herramientas como TinyPNG, Squoosh, etc.)
2. Renombra tus archivos exactamente como se indica arriba

### Paso 2: Coloca los archivos
1. Copia `logo.png` directamente en `/assets/`
2. Copia `hero.jpg` directamente en `/assets/`

### Paso 3: Verifica
1. Abre `index.html` en tu navegador
2. Verifica que el logo aparezca en el navbar y footer
3. Verifica que la imagen hero se muestre correctamente

## 🎨 Placeholder Actual

Mientras no tengas las imágenes reales, el sitio mostrará:
- **Logo**: Ruta rota (debes reemplazarlo)
- **Hero**: Ruta rota (debes reemplazarlo)

Puedes usar servicios de placeholder temporales como:
- https://via.placeholder.com/200x200.png?text=Logo (para logo)
- https://via.placeholder.com/1920x1080.jpg?text=Hero+Image (para hero)

O descargar imágenes libres de:
- Unsplash (https://unsplash.com)
- Pexels (https://pexels.com)
- Pixabay (https://pixabay.com)

## 📝 Editar Referencias en el Código

Si necesitas cambiar los nombres de los archivos, edita las siguientes líneas:

### Logo (en todas las páginas HTML):
```html
<img src="assets/logo.png" alt="Logo Asociación Cultural">
```

### Hero (solo en index.html, archivo CSS):
```css
.hero {
    background-image: url('../assets/hero.jpg');
}
```

## 💡 Consejos

- Mantén los nombres de archivo en minúsculas y sin espacios
- Usa formatos web optimizados (WebP, JPG optimizado, PNG comprimido)
- Asegúrate de tener los derechos de uso de las imágenes
- Considera crear versiones responsive de las imágenes grandes

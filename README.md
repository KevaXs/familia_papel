# Catálogo - Familia de Papel

Este proyecto es un catálogo web estático, diseñado con Tailwind CSS e implementado con un sistema de galerías modales y optimización de imágenes en la nube.

## 🛠 Arquitectura del Proyecto

El sistema está dividido en tres archivos principales para mantener el código HTML limpio:

1. `index.html`: Estructura del catálogo y diseño de tarjetas.
2. `cloudinary-optimizer.js`: Intercepta las imágenes de la página principal y las optimiza usando la API de Cloudinary.
3. `catalog-modal.js`: Controla las ventanas emergentes (Modales) e inyecta la información y galería de cada producto.

---

## ☁️ 1. Sistema de Imágenes y Fallbacks

Para garantizar que el catálogo cargue rápido sin gastar los datos de los usuarios, las imágenes pasan por Cloudinary.
* Parámetros activos: `f_auto,q_auto,w_600` (Conversión a WebP, compresión máxima visual y resize a 600px).

**Regla de Seguridad (Plan B):**
Si el plan gratuito de Cloudinary llega a su límite, los scripts (`onerror`) cambiarán automáticamente la URL a las carpetas relativas del servidor (Netlify).

**Uso en HTML:**
Nunca uses `src` en las tarjetas de producto. Usa este formato:
```html
<img data-src="nombre_foto.png" data-local-src="img/ruta/local.png">
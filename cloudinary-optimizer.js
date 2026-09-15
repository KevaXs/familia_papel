// cloudinary-optimizer.js
const cloudName = 'kevax'; // ¡Reemplaza esto con tu Cloud Name real!

/*
  Explicación de las transformaciones:
  f_auto: Convierte a WebP o AVIF según el navegador (ahorra muchísimo peso).
  q_auto: Comprime la imagen sin perder calidad visual.
  w_600: Redimensiona el ancho a 600px máximo (ideal para tu diseño de grid).
  c_limit: Solo reduce la imagen si es mayor a 600px, no la agranda si es menor.
*/
const transformations = 'f_auto,q_auto,w_600,c_limit';

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todas las imágenes que preparaste con data-src
    const imagesToOptimize = document.querySelectorAll('img[data-src]');

    imagesToOptimize.forEach(img => {
        // Obtenemos el nombre exacto del archivo para Cloudinary
        const fileName = img.getAttribute('data-src');
        // Obtenemos la ruta local como plan B
        const localPath = img.getAttribute('data-local-src');
        
        if (fileName) {
            // 1. Preparamos nuestro Plan B: Si la imagen falla, cargar la local
            img.onerror = function() {
                console.warn(`Falló Cloudinary para ${fileName}. Cargando imagen local de respaldo.`);
                // Cambiamos el src a la ruta local
                this.src = localPath;
                // Evitamos que el error se dispare infinitamente si la local también falla
                this.onerror = null; 
            };

            // 2. Intentamos cargar desde Cloudinary primero
            const cloudinaryUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${fileName}`;
            img.setAttribute('src', cloudinaryUrl);
        }
    });
});
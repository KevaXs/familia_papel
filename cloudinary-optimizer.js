const cloudName = 'kevax';
const transformations = 'f_auto,q_auto,w_600,c_limit'; // Optimización web

document.addEventListener('DOMContentLoaded', () => {
    const imagesToOptimize = document.querySelectorAll('img[data-src]');

    imagesToOptimize.forEach(img => {
        const fileName = img.getAttribute('data-src');
        const localPath = img.getAttribute('data-local-src');
        
        if (fileName) {
            // Plan B: Cargar ruta local si Cloudinary falla/se agotan créditos
            img.onerror = function() {
                this.src = localPath;
                this.onerror = null; 
            };

            const cloudinaryUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${fileName}`;
            img.setAttribute('src', cloudinaryUrl);
        }
    });
});
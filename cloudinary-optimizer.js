// Optimización de imágenes con Cloudinary + Plan B (rutas locales en Netlify).
const cloudName = 'kevax';
const CLD_PRESETS = {
    card: 'f_auto,q_auto,w_600,c_limit',
    thumb: 'f_auto,q_auto,w_200,c_fill,ar_1:1',
    large: 'f_auto,q_auto,w_1000,c_limit',
};
const cldUrl = (file, preset = 'card') =>
    `https://res.cloudinary.com/${cloudName}/image/upload/${CLD_PRESETS[preset]}/${file}`;

// Uso: @error="imgFallback($event, 'img/ruta/local.png')"
// Si Cloudinary falla, cambia a la ruta local. Devuelve true si hizo el cambio.
function imgFallback(e, local) {
    const img = e.target;
    if (!local || !img.src.includes('res.cloudinary.com')) return false;
    img.src = local;
    return true;
}
const cloudBaseUrl = `https://res.cloudinary.com/${cloudName}/image/upload/`;

// Base de datos de productos
const productGallery = {
    // --- TAZAS ---
    "taza-blanca-11oz": {
        title: "Taza Blanca 11 Oz",
        desc: "Calidad AAA o AA, la más clásica e ideal para cualquier diseño. Recubrimiento para colores vibrantes.",
        images: [
            { src: "mockupTazaIIPadreFlork1.png", localSrc: "img/tazas/mockupTazaIIPadreFlork1.png", tag: "Diseño" },
            { src: "tazaDragonBall.png", localSrc: "img/tazas/tazaDragonBall.png", tag: "Foto Real" },
            { src: "mockupTazaIIIBlancaGTAVI.png", localSrc: "img/tazas/mockupTazaIIIBlancaGTAVI.png", tag: "Diseño" },
            { src: "mockupTazaIIPadreFlork2.png", localSrc: "img/tazas/mockupTazaIIPadreFlork2.png", tag: "Diseño" },
            { src: "mockupTazaIIPadreFlork3.png", localSrc: "img/tazas/mockupTazaIIPadreFlork3.png", tag: "Diseño" },
            { src: "mockupTazaIIPadreFlork4.png", localSrc: "img/tazas/mockupTazaIIPadreFlork4.png", tag: "Diseño" },
            { src: "mockupTazaIIPadreFlork5.png", localSrc: "img/tazas/mockupTazaIIPadreFlork5.png", tag: "Diseño" },
            { src: "mockupTazaIIPadreFlork6.png", localSrc: "img/tazas/mockupTazaIIPadreFlork6.png", tag: "Diseño" },
            { src: "mockupTazaIIIBlancaGtaSA.png", localSrc: "img/tazas/mockupTazaIIIBlancaGtaSA.png", tag: "Diseño" },
            { src: "mockupTazaIIIBlancaGTAVI.png", localSrc: "img/tazas/mockupTazaIIIBlancaGTAVI.png", tag: "Diseño" }
        ]
    },
    "taza-color": {
        title: "Taza con Color Interior 11 y 15 (oz)",
        desc: "Dale un toque extra combinando el interior con tu diseño. Disponible con y sin cuchara.",
        images: [
            { src: "mockupTazaIIMinionsIntAzulRojo.png", localSrc: "img/tazas/mockupTazaIIMinionsIntAzulRojo.png", tag: "Diseño" },
            { src: "tazaVerdeLimaIntExtKiNiNatteruHito.png", localSrc: "img/tazas/tazaVerdeLimaIntExtKiNiNatteruHito.png", tag: "Foto Real" }
        ]
    },
    "taza-magica-mate": {
        title: "Taza Mágica Mate 11oz",
        desc: "El diseño aparece mágicamente al verter agua caliente. Acabado mate.",
        images: [
            { src: "mockupTazaIIDiaMadres11OzMagMateAzul.png", localSrc: "img/tazas/mockupTazaIIDiaMadres11OzMagMateAzul.png", tag: "Diseño" },
            { src: "mockupTazaIIIBlancaGTAV.png", localSrc: "img/tazas/mockupTazaIIIBlancaGTAV.png", tag: "Diseño" }
        ]
    },
    "taza-magica-semi": {
        title: "Taza Mágica Semibrillosa 11oz",
        desc: "Acabado liso y elegante. El diseño aparece con lo caliente.",
        images: [
            { src: "mockupTazaIIJack11OzMagSemiBrill.png", localSrc: "img/tazas/mockupTazaIIJack11OzMagSemiBrill.png", tag: "Diseño" }
        ]
    },
    "taza-magica-color": {
        title: "Taza Mágica Mate c/ Color Interior",
        desc: "Doble sorpresa: Mágica por fuera y con color por dentro.",
        images: [
            { src: "mockupTazaIIGokuBlueMagColorInt.png", localSrc: "img/tazas/mockupTazaIIGokuBlueMagColorInt.png", tag: "Diseño" }
        ]
    },
    "taza-vidrio": {
        title: "Taza de Vidrio Glaseada",
        desc: "Acabado satinado translúcido muy original.",
        images: [
            { src: "mockupTazaDiaMadFlork3Vidrio.png", localSrc: "img/tazas/mockupTazaDiaMadFlork3Vidrio.png", tag: "Diseño" }
        ]
    },
    "taza-aluminio": {
        title: "Taza Acero 12oz",
        desc: "Estilo peltre vintage (Colores: Blanco y Plata).",
        images: [
            { src: "mockupTazaIICocaAluminio.png", localSrc: "img/tazas/mockupTazaIICocaAluminio.png", tag: "Diseño" },
            { src: "mockupTazaIII12OzAluminioGtaVI2.png", localSrc: "img/tazas/mockupTazaIII12OzAluminioGtaVI2.png", tag: "Diseño" }
        ]
    },
    "taza-aluminio-asa": {
        title: "Taza Acero 350ml",
        desc: "Con resistente asa de plástico ergonómica.",
        images: [
            { src: "mockupTazaIIBmwAluminioAsaPlast.png", localSrc: "img/tazas/mockupTazaIIBmwAluminioAsaPlast.png", tag: "Diseño" }
        ]
    },
    "taza-base-redonda": {
        title: "Taza Blanca 11oz Base Redonda",
        desc: "Diseño curvado y estético.",
        images: [
            { src: "mockupTazaIINezuco11Oz.png", localSrc: "img/tazas/mockupTazaIINezuco11Oz.png", tag: "Diseño" }
        ]
    },
    "taza-glitter": {
        title: "Taza Dorada y Plateada Glitter",
        desc: "Textura de brillos tipo glitter (Escarcha).",
        images: [
            { src: "mockupTazaIIHarryGoldSilver.png", localSrc: "img/tazas/mockupTazaIIHarryGoldSilver.png", tag: "Diseño" }
        ]
    },
    "taza-espejo": {
        title: "Tazas Espejo 11Oz",
        desc: "Acabado metálico reflectante premium.",
        images: [
            { src: "mockupTazaIIHarry11OzEspejo.png", localSrc: "img/tazas/mockupTazaIIHarry11OzEspejo.png", tag: "Diseño" }
        ]
    },
    "taza-acero-doble": {
        title: "Taza Acero Doble Pared 300ml",
        desc: "Conserva la temperatura (Blanco y Plata).",
        images: [
            { src: "mockupTazaIIDbGtAluminioDblPred.png", localSrc: "img/tazas/mockupTazaIIDbGtAluminioDblPred.png", tag: "Diseño" },
            { src: "mockupTazaIIIAceroDPGTAVChicaBk.png", localSrc: "img/tazas/mockupTazaIIIAceroDPGTAVChicaBk.png", tag: "Diseño" }
        ]
    },
    "taza-perlada": {
        title: "Tazas Perladas 11Oz",
        desc: "Destellos sutiles tipo perla.",
        images: [
            { src: "mockupTazaIIFma11OzPerlado.png", localSrc: "img/tazas/mockupTazaIIFma11OzPerlado.png", tag: "Diseño" },
            { src: "mockupTazaIIIPerlaRAGTAVI1.png", localSrc: "img/tazas/mockupTazaIIIPerlaRAGTAVI1.png", tag: "Diseño" }
        ]
    },

    // --- TERMOS ---
    "termo-weekend": {
        title: "Termo Acero Weekend 500ml",
        desc: "Tapa tipo taza, botón dispensador. Acero inoxidable de doble pared.",
        images: [
            { src: "mockupTermoWeekendReZero.png", localSrc: "img/termos/mockupTermoWeekendReZero.png", tag: "Diseño" }
        ]
    },
    "termo-corcho": {
        title: "Termo Acero con base de corcho",
        desc: "Base de corcho antideslizante y diseño elegante.",
        images: [
            { src: "termoMario.jpeg", localSrc: "img/termos/termoMario.jpeg", tag: "Diseño" }
        ]
    },
    "termo-grabado-grande": {
        title: "Termo Acero Negro",
        desc: "Termo grabado a láser con popote y su espoja para limpiar (varios colores).",
        images: [
            { src: "termoGrandeMockupGrabadoBTSNegro.png", localSrc: "img/termos/termoGrandeMockupGrabadoBTSNegro.png", tag: "Diseño" },
            { src: "termoGrandeMockupGrabadoBTSAzulRosaVer3.png", localSrc: "img/termos/termoGrandeMockupGrabadoBTSAzulRosaVer3.png", tag: "Diseño" },
            { src: "termoGrandeMockupGrabadoBTSVerde.png", localSrc: "img/termos/termoGrandeMockupGrabadoBTSVerde.png", tag: "Diseño" },
            { src: "termoGrabadoLaserNegroGTAVIReal.png", localSrc: "img/termos/termoGrabadoLaserNegroGTAVIReal.png", tag: "Foto Real" },
            { src: "termoGrabadoStarWarsReal.png", localSrc: "img/termos/termoGrabadoStarWarsReal.png", tag: "Foto Real" }
        ]
    },
    "termo-skinny": {
        title: "Termo Skinny 600ml",
        desc: "Diseño alto y delgado. Incluye tapa hermética y popote.",
        images: [
            { src: "mockupTermoSkinnySakuraC.png", localSrc: "img/termos/mockupTermoSkinnySakuraC.png", tag: "Diseño" }
        ]
    },
    "termo-viajero": {
        title: "Termo Viajero 20/30 Oz",
        desc: "Ideal para llevar en el auto, con tapa de seguridad anti-derrames.",
        images: [
            { src: "mockupTermoViajeroHelloKitty.png", localSrc: "img/termos/mockupTermoViajeroHelloKitty.png", tag: "Diseño" }
        ]
    },
    "termo-recto": {
        title: "Termo Recto 450ml",
        desc: "Diseño cilíndrico minimalista, perfecto para el día a día.",
        images: [
            { src: "mockupTermoRectoBts.png", localSrc: "img/termos/mockupTermoRectoBts.png", tag: "Diseño" }
        ]
    },
    "termo-lata": {
        title: "Termo Lata 280/500ml",
        desc: "Divertida forma de lata de refresco, incluye popote retráctil.",
        images: [
            { src: "mockupTermoLataHellsing.png", localSrc: "img/termos/mockupTermoLataHellsing.png", tag: "Diseño" }
        ]
    },
    "termo-lechera": {
        title: "Termo Botella Lechera",
        desc: "Estilo vintage de botella de leche con retención térmica.",
        images: [
            { src: "mockupBotellaAceroLecheraMorat.png", localSrc: "img/botellasVasos/mockupBotellaAceroLecheraMorat.png", tag: "Diseño" }
        ]
    },
    "termo-tarro": {
        title: "Termo Tarro 600ml",
        desc: "Todo el estilo de un tarro cervecero pero térmico, con asa resistente.",
        images: [
            { src: "mockupTermoTarroLeon.png", localSrc: "img/termos/mockupTermoTarroLeon.png", tag: "Diseño" }
        ]
    },

    // --- BOTELLAS Y VASOS ---
    "botella-bola": {
        title: "Botella Deportiva Aluminio (Tapa Bola)",
        desc: "Botella deportiva de 600ml.",
        images: [
            { src: "mockupBotellaDeportivaTapaRedNsqk.png", localSrc: "img/botellasVasos/mockupBotellaDeportivaTapaRedNsqk.png", tag: "Diseño" }
        ]
    },
    "botella-lechera-acero": {
        title: "Botella Lechera de Acero",
        desc: "Pared sencilla, estilo vintage.",
        images: [
            { src: "mockupBotellaAceroLecheraMorat.png", localSrc: "img/botellasVasos/mockupBotellaAceroLecheraMorat.png", tag: "Diseño" }
        ]
    },
    "botella-boton": {
        title: "Botella Deportiva Aluminio (Botón)",
        desc: "Botón Presionable. 750 ml.",
        images: [
            { src: "mockupBotellaDeportivaTapabotonMessi.png", localSrc: "img/botellasVasos/mockupBotellaDeportivaTapabotonMessi.png", tag: "Diseño" }
        ]
    },
    "botella-aro": {
        title: "Botella Deportiva Aluminio (2)",
        desc: "Con Aro de Color. 750 ml.",
        images: [
            { src: "mockupBotellaAluminioAroColorPokemon.png", localSrc: "img/botellasVasos/mockupBotellaAluminioAroColorPokemon.png", tag: "Diseño" }
        ]
    },
    "botella-clasica": {
        title: "Botella Aluminio Clásica",
        desc: "Tapón de rosca clásico. 500, 600 y 750 ml.",
        images: [
            { src: "mockupBotellaAluminioRoscaMajinBuu.png", localSrc: "img/botellasVasos/mockupBotellaAluminioRoscaMajinBuu.png", tag: "Diseño" }
        ]
    },
    "botella-color": {
        title: "Botella Aluminio Color",
        desc: "Tapón de colores removible.",
        images: [
            { src: "termoJennie.png", localSrc: "img/botellasVasos/termoJennie.png", tag: "Diseño" },
            { src: "botellaHmgStudioReal.png", localSrc: "img/botellasVasos/botellaHmgStudioReal.png", tag: "Foto Real" }
        ]
    },
    "botella-caribe": {
        title: "Botella Aluminio Caribe",
        desc: "Diseño ergonómico y tapón de colores muy moderno.",
        images: [
            { src: "mockupBotellaDepCaribePokemon2.png", localSrc: "img/botellasVasos/mockupBotellaDepCaribePokemon2.png", tag: "Diseño" }
        ]
    },
    "botella-acero-cuello": {
        title: "Botella de Acero",
        desc: "Cuello de plástico de color.",
        images: [
            { src: "mockupBotellaAceroColorArribaPikaEevee.png", localSrc: "img/botellasVasos/mockupBotellaAceroColorArribaPikaEevee.png", tag: "Diseño" }
        ]
    },
    "lata-aluminio": {
        title: "Lata Aluminio",
        desc: "Lata ligera y resistente para bebidas frías. Incluye popote.",
        images: [
            { src: "mockupLataAluminioBelySkyePaw.png", localSrc: "img/botellasVasos/mockupLataAluminioBelySkyePaw.png", tag: "Diseño" }
        ]
    },
    "vaso-florida": {
        title: "Vaso Florida",
        desc: "Vaso tipo Starbucks de plástico reutilizable, popote incluido. 650ml.",
        images: [
            { src: "mockupVasoFloridaBellotaBurbuja.png", localSrc: "img/botellasVasos/mockupVasoFloridaBellotaBurbuja.png", tag: "Diseño" },
            { src: "vasoFloridaPokeBarReal.png", localSrc: "img/botellasVasos/vasoFloridaPokeBarReal.png", tag: "Foto Real" }
        ]
    },
    "tarro-cristal": {
        title: "Tarro Cervecero Cristal",
        desc: "Cristal pesado, transparente y muy resistente. 16oz.",
        images: [
            { src: "mockupTarroTransLuffy.png", localSrc: "img/botellasVasos/mockupTarroTransLuffy.png", tag: "Diseño" }
        ]
    },
    "tarro-glaseado": {
        title: "Tarro Cervecero Glaseado",
        desc: "Cristal Satinado / Esmerilado premium. 16oz.",
        images: [
            { src: "00MOCKUPtarroPumasVsCruzAzul.png", localSrc: "img/botellasVasos/00MOCKUPtarroPumasVsCruzAzul.png", tag: "Diseño" },
            { src: "00MOCKUPtarroAmericapng.png", localSrc: "img/botellasVasos/00MOCKUPtarroAmericapng.png", tag: "Diseño" },
            { src: "00MOCKUPtarroAtlas.png", localSrc: "img/botellasVasos/00MOCKUPtarroAtlas.png", tag: "Diseño" },
            { src: "00MOCKUPtarroChivas.png", localSrc: "img/botellasVasos/00MOCKUPtarroChivas.png", tag: "Diseño" },
            { src: "00MOCKUPtarroCruzAzul.png", localSrc: "img/botellasVasos/00MOCKUPtarroCruzAzul.png", tag: "Diseño" },
            { src: "00MOCKUPtarroDuff.png", localSrc: "img/botellasVasos/00MOCKUPtarroDuff.png", tag: "Diseño" },
            { src: "00MOCKUPtarroHomero.png", localSrc: "img/botellasVasos/00MOCKUPtarroHomero.png", tag: "Diseño" },
            { src: "00MOCKUPtarroLeon.png", localSrc: "img/botellasVasos/00MOCKUPtarroLeon.png", tag: "Diseño" },
            { src: "00MOCKUPtarroMoes.png", localSrc: "img/botellasVasos/00MOCKUPtarroMoes.png", tag: "Diseño" },
            { src: "00MOCKUPtarroMonterrey.png", localSrc: "img/botellasVasos/00MOCKUPtarroMonterrey.png", tag: "Diseño" },
            { src: "00MOCKUPtarroQueretaro.png", localSrc: "img/botellasVasos/00MOCKUPtarroQueretaro.png", tag: "Diseño" },
            { src: "00MOCKUPtarroSantos.png", localSrc: "img/botellasVasos/00MOCKUPtarroSantos.png", tag: "Diseño" },
            { src: "00MOCKUPtarroTijuana.png", localSrc: "img/botellasVasos/00MOCKUPtarroTijuana.png", tag: "Diseño" },
            { src: "00MOCKUPtarroToluca.png", localSrc: "img/botellasVasos/00MOCKUPtarroToluca.png", tag: "Diseño" },
            { src: "00MOCKUPtarroPumas.png", localSrc: "img/botellasVasos/00MOCKUPtarroPumas.png", tag: "Diseño" }
        ]
    },
    "vaso-fiesta": {
        title: "Vaso de Acero (Tipo Fiesta)",
        desc: "Vaso tipo rojo de fiesta clásico, pero en acero inoxidable. 300ml.",
        images: [
            { src: "mockupVasoAceroFreezer.png", localSrc: "img/botellasVasos/mockupVasoAceroFreezer.png", tag: "Diseño" }
        ]
    },

    // --- PLAYERAS Y GORRAS ---
    "playera-sublimada": {
        title: "Playera Sublimada",
        desc: "Tacto Algodón (Blanca). Pregunta por disponibilidad de telas.",
        images: [
            { src: "mockupPlayeraSuperMama01.jpg", localSrc: "img/playeras/mockupPlayeraSuperMama01.jpg", tag: "Diseño" }
        ]
    },
    "playera-dtf": {
        title: "Playera DTF",
        desc: "Algodón 100% premium (Cualquier Color de tela).",
        images: [
            { src: "mockupSencilloPlayeraNegra.png", localSrc: "img/playeras/mockupSencilloPlayeraNegra.png", tag: "Diseño" }
        ]
    },
    "playera-dtf-oversize": {
        title: "Playera DTF Oversize",
        desc: "Corte amplio moderno, Algodón 100% (Colores).",
        images: [
            { src: "mockupPlayeraPesoPluma.png", localSrc: "img/playeras/mockupPlayeraPesoPluma.png", tag: "Diseño" }
        ]
    },

    // --- COJINES Y BOLSAS ---
    "cojines-cuadrados": {
        title: "Cojines Cuadrados",
        desc: "Impresión a doble cara en 40x40cm.",
        images: [
            { src: "2.jpg", localSrc: "img/cojines/2.jpg", tag: "Diseño" }
        ]
    },
    "dakimakura": {
        title: "Dakimakura",
        desc: "Funda cuerpo entero de 30x10 cm (Consulta otras medidas).",
        images: [
            { src: "dakimakura_1.jpeg", localSrc: "img/cojines/dakimakura_1.jpeg", tag: "Diseño" }
        ]
    },

    // --- OFICINA Y PAPELERÍA ---
    "mouse-pads": {
        title: "Mouse Pads",
        desc: "Antideslizantes. Opciones en corte circular o rectangular.",
        images: [
            { src: "mousePadGearsOfWarHD.jpeg", localSrc: "img/mousePad/mousePadGearsOfWarHD.jpeg", tag: "Diseño" }
        ]
    },

    // --- REGALOS Y DECORACIÓN ---
    "pines-58mm": {
        title: "Pines de 58mm",
        desc: "Fabricados en Plástico de alta duración o Metálicos brillantes.",
        images: [
            { src: "mockupPinesBTSMetalPlast.png", localSrc: "img/pines/mockupPinesBTSMetalPlast.png", tag: "Diseño" }
        ]
    },
    "porta-retrato-cristal": {
        title: "Porta Retrato Cristal",
        desc: "Impresión en cristal brillante ultra claro. 13 x 23 cm.",
        images: [
            { src: "mockupPortaretratoCristalVert01.png", localSrc: "img/portaretratos/mockupPortaretratoCristalVert01.png", tag: "Diseño" }
        ]
    },
    "porta-retrato-acrilico": {
        title: "Porta Retrato Acrílico",
        desc: "Acrílico ligero y resistente a golpes, acabado glossy. 13 x 20 cm.",
        images: [
            { src: "mockupPortaretratoAcrisub.png", localSrc: "img/portaretratos/mockupPortaretratoAcrisub.png", tag: "Diseño" }
        ]
    },
    "porta-retrato-piedra": {
        title: "Porta Retrato de Piedra",
        desc: "Piedra rústica real con superficie frontal tratada para foto HD.",
        images: [
            { src: "mockupPortaretratoPiedra.png", localSrc: "img/portaretratos/mockupPortaretratoPiedra.png", tag: "Diseño" }
        ]
    },
    "porta-retrato-mdf": {
        title: "Porta Retrato MDF",
        desc: "Madera MDF sólida con corte láser preciso y borde biselado.",
        images: [
            { src: "mockupPortaretratoMDF.png", localSrc: "img/portaretratos/mockupPortaretratoMDF.png", tag: "Diseño" }
        ]
    }
};

// 1. Elementos del DOM
const modal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');
const mainImg = document.getElementById('modalMainImg');
const mainImgBadge = document.getElementById('mainImgBadge');

// 2. Controladores del Modal
function openModal(productId) {
    const data = productGallery[productId];
    if (!data) return;

    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDesc').textContent = data.desc;
    
    const wsText = encodeURIComponent(`Hola, me interesa el producto: ${data.title}`);
    document.getElementById('modalWhatsappBtn').href = `https://wa.me/524778124210?text=${wsText}`;

    const thumbContainer = document.getElementById('modalThumbnails');
    thumbContainer.innerHTML = '';

    data.images.forEach((imgData, index) => {
        const thumbUrl = `${cloudBaseUrl}f_auto,q_auto,w_200,c_fill,ar_1:1/${imgData.src}`;
        const largeUrl = `${cloudBaseUrl}f_auto,q_auto,w_1000,c_limit/${imgData.src}`;

        const thumbEl = document.createElement('img');
        
        // Plan B: Error de carga de Cloudinary
        thumbEl.onerror = function() {
            this.onerror = null;
            this.src = imgData.localSrc;
        };
        
        thumbEl.src = thumbUrl;
        thumbEl.className = "w-full h-24 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-famiCyan transition-colors";
        
        if (index === 0) {
            setMainImage(largeUrl, imgData.localSrc, imgData.tag);
            thumbEl.classList.add('border-famiCyan'); 
        }

        thumbEl.onclick = () => {
            setMainImage(largeUrl, imgData.localSrc, imgData.tag);
            Array.from(thumbContainer.children).forEach(child => {
                child.classList.remove('border-famiCyan');
                child.classList.add('border-transparent');
            });
            thumbEl.classList.remove('border-transparent');
            thumbEl.classList.add('border-famiCyan');
        };

        thumbContainer.appendChild(thumbEl);
    });

    // Animación de entrada
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
    }, 10);
    
    document.body.style.overflow = 'hidden';
}

function setMainImage(cloudUrl, localUrl, tag) {
    mainImg.style.opacity = 0; 
    setTimeout(() => {
        // Plan B: Error de carga de Cloudinary
        mainImg.onerror = function() {
            this.onerror = null;
            this.src = localUrl;
        };
        
        mainImg.src = cloudUrl;
        mainImg.style.opacity = 1;
        
        if (tag) {
            mainImgBadge.textContent = tag;
            mainImgBadge.classList.remove('hidden');
            if(tag === 'Foto Real' || tag === 'Grabado Láser') {
                mainImgBadge.className = 'absolute top-4 left-4 bg-famiMagenta text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10';
            } else {
                mainImgBadge.className = 'absolute top-4 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10';
            }
        } else {
            mainImgBadge.classList.add('hidden');
        }
    }, 150);
}

function closeModal() {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0', 'pointer-events-none');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; 
    }, 300);
}

// Cierre al dar clic afuera
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
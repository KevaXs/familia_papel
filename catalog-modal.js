// catalog-modal.js

// Ya no declaramos cloudName aquí porque lo toma de cloudinary-optimizer.js
const cloudBaseUrl = `https://res.cloudinary.com/${cloudName}/image/upload/`;

// Base de datos de tus galerías
const productGallery = {
    // --- TAZAS ---
    "taza-blanca-11oz": {
        title: "Taza Blanca 11 Oz",
        desc: "Calidad AAA o AA, la más clásica e ideal para cualquier diseño. Recubrimiento para colores vibrantes.",
        images: [
            { src: "mockupTazaIIPadreFlork1.png", localSrc: "img/tazas/mockupTazaIIPadreFlork1.png", tag: "Diseño" },
            // Agrega tus fotos reales aquí:
            // { src: "taza_real_1.jpg", localSrc: "img/tazas/reales/taza_real_1.jpg", tag: "Foto Real" }
        ]
    },
    "taza-color": {
        title: "Taza con Color Interior 11 y 15 (oz)",
        desc: "Dale un toque extra combinando el interior con tu diseño. Disponible con y sin cuchara.",
        images: [
            { src: "mockupTazaIIMinionsIntAzulRojo.png", localSrc: "img/tazas/mockupTazaIIMinionsIntAzulRojo.png", tag: "Diseño" }
        ]
    },
    "taza-magica-mate": {
        title: "Taza Mágica Mate 11oz",
        desc: "El diseño aparece mágicamente al verter agua caliente. Acabado mate.",
        images: [
            { src: "mockupTazaIIDiaMadres11OzMagMateAzul.png", localSrc: "img/tazas/mockupTazaIIDiaMadres11OzMagMateAzul.png", tag: "Diseño" }
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
            { src: "mockupTazaIICocaAluminio.png", localSrc: "img/tazas/mockupTazaIICocaAluminio.png", tag: "Diseño" }
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
            { src: "mockupTazaIIDbGtAluminioDblPred.png", localSrc: "img/tazas/mockupTazaIIDbGtAluminioDblPred.png", tag: "Diseño" }
        ]
    },
    "taza-perlada": {
        title: "Tazas Perladas 11Oz",
        desc: "Destellos sutiles tipo perla.",
        images: [
            { src: "mockupTazaIIFma11OzPerlado.png", localSrc: "img/tazas/mockupTazaIIFma11OzPerlado.png", tag: "Diseño" }
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
            { src: "termoJennie.png", localSrc: "img/botellasVasos/termoJennie.png", tag: "Diseño" }
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
            { src: "mockupVasoFloridaBellotaBurbuja.png", localSrc: "img/botellasVasos/mockupVasoFloridaBellotaBurbuja.png", tag: "Diseño" }
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
            { src: "00MOCKUPtarroPumasVsCruzAzul.png", localSrc: "img/botellasVasos/00MOCKUPtarroPumasVsCruzAzul.png", tag: "Diseño" }
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
            { src: "dakimakura(1).jpeg", localSrc: "img/cojines/dakimakura_1.jpeg", tag: "Diseño" } // Nota: Asegúrate de que el nombre del archivo local es correcto.
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

const modal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');
const mainImg = document.getElementById('modalMainImg');
const mainImgBadge = document.getElementById('mainImgBadge');

function openModal(productId) {
    const data = productGallery[productId];
    if (!data) return; // Evita errores si el ID no existe en el diccionario

    // 1. Llenar los textos
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDesc').textContent = data.desc;
    
    // Configurar botón de WhatsApp
    const wsText = encodeURIComponent(`Hola, me interesa el producto: ${data.title}`);
    document.getElementById('modalWhatsappBtn').href = `https://wa.me/524778124210?text=${wsText}`;

    // 2. Limpiar miniaturas anteriores
    const thumbContainer = document.getElementById('modalThumbnails');
    thumbContainer.innerHTML = '';

    // 3. Generar la galería con el PLAN B
    data.images.forEach((imgData, index) => {
        const thumbUrl = `${cloudBaseUrl}f_auto,q_auto,w_200,c_fill,ar_1:1/${imgData.src}`;
        const largeUrl = `${cloudBaseUrl}f_auto,q_auto,w_1000,c_limit/${imgData.src}`;

        const thumbEl = document.createElement('img');
        
        // --- PLAN B PARA LA MINIATURA ---
        thumbEl.onerror = function() {
            console.warn(`Miniatura falló en Cloudinary. Cargando local: ${imgData.localSrc}`);
            this.onerror = null; // Previene bucle infinito
            this.src = imgData.localSrc;
        };
        
        thumbEl.src = thumbUrl;
        thumbEl.className = "w-full h-24 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-famiCyan transition-colors";
        
        // Si es la primera imagen, la ponemos como principal
        if (index === 0) {
            setMainImage(largeUrl, imgData.localSrc, imgData.tag);
            thumbEl.classList.add('border-famiCyan'); 
        }

        // Evento click de la miniatura
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

    // 4. Animación de apertura
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
        
        // --- PLAN B PARA LA IMAGEN PRINCIPAL ---
        mainImg.onerror = function() {
            console.warn(`Imagen principal falló en Cloudinary. Cargando local: ${localUrl}`);
            this.onerror = null;
            this.src = localUrl;
        };
        
        mainImg.src = cloudUrl;
        mainImg.style.opacity = 1;
        
        // Configurar la etiqueta dinámica
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

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
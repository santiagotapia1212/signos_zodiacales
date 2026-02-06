// ========== DATOS ADICIONALES DE LOS SIGNOS ==========
const signosData = {
    'aries': {
        titulo: '♈ Aries - El Carnero',
        descripcion: 'Aries es el primer signo del zodiaco y representa el inicio de la primavera. Son personas pioneras, valientes y llenas de energía. Su símbolo, el carnero, refleja su naturaleza impetuosa y su deseo de liderar. Los Aries son conocidos por su entusiasmo contagioso y su capacidad para iniciar proyectos con gran pasión. Aunque pueden ser impacientes, su honestidad directa y su coraje los convierten en excelentes amigos y líderes.'
    },
    'tauro': {
        titulo: '♉ Tauro - El Toro',
        descripcion: 'Tauro es un signo de tierra que valora la estabilidad y el confort. Representados por el toro, son personas determinadas y persistentes que no se rinden fácilmente. Aman los placeres de la vida: buena comida, música y belleza. Su conexión con Venus los hace apreciar el arte y la estética. Son leales, prácticos y excelentes en manejar recursos. Aunque pueden ser tercos, su confiabilidad los hace personas en quienes siempre se puede confiar.'
    },
    'geminis': {
        titulo: '♊ Géminis - Los Gemelos',
        descripcion: 'Géminis, representado por los gemelos, es el signo de la dualidad y la comunicación. Son intelectuales curiosos que siempre buscan aprender algo nuevo. Su mente ágil y versátil les permite adaptarse a cualquier situación. Excelentes comunicadores, pueden conversar sobre cualquier tema con facilidad. Su naturaleza social los hace populares en grupos. Aunque a veces se les considera inconsistentes, su capacidad para ver múltiples perspectivas es un verdadero don.'
    },
    'cancer': {
        titulo: '♋ Cáncer - El Cangrejo',
        descripcion: 'Cáncer es el signo más emocional y protector del zodiaco. Como el cangrejo, tienen un exterior duro pero un interior suave y sensible. Son muy intuitivos y pueden percibir las emociones de los demás con facilidad. El hogar y la familia son sagrados para ellos. Su naturaleza maternal y cariñosa los hace excelentes cuidadores. Aunque pueden ser reservados al principio, una vez que confían en alguien, su lealtad es inquebrantable.'
    },
    'leo': {
        titulo: '♌ Leo - El León',
        descripcion: 'Leo, el león del zodiaco, nace para brillar. Gobernado por el Sol, irradia calidez, generosidad y carisma natural. Son líderes natos con gran confianza en sí mismos. Su creatividad y pasión por la vida son contagiosas. Aman ser el centro de atención y tienen un gran corazón. Aunque pueden parecer orgullosos, su generosidad y lealtad hacia sus seres queridos es incomparable. Los Leo inspiran a otros a ser la mejor versión de sí mismos.'
    },
    'virgo': {
        titulo: '♍ Virgo - La Virgen',
        descripcion: 'Virgo es el perfeccionista del zodiaco. Su atención meticulosa al detalle y su naturaleza analítica los hacen excelentes en resolver problemas. Son serviciales por naturaleza y encuentran satisfacción en ayudar a otros. Su pensamiento práctico y organizativo es invaluable en cualquier situación. Aunque pueden ser autocríticos, su búsqueda de la excelencia los impulsa a mejorar constantemente. Son modestos, trabajadores y extremadamente confiables.'
    },
    'libra': {
        titulo: '♎ Libra - La Balanza',
        descripcion: 'Libra busca el equilibrio y la armonía en todas las áreas de la vida. Representados por la balanza, son diplomáticos naturales que pueden ver todos los lados de una situación. Su sentido de la justicia es fuerte y siempre luchan por la equidad. Aman la belleza, el arte y la elegancia. Son encantadores socialmente y excelentes en crear relaciones armoniosas. Su indecisión viene de su deseo de tomar la mejor decisión posible para todos.'
    },
    'escorpio': {
        titulo: '♏ Escorpio - El Escorpión',
        descripcion: 'Escorpio es el signo más intenso y misterioso del zodiaco. Como el escorpión, son poderosos y no temen adentrarse en las profundidades de la emoción. Su pasión y determinación son legendarias. Son extremadamente leales pero también pueden ser vengativos si son traicionados. Su intuición casi psíquica les permite ver más allá de las apariencias. Transformadores por naturaleza, renacen de sus cenizas más fuertes que antes.'
    },
    'sagitario': {
        titulo: '♐ Sagitario - El Arquero',
        descripcion: 'Sagitario es el aventurero filosófico del zodiaco. Representados por el arquero, siempre apuntan alto y buscan la verdad. Su optimismo es contagioso y su amor por la libertad es absoluto. Son exploradores natos, tanto física como intelectualmente. Su honestidad brutal puede sorprender, pero viene de un lugar genuino. Aman aprender, viajar y expandir sus horizontes. Su entusiasmo por la vida los hace compañeros emocionantes.'
    },
    'capricornio': {
        titulo: '♑ Capricornio - La Cabra',
        descripcion: 'Capricornio es el trabajador incansable del zodiaco. Como la cabra de montaña, escalan constantemente hacia sus metas con determinación inquebrantable. Son pragmáticos, disciplinados y extremadamente responsables. El éxito a largo plazo es importante para ellos y están dispuestos a trabajar duro para lograrlo. Aunque pueden parecer serios, tienen un gran sentido del humor seco. Su sabiduría y madurez los convierte en excelentes mentores y líderes.'
    },
    'acuario': {
        titulo: '♒ Acuario - El Aguador',
        descripcion: 'Acuario es el visionario humanitario del zodiaco. Son pensadores originales que ven el futuro antes que otros. Su naturaleza independiente y su rechazo a las convenciones los hace únicos. Se preocupan profundamente por la humanidad y luchan por un mundo mejor. Su mente brillante está llena de ideas innovadoras. Aunque pueden parecer distantes emocionalmente, valoran profundamente la amistad. Son los revolucionarios que cambian el mundo.'
    },
    'piscis': {
        titulo: '♓ Piscis - Los Peces',
        descripcion: 'Piscis es el soñador místico del zodiaco. Como los peces nadando en direcciones opuestas, navegan entre la realidad y la fantasía. Son extremadamente empáticos y pueden absorber las emociones de quienes los rodean. Su creatividad artística no tiene límites y su intuición es profunda. Son compasivos, generosos y siempre dispuestos a ayudar. Aunque pueden ser escapistas, su sensibilidad y conexión espiritual los hace verdaderamente especiales.'
    }
};

// ========== VARIABLES GLOBALES ==========
const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescripcion = document.getElementById('modal-descripcion');
const closeBtn = document.querySelector('.close');
const filtroButtons = document.querySelectorAll('.filtro-btn');
const signoCards = document.querySelectorAll('.signo-card');

// ========== FUNCIONALIDAD DE FILTROS ==========
filtroButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remover clase active de todos los botones
        filtroButtons.forEach(btn => btn.classList.remove('active'));
        
        // Agregar clase active al botón clickeado
        this.classList.add('active');
        
        // Obtener el elemento seleccionado
        const elementoSeleccionado = this.getAttribute('data-elemento');
        
        // Filtrar las tarjetas
        filtrarSignos(elementoSeleccionado);
    });
});

function filtrarSignos(elemento) {
    signoCards.forEach(card => {
        if (elemento === 'todos') {
            card.classList.remove('hidden');
            // Animación de entrada
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 10);
        } else {
            const cardElemento = card.getAttribute('data-elemento');
            if (cardElemento === elemento) {
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.classList.add('hidden');
            }
        }
    });
}

// ========== FUNCIONALIDAD DEL MODAL ==========
// Agregar evento click a todos los botones de detalles
const botonesDetalles = document.querySelectorAll('.btn-detalles');

botonesDetalles.forEach((boton, index) => {
    boton.addEventListener('click', function() {
        const card = this.closest('.signo-card');
        const signoClasses = Array.from(card.classList);
        
        // Encontrar la clase que corresponde al signo
        const signoClass = signoClasses.find(cls => 
            cls !== 'signo-card' && cls !== 'hidden'
        );
        
        if (signoClass && signosData[signoClass]) {
            mostrarModal(signosData[signoClass]);
        }
    });
});

function mostrarModal(signoInfo) {
    modalTitulo.textContent = signoInfo.titulo;
    modalDescripcion.textContent = signoInfo.descripcion;
    modal.style.display = 'block';
    
    // Agregar animación
    modal.querySelector('.modal-content').style.animation = 'slideDown 0.4s ease';
}

// Cerrar modal al hacer click en la X
closeBtn.addEventListener('click', function() {
    cerrarModal();
});

// Cerrar modal al hacer click fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        cerrarModal();
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        cerrarModal();
    }
});

function cerrarModal() {
    modal.style.display = 'none';
}

// ========== ANIMACIÓN DE CARGA ==========
window.addEventListener('load', function() {
    // Animar las tarjetas al cargar la página
    signoCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// ========== CONTADOR DE SIGNOS VISIBLES ==========
function contarSignosVisibles() {
    const visibles = document.querySelectorAll('.signo-card:not(.hidden)');
    console.log(`Signos visibles: ${visibles.length}`);
    return visibles.length;
}

// ========== MENSAJE DE BIENVENIDA EN CONSOLA ==========
console.log('%c✨ Bienvenido a los 12 Signos del Zodiaco ✨', 
    'color: #7c3aed; font-size: 20px; font-weight: bold;');
console.log('%cUsa los filtros para explorar los diferentes elementos', 
    'color: #667eea; font-size: 14px;');

// ========== INFORMACIÓN INICIAL ==========
console.log(`Total de signos cargados: ${signoCards.length}`);
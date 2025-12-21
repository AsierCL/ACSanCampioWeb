/**
 * ==========================================
 * MAIN.JS - Interacciones de la Web
 * ==========================================
 * Funciones básicas para la interacción del usuario
 */

// ==========================================
// MENÚ RESPONSIVE
// ==========================================

/**
 * Inicialización del menú hamburguesa para móvil
 */
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    if (navbarToggle && navbarMenu) {
        // Toggle del menú al hacer clic en el botón hamburguesa
        navbarToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('navbar__menu--active');

            // Animación del icono hamburguesa
            this.classList.toggle('navbar__toggle--active');
        });

        // Cerrar menú al hacer clic en un enlace
        const navbarLinks = navbarMenu.querySelectorAll('.navbar__link');
        navbarLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarMenu.classList.remove('navbar__menu--active');
                navbarToggle.classList.remove('navbar__toggle--active');
            });
        });

        // Cerrar menú al hacer clic fuera de él
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navbarMenu.contains(event.target);
            const isClickOnToggle = navbarToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle && navbarMenu.classList.contains('navbar__menu--active')) {
                navbarMenu.classList.remove('navbar__menu--active');
                navbarToggle.classList.remove('navbar__toggle--active');
            }
        });
    }
});

// ==========================================
// FORMULARIO DE CONTACTO
// ==========================================

/**
 * Manejo básico del formulario de contacto
 * Nota: Este es un formulario no funcional (sin backend)
 * Solo muestra un mensaje de confirmación
 */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        // Validación básica
        if (formData.name && formData.email && formData.message) {
            // Mostrar mensaje de éxito
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.\n\nNota: Este es un formulario de demostración.');

            // Limpiar el formulario
            contactForm.reset();

            // En un entorno real, aquí enviarías los datos a un servidor:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });
        }
    });
}

// ==========================================
// SMOOTH SCROLL PARA NAVEGACIÓN
// ==========================================

/**
 * Mejora el scroll suave en navegadores que no lo soporten nativamente
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Solo aplicar si es un ancla válida (no solo "#")
        if (href && href.length > 1) {
            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==========================================
// ANIMACIÓN DE ENTRADA PARA ELEMENTOS
// ==========================================

/**
 * Observa elementos y añade clase cuando son visibles
 * (Opcional - puedes añadir animaciones CSS basadas en esta clase)
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

// Observar tarjetas de actividades
document.querySelectorAll('.activity-card').forEach(card => {
    observer.observe(card);
});

// Observar tarjetas de valores
document.querySelectorAll('.value-card').forEach(card => {
    observer.observe(card);
});

// ==========================================
// UTILIDADES
// ==========================================

/**
 * Función para validar email
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Función para formatear teléfono
 */
function formatPhone(phone) {
    return phone.replace(/\D/g, '');
}

// ==========================================
// CARRUSEL DE FOTOS
// ==========================================

/**
 * Inicialización del carrusel de imágenes
 */
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel');

    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel__slide');
        const indicators = carousel.querySelectorAll('.carousel__indicator');
        const prevBtn = document.getElementById('carouselPrev');
        const nextBtn = document.getElementById('carouselNext');

        let currentSlide = 0;
        let autoPlayInterval;
        const autoPlayDelay = 5000; // 5 segundos

        /**
         * Muestra el slide en el índice especificado
         */
        function showSlide(index) {
            // Asegurar que el índice esté dentro del rango
            if (index < 0) {
                index = slides.length - 1;
            } else if (index >= slides.length) {
                index = 0;
            }

            // Ocultar todos los slides y desactivar indicadores
            slides.forEach(slide => slide.classList.remove('carousel__slide--active'));
            indicators.forEach(indicator => indicator.classList.remove('carousel__indicator--active'));

            // Mostrar el slide actual y activar su indicador
            slides[index].classList.add('carousel__slide--active');
            indicators[index].classList.add('carousel__indicator--active');

            currentSlide = index;
        }

        /**
         * Avanza al siguiente slide
         */
        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        /**
         * Retrocede al slide anterior
         */
        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        /**
         * Inicia la reproducción automática
         */
        function startAutoPlay() {
            autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
        }

        /**
         * Detiene la reproducción automática
         */
        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }

        /**
         * Reinicia la reproducción automática
         */
        function resetAutoPlay() {
            stopAutoPlay();
            startAutoPlay();
        }

        // Event listeners para los botones
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                prevSlide();
                resetAutoPlay();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                nextSlide();
                resetAutoPlay();
            });
        }

        // Event listeners para los indicadores
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function() {
                showSlide(index);
                resetAutoPlay();
            });
        });

        // Pausar autoplay al pasar el ratón sobre el carrusel
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);

        // Soporte para navegación con teclado
        carousel.setAttribute('tabindex', '0');
        carousel.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                resetAutoPlay();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                resetAutoPlay();
            }
        });

        // Soporte para gestos táctiles (swipe)
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe izquierda -> siguiente
                    nextSlide();
                } else {
                    // Swipe derecha -> anterior
                    prevSlide();
                }
                resetAutoPlay();
            }
        }

        // Iniciar autoplay
        startAutoPlay();
    }
});

// ==========================================
// CONSOLE LOG DE BIENVENIDA
// ==========================================

console.log('%c👋 Bienvenido a la Asociación Cultural', 'color: #e74c3c; font-size: 20px; font-weight: bold;');
console.log('%cDesarrollado por AsierCL', 'color: #3498db; font-size: 14px;');

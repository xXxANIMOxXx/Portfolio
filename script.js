// script.js

// Clase para el Carrusel
class Carousel {
    constructor(images) {
        this.images = images;         // Array con las rutas de las imágenes
        this.currentIndex = 0;        // Índice de la imagen actual
        this.carouselImg = document.getElementById('carousel-image'); // Elemento <img> del carrusel

        // Mostrar la primera imagen al iniciar
        this.updateImage();

        // Inicializar los eventos de interacción
        this.initEvents();
    }

    // Método para actualizar la imagen mostrada en el carrusel
    updateImage() {
        // Remover la clase de animación para reiniciarla
        this.carouselImg.classList.remove('fade-in');
        // Forzar reflow para reiniciar la animación
        void this.carouselImg.offsetWidth;

        // Actualizar la ruta de la imagen
        this.carouselImg.src = this.images[this.currentIndex];

        // Añadir la clase que aplica la animación
        this.carouselImg.classList.add('fade-in');
    }

    // Método para mostrar la siguiente imagen
    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateImage();
    }

    // Método para mostrar la imagen anterior
    prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateImage();
    }

    // Configuración de eventos para la interactividad
    initEvents() {
        // Eventos para los botones de navegación
        document.getElementById('next-btn').addEventListener('click', () => this.nextImage());
        document.getElementById('prev-btn').addEventListener('click', () => this.prevImage());

        // Efecto de zoom al pasar el mouse sobre la imagen
        this.carouselImg.addEventListener('mouseover', () => {
            this.carouselImg.style.transform = 'scale(1.1)';
        });
        this.carouselImg.addEventListener('mouseout', () => {
            this.carouselImg.style.transform = 'scale(1)';
        });
    }
}

// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Array de imágenes para el carrusel (actualiza las rutas según tus imágenes)
    const imagesArray = [
        'https://www.dropbox.com/scl/fi/k6g7jbslajqzdvp1cfjv6/Imagen-de-WhatsApp-2025-03-12-a-las-17.04.39_853dda04.jpg?rlkey=tsqa6hhit148g1sxuvt88krt4&st=14csq5sz&dl=1',
        'https://www.dropbox.com/scl/fi/907g7xz0oaw1wmloo2l2u/Imagen-de-WhatsApp-2025-03-12-a-las-17.04.39_e3ad65cf.jpg?rlkey=nwfkxl0qhffycf156yfqk7tyy&st=el8ly4oh&dl=1',
        'https://www.dropbox.com/scl/fi/8dzoowioq533tfak5dx02/Imagen-de-WhatsApp-2025-03-12-a-las-17.04.40_cfe70f85.jpg?rlkey=ocxavsxs97nefokhpl3sffp2d&st=zxajhgv0&dl=1'
    ];

    // Crear la instancia del carrusel
    const myCarousel = new Carousel(imagesArray);
});
// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos con la clase 'item'
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('mouseover', function(){

            items.forEach(item => item.classList.remove('active'));
            
            this.classList.add('active')

            // Obtener el valor del data-content del item seleccionado
            const activeSection = this.getAttribute('data-content');
            
            if (window.innerWidth > 992) {
                
                // En pantallas grandes, muestra el contenido a la derecha
                const sections = document.querySelectorAll('.content-section');
                
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                

                // Mostrar la sección activa
                document.getElementById(activeSection).classList.add('active');
            } else {
                
                // En móviles, comportamiento tipo acordeón
                const content = document.getElementById(`${activeSection}-content`);

                // Si el contenido ya está visible, ocúltalo
                if (content.classList.contains('active')) {
                    content.classList.remove('active');
                } 
                
                else {
                    // Ocultar todo el contenido del acordeón
                    const allContents = document.querySelectorAll('.item-accordion-content');
                    allContents.forEach(section => section.classList.remove('active'));
        
                    // Mostrar el contenido seleccionado
                    content.classList.add('active');
                }
            }
        })
    })

    let lastScrollPosition = 0;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        let currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > lastScrollPosition) {
            // Cuando bajas el scroll, oculta el navbar
            navbar.classList.add('navbar-hidden');
            navbar.classList.remove('navbar-visible', 'navbar-transparent');
        } else {
            // Cuando subes el scroll, muestra el navbar
            navbar.classList.remove('navbar-hidden');
            navbar.classList.add('navbar-visible');

            // Cuando el scrool llege arriba, desapescar el background
            if (currentScrollPosition == 0){
                navbar.classList.add('navbar-transparent');
                navbar.classList.remove('navbar-visible');
            }
        }

        // Actualiza la posición del último scroll
        lastScrollPosition = currentScrollPosition;
    });
    
});

$(document).ready(function(){
    $('.section-presentation-img').slick({
        autoplay: true,
        autoplaySpeed: 300,
        speed: 900,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        dots: false,
        infinite: true, 
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
              }
            }
          ]
    });


});
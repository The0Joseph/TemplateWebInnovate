// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos con la clase 'item'
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('mouseover', function(){

            if (window.innerWidth > 992) {

                items.forEach(item => item.classList.remove('active'));
                
                this.classList.add('active')
    
                // Obtener el valor del data-content del item seleccionado
                const activeSection = this.getAttribute('data-content');
            
                
                // En pantallas grandes, muestra el contenido a la derecha
                const sections = document.querySelectorAll('.content-section');
                
                sections.forEach(section => {
                    section.classList.remove('active');
                });

                // Mostrar la sección activa
                document.getElementById(activeSection).classList.add('active');
                
            } 
        })

        // Para moviles
        item.addEventListener('click', function () {
            
            if (window.innerWidth <= 992) {
                // Obtener el valor del data-content del item seleccionado
                const activeSection = this.getAttribute('data-content');

                // En móviles, comportamiento tipo acordeón
                const content = document.getElementById(`${activeSection}-content`);
    
                // Si el contenido ya está visible, ocúltalo
                if (content.classList.contains('active')) {
                    content.classList.remove('active');
                } else {
                    // Ocultar todo el contenido del acordeón
                    const allContents = document.querySelectorAll('.item-accordion-content');
                    allContents.forEach(section => section.classList.remove('active'));
        
                    // Mostrar el contenido seleccionado
                    content.classList.add('active');
            }}
        })


    })
    
    // Asegurarse de cerrar cualquier contenido visible al cambiar el tamaño de la pantalla (ej: de móvil a escritorio)
    // Evento para manejar el cambio de tamaño de pantalla
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            // Cuando se cambia a pantallas grandes, asegurarse de que todo el contenido del acordeón esté cerrado
            const allContents = document.querySelectorAll('.item-accordion-content');
            allContents.forEach(section => section.classList.remove('active'));
        } else {
            // Cuando se cambia a pantallas móviles, asegurarse de que los contenidos grandes estén ocultos
            items.forEach(item => item.classList.remove('active'));
        }
    });

    

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
    

    $('.card-slick').slick({
        slidesToShow: 2,
        infinite: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
        ]
    })
});
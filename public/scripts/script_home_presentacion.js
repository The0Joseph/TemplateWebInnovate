document.addEventListener('DOMContentLoaded', function() {

    

    fetch('/data/bd.json')
        .then(response => response.json())
        .then(datos => {
            
            const slider_card_html = datos.h_clientes.map(item => 
                `<img src="${item.ruta}" alt="">`
            ).join('');

            document.getElementById('clients-slider-id').innerHTML = slider_card_html;

            // Inicializar Slick después de cargar las imágenes
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

        }).catch(error => console.error('ERROR', error));

});
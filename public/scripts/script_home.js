// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {

    fetch('/data/bd.json')
        .then(response => response.json())
        .then(datos => {
            const card_client_html = datos.h_clientes.reduce((acumulador,item, index) =>{

                //cada 4 imagenes se crea  nuevo contenedor
                if (index % 4 === 0){
                    acumulador.push(`<article class="row row-cols-2 row-cols-lg-4 justify-content-center align-items-center content-clients-img">`);
                }

                //añade la imagen actual al bloque
                acumulador[acumulador.length - 1] +=`
                    <div class="col-6 col-md-3 col-lg-3">
                        <img src="${item.ruta}" alt="">
                    </div>
                `;

                //Cierra el bloque cada 4 imagenes
                if ((index + 1) % 4 === 0 || index === datos.h_clientes.length - 1) {
                    acumulador[acumulador.length - 1]  += `</article>`;
                }

                return acumulador
            }, []);

            document.getElementById('content-clients_id').innerHTML = card_client_html.slice(0,2).join('');

            //Funcionalidad al botón 
            const btn_more = document.getElementById('btn-more');
            let mostrar_todo = false;

            btn_more.addEventListener("click", function () {
                if (!mostrar_todo) {
                    //Muestra todos los contenedores (client)
                    document.getElementById('content-clients_id').innerHTML = card_client_html.join('');
                    this.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
                } else {
                    //Mostrar solo los dos bloques
                    document.getElementById('content-clients_id').innerHTML = card_client_html.slice(0,2).join('');
                    this.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
                }
                //Cambia el estado
                mostrar_todo = !mostrar_todo;
            })

        })
        .catch(error => console.error('ERROR', error));

})
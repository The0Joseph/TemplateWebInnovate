Estructura de carpetas del repositorio
 -> data: En esta carpeta almacena un archivo json donde contiene los datos de la página. (De momento almacena las ruta de las imágenes de los clientes)
 
 -> pages: En este carpeta contiene las plantillas de las paginas vinculadas al index.html
 
 -> public: En esta carpeta almancena todos lo recursos de las página. Contiene los siguiente:
    - img: Contiene todas la images usadas en la páginas, separadas por carpetas relacionadas a las secciones o páginas (Logo, ico, Capacidades tecnologicas, servicios). 
    - librerias: Contiene todas las librerias usadas en la páginas. (De momento tiene la libreria bootstrap).
    - script: contiene Scripts de la página.
    - styles: contiene los estilos de la plantilla. Está lleva una estructura por página y secciones. El estandar de los nombres en la siguiente:
      . Por carpeta:
        -> plantilla: Este archivo lleva los stylos de la plantilla.
        -> page_[NOMBRE_DE_LA_PAGINA]: El nombre comienza por "page_" seguido por el nombre de la pagina que se va crear.
      . Por archivo:
        -> style_modificacion_plantilla: En este archivo se realiza modificación de los estilos realizacionados a la plantilla.
        -> style_[SECCION_DE_LA_PAGINA]: En este archivo se lleva los estilos de dicha sección de la página que deseas colocar. El nombre comienza por "style_" seguido de los nombre de la sección de la página.  

 -> index.html: Este archivo lleva la estructura HTML que se va mostrar al inicio.
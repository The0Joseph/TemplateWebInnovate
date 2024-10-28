# Estructura de Carpetas del Repositorio

Este repositorio está organizado en una serie de carpetas que facilitan la gestión de datos, plantillas, recursos, scripts y estilos. A continuación, se detalla la estructura y el propósito de cada carpeta y archivo.

## Estructura de Carpetas

- **data**: 
  - Esta carpeta almacena un archivo JSON que contiene los datos de la página. Actualmente, guarda las rutas de las imágenes de los clientes.

- **pages**:
  - Contiene las plantillas de las páginas vinculadas al `index.html`.

- **public**:
  - En esta carpeta se almacenan todos los recursos de la página. Contiene los siguientes subdirectorios:

    - **img**: 
      - Contiene todas las imágenes usadas en las páginas, organizadas en carpetas relacionadas a las secciones o páginas (por ejemplo, Logo, Iconos, Capacidades Tecnológicas, Servicios).

    - **librerias**: 
      - Contiene todas las librerías utilizadas en la página. Actualmente, incluye la librería Bootstrap.

    - **script**:
      - Contiene los scripts de la página.

    - **styles**:
      - Contiene los estilos de la plantilla. La estructura de nombres sigue un estándar según página y sección. Los archivos se organizan de la siguiente manera:
      
      - **Por carpeta**:
        - `plantilla`: Contiene los estilos generales de la plantilla.
        - `page_[NOMBRE_DE_LA_PAGINA]`: El nombre comienza con `page_` seguido del nombre de la página que se va a crear.

      - **Por archivo**:
        - `style_modificacion_plantilla`: En este archivo se realizan modificaciones a los estilos de la plantilla.
        - `style_[SECCION_DE_LA_PAGINA]`: Contiene los estilos específicos de una sección de la página. El nombre comienza con `style_` seguido del nombre de la sección correspondiente.

- **index.html**:
  - Este archivo contiene la estructura HTML que se mostrará en la página principal.
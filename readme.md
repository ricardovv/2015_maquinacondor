#Máquina Condor

Este proyecto busca adaptar el trabajo artístico del artista visual **Demian Schopf**  **"Máquina Condor"** a una versión para web y dispositivos móviles. El proyecto original remezcla un poema de Luís de Góngora en base a la modificación de una serie de palabras variables que cambian en relación a la consulta de valores diversos que ayudan a selecioc ar un grupo de palabras nuevas que constuiran una nueva versión del poema.

El actual proyecto extende el anterior como versión web y movil, incporporando la lectura de otros valores provenientes de diferentes ámbitos, como los valores de camvbio de monedas internacionales, nombres de personas fallecidas en guerras, etc.

El desarollos es en JavaScript, CSS, HTML, y consulta diversas apis financieras. Proyecto en desarrollo Noviembre - Diciembre 2015, Santiago Chile. 

Algunas tareas principales en desarrollo (contienen subtareas): 

1 monedas
* Leer una serie de monedas en formato JSON desde api de currencylayer.com 
* Transformar moneda en valor que permita seleccionar palabras.
* Seleccionar palabras de una lista (array).
* Representar dichas palabras en la pantalla según cierto formato.

2 Diario
* Disponer una lista palabras a buscar (array).
* Leer datos diario (captura via API NewYork Times).
* Buscar palabras en artículos.
* Rankear palabras y usar resultado para la selección de categorías.
* Seleccionar categoría de palabras en base al ranking de palabras.
* Pasar los datos al sistema de representación en pantalla. 

3 Representación 
* Desarrollar estilos visuales generales. 
* Utilización de fuentes online  desde Google Fonts.
* generar un sistema para el cambio de letras según un tiempo dado.
* Sistema de contadores para generar los cambios requeridos para carga de datos y recarga de palabras.
* Vínculos hipertexto con datos en ventana nueva.  
* Generación dinámica de ventana nueva con datos e imágenes.

4 Responsibidad
* Responsibidad monitor 1024.
* Responsibidad celular. 

5 Extras
* Secciones de información “sobre la obra” y “sobre el autor”.  
* Cambio aleatorio de animaciones e imágenes e el fondo del sitio.
* Adaptación de animaciones gif para los fondos.  


Fuentes de datos utilizadas
Para monedas: https://currencylayer.com/
  
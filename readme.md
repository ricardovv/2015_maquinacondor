#Máquina Condor

Este proyecto busca adaptar los trabajos artísticos del artista visual **Demian Schopf**  **"Máquina Condor"** dispositivos móviles y web. El proyecto original remezcla un poema de Luís de Góngora en base a la modificación de una serie de palabras variables que cambian en relación a la consulta de valores diversos.

El actual proyecto extende el anterior com versión web y movil, incporporando la lectura de otros valores provenientes de diferentes ámbitos, como la bolsa, nombres de personas fallecidas en guerras, etc.

Desarollos en JavaScript, y diversas apis financieras. Proyecto en desarrollo Noviembre - Diciembre 2015, Santiago Chile. 

Algunas tareas principales en desarrollo (contienen subtareas): 

1 monedas

* -Leer monedas (en desarrollo, resolviendo same domain policy)
* -Transformar moneda en valor selector de palabras (sistema listo para recibir valor de moneda)
* +Seleccionar de lista (sistema listo para recibir valor transformado)
* +Representar (sistema de representación listo, falta limpiar referencias de array)

2 Diario

* +Lista palabras a buscar (array listo e integrado)
* +Leer datos diario (captura via API NewYork Times ok)
* +Parsear y buscar palabras en artículos (listo módulo para replicar)
* +Rankear palabras (listo, lee la primera)
* +Seleccionar categoría (en integración al main thread)
* +Representar (mecanismo listo)

3 Representación 

* +Estilos generales (listo)
* +Lectura  online de fuentes (Google Fonts, listo)
* +Sistema cambio de letras (listo)
* +Sistema cambio según cantidad de segundos (listo)
* +vinculos hipertexto (listo en _self) 
* +ventana nueva lista (falta integrar datos monedas)

4 Responsibidad

* +responsibidad monitor (listo)
* -responsibidad ipad (en desarrollo, con sistema final se terminará)
* -responsibidad celular (en desarrollo, con sistema final se terminará)

5 Extras

* +sobre la obra - sobre el autor (listo, falta afinar estilo)
* +cambio automático de animaciones bg (sistema listo)
* -animaciones gif (en proceso) 

Según lo anterior, el proyecto esta en un 85% de avance, restando integrar algunos sistemas y refinar representación.
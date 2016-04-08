//  window.addEventListener('load', function(e) {
//   mymuestra();
// }, false);


//PARA GUARDAR MONERDA ANTERIOR
	//valores
	var valorDominante1 = 1;
	var moneda1_valorAnterior 	= 1;
	var moneda1_valorActual 	= 1;

	var moneda2_valorAnterior 	= 1;
	var moneda2_valorActual 	= 1;

	var moneda3_valorAnterior 	= 1;
	var moneda3_valorActual 	= 1;

	var moneda4_valorAnterior 	= 1;
	var moneda4_valorActual 	= 4;


//compara valores, actualiza y entrega
function entregaVariacion(){
	//saca variacion moneda anterior y actual, valor absoluto
	var moneda1_variacionValor 	= 	Math.abs(moneda1_valorAnterior - moneda1_valorActual) ;
	var moneda2_variacionValor 	= 	Math.abs(moneda2_valorAnterior - moneda2_valorActual) ;
	var moneda3_variacionValor 	= 	Math.abs(moneda3_valorAnterior - moneda3_valorActual) ;
	var moneda4_variacionValor 	= 	Math.abs(moneda4_valorAnterior - moneda4_valorActual) ;

	var resultadoVariacion;

	//comparador
	if (moneda1_variacionValor < moneda2_variacionValor){ 
		resultadoVariacion = "moneda 2 varia mas";
	} else { 
		resultadoVariacion = "moneda 1 varia mas"; 
	}// cierre if 

	var muestra = document.querySelector('#test');
	muestra.innerHTML =  resultadoVariacion + "</br>";
	moneda1_valorAnterior = moneda1_valorActual;
	muestra.innerHTML +=  'M1 valorAnteriorNuevo= ' + moneda1_valorAnterior + "</br>";

}
//cierra comparacion - - - - - - - - - - - - - - - - - - - -
 















entregaVariacion();

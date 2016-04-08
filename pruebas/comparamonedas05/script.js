//  window.addEventListener('load', function(e) {
//  // entregaVariacion();
// }, false);


// COMPARA MONEDAS Y ENTREGA VALOR DE PALABRA ELEGIDA - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// arrays de prueba para valores de monedas
var domina1 = 1; // valor de moneda dominante
var aa = -0.00001;
var ab = 0.1000001;
var ac = 0.000001;
var ad = -0.002;
var porcentaje = []; 


//compara valores de 4 moneda, entrega variacion mas alta para elegir palabra  
function entregaVariacion( _dom1, _va1, _va2, _va3, _va4 ){
	//valores para comparar
	var moneda_valorActual 	= [_va1, _va2, _va3, _va4];//array valores anteriores
	var moneda_valorDominante 	= _dom1;//array valores actuales
	//para output
	var salida= "";//para el output de prueba, test
	var devuelve;//almacena valor a devolver para ser usado
	var moneda_variacionValor = [];	//array para almacenar variaciones.


	// obtiene variacion (valor absoluto) entre monedas y la dominante  
	for(i=0; i<moneda_valorActual.length; i++){
		//moneda_variacionValor[i] = 	Math.abs(moneda_valorActual[i] - moneda_valorDominante[0]) ;
		//porcentaje. VP=[(a-b).100]/a 
		moneda_variacionValor[i] = 	Math.abs(	[ (moneda_valorDominante - moneda_valorActual[i])*100 ] / moneda_valorDominante	) ;
		porcentaje[i] = moneda_variacionValor[i];
    }//cierre for
    

	// compara monedas y entrega valor mas alto
	var counter = 1;//parte en 1 pues debe comtarar1 con el anterior q es 0
	var indexDelMasAlto	= 0;//valor inicial del index 	
	//selecciona valor mas alto 
	for(counter; counter<moneda_variacionValor.length; counter++){
		if(moneda_variacionValor[indexDelMasAlto] < moneda_variacionValor[counter]) {
			indexDelMasAlto = counter;
		}  
		devuelve = indexDelMasAlto;
	}// cierre for
	return devuelve;// devuelve valor mas alto
}
// CIERRA COMPARACION MONEDAS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 
 
// EVALUACION MONEDAS PARA ENTREGA PALABRAS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 
var palabraElegidaQueMasVaria1 =  entregaVariacion(domina1, aa, ab, ac, ad); 

// MUESTRA PALABRAS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
function muestra() {
var muestra = document.getElementById('test');
salida =	"c1; " + palabraElegidaQueMasVaria1 + 
			"<br> 0% = " + porcentaje[0] + 
			"<br> 1% = " + porcentaje[1] + 
			"<br> 2% = " + porcentaje[2] + 
			"<br> 3% = " + porcentaje[3] + 
			"<br> Elige palabra n = " +  palabraElegidaQueMasVaria1;
muestra.innerHTML =  salida;
}


muestra();






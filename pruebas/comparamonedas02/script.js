 window.addEventListener('load', function(e) {
  entregaVariacion();
}, false);


//PARA GUARDAR MONERDA ANTERIOR
	//valores
	var valorDominante1 = 1;
	var moneda_valorAnterior 	= [1, 1, 1, 1];
	var moneda_valorActual 		= [1, 1, 3, 1];
	var salida= "";

	var devuelve;



//compara valores, actualiza y entrega
function entregaVariacion(){
	var moneda_variacionValor = [0];


	// obtiene variacion (valor absoluto) entre monedas anteriores y actuales, 
	for(i=0; i<4;	i++){
		moneda_variacionValor[i] = 	Math.abs(moneda_valorAnterior[i] - moneda_valorActual[i]) ;
    }


	//saca variacion moneda anterior y actual, valor absoluto
	for(i=0; i < moneda_valorAnterior.lenght;	i++){
		//RESTA MONEDAS Y ENTREGA VALOR ABSOLUTO
		moneda_variacionValor[i] = 	Math.abs(moneda_valorAnterior[i] - moneda_valorActual[i]) ;
    }



	// compara monedas y entrega valor mas alto
	var counter = 1;//parte en 1 pues debe comtarar1 con el anterior q es 0
	var indexDelMasAlto	= 0;
	
	for(counter; counter<moneda_variacionValor.length; counter++){
		if(moneda_variacionValor[indexDelMasAlto] < moneda_variacionValor[counter]) {
			indexDelMasAlto = counter;
			counter = indexDelMasAlto ;
			devuelve = indexDelMasAlto;
		} 
    }

	return devuelve;

}
//cierra comparacion - - - - - - - - - - - - - - - - - - - -
 

var muestra = document.getElementById('test');
salida = "index " + entregaVariacion();
muestra.innerHTML =  salida;
















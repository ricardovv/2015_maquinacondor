 window.addEventListener('load', function(e) {
  entregaVariacion();
}, false);


//PARA GUARDAR MONERDA ANTERIOR
	//valores
	var valorDominante1 = 1; //se debera ajustar segun moneda dominante, dolar x defecto
	var moneda_valorAnterior 	= [1, 1, 2, 1];
	var moneda_valorActual 		= [1, 1, 1, 1];
	var salida= "";

	var devuelve;


//compara valores, actualiza y entrega
function entregaVariacion(){
	var moneda_variacionValor = [];


	// obtiene variacion (valor absoluto) entre monedas anteriores y actuales, 
	for(i=0; i<moneda_valorAnterior.length; i++){
		moneda_variacionValor[i] = 	Math.abs(moneda_valorAnterior[i] - moneda_valorActual[i]) ;
    }


	//saca variacion moneda anterior y actual, valor absoluto
	for(i=0; i < moneda_valorAnterior.lenght;	i++){
		//RESTA MONEDAS Y ENTREGA VALOR ABSOLUTO
//		moneda_variacionValor[i] = 	Math.abs(moneda_valorAnterior[i] - moneda_valorActual[i]) ;
    }



	// compara monedas y entrega valor mas alto
	var counter = 1;//parte en 1 pues debe comtarar1 con el anterior q es 0
	var indexDelMasAlto	= 0;
	var devuelve;
	
	for(counter; counter<moneda_variacionValor.length; counter++){
		if(moneda_variacionValor[indexDelMasAlto] < moneda_variacionValor[counter]) {
			indexDelMasAlto = counter;
		}  
		devuelve = indexDelMasAlto;
	}

	return devuelve;
}
//cierra comparacion - - - - - - - - - - - - - - - - - - - -
 

var muestra = document.getElementById('test');
salida = "index " + entregaVariacion();
muestra.innerHTML =  salida;
















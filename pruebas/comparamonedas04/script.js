 window.addEventListener('load', function(e) {
  entregaVariacion();
}, false);

// va = debo tomar lo a valores actuales 
// vn = y los valores de unas horas atras

// set endpoint and your access key

// arrauys de prueba para valores de monedas
var aa;
var ab = 3;
var ac = 4;
var ad = 50;

var na = 1;
var nb = 1;
var nc = 1;
var nd = 1;

var monedasAnterior = [aa, ab, ac];
var monedasNuevas = [na, nb, nc];




endpoint = 'live'
access_key = '5c98ee4b518a69099255b6846ce21102';

// get the most recent exchange rates via the "live" endpoint:
$.ajax({
//	url : 'http://apilayer.net/api/live?access_key=5c98ee4b518a69099255b6846ce21102&currencies=USD,EUR,CHF,ILS,JPY,CNY,GBP,RUB,CAD,BOB,SYP,IQD,AFN,ARS,LYD,PKR,CLP,BRL,PYG,UYU&format=1',
    url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,   
    dataType: 'jsonp',
    success: function(json) {

        // exchange rata data is stored in json.quotes
        //aa = json.quotes.USDGBP;
        
        // source currency is stored in json.source
		$a = json.quotes.USDGBP;
       aa = $a;
        
        // timestamp can be accessed in json.timestamp
        //alert(json.timestamp);
        
    }
});




//compara valores, actualiza y entrega. va es valor anterior, vn es valor nuevo
function entregaVariacion(va1, va2, va3, va4, vn1, vn2, vn3, vn4 ){
	//valores para comparar
	var valorDominante1 = 1; //se debera ajustar segun moneda dominante, dolar x defecto
	var moneda_valorAnterior 	= [va1, va2, va3, va4];//array valores anteriores
	var moneda_valorNuevo 		= [vn1, vn2, vn3, vn4];//array valores actuales
	//para output
	var salida= "";//para el output de prueba, test
	var devuelve;//almacena valor a devolver para ser usado
	//array para almacenar variaciones.
	var moneda_variacionValor = [];


	// obtiene variacion (valor absoluto) entre monedas anteriores y actuales, 
	for(i=0; i<moneda_valorAnterior.length; i++){
		moneda_variacionValor[i] = 	Math.abs(moneda_valorAnterior[i] - moneda_valorNuevo[i]) ;
    }


	// saca variacion moneda restando valor anterior y actual (valor absoluto) 
	for(i=0; i < moneda_valorAnterior.lenght;	i++){
		//resta monedas da valor absoluto
		//moneda_variacionValor[i] = 	Math.abs(moneda_valorAnterior[i] - moneda_valorNuevo[i]) ;
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
//cierra comparacion - - - - - - - - - - - - - - - - - - - -
 
 
 
 
//variables entregan valor mas alto para cada palabra 
var palabraElegidaPorVariacion1 =  entregaVariacion($a, ab, ac, ad, 	na, nb, nc, nd);
var palabraElegidaPorVariacion2 =  entregaVariacion(1, 1, 3, 1, 	1, 1, 1, 1);
var palabraElegidaPorVariacion3 =  entregaVariacion(1, 1, 1, 21, 	1, 1, 1, 1);
var palabraElegidaPorVariacion4 =  entregaVariacion(1, 1, 1, 1, 	21, 1, 1, 1);
var palabraElegidaPorVariacion5 =  entregaVariacion(1, 1, 1, 1, 	1, 21, 1, 1);
var palabraElegidaPorVariacion6 =  entregaVariacion(1, 1, 1, 1, 	1, 1, 21, 1);
var palabraElegidaPorVariacion7 =  entregaVariacion(1, 1, 1, 1, 	1, 1, 1, 21);
var palabraElegidaPorVariacion8 =  entregaVariacion(1, 1, 1, 1, 	1, 1, 12, 1);
var palabraElegidaPorVariacion9 =  entregaVariacion(1, 1, 1, 1, 	1, 12, 1, 1);
 


// muestra valor en navegador 
var muestra = document.getElementById('test');

salida =	"c1; " + palabraElegidaPorVariacion1 + 
			"<br> c2; " + palabraElegidaPorVariacion2 +  
			"<br> c3; " + palabraElegidaPorVariacion3 + 
			"<br> c4; " + palabraElegidaPorVariacion4 +  	
			"<br> c5; " + palabraElegidaPorVariacion5 +  
			"<br> c6; " + palabraElegidaPorVariacion6 +  
			"<br> c7; " + palabraElegidaPorVariacion7 +  
			"<br> c8; " + palabraElegidaPorVariacion8 +  
			"<br> c9; " + palabraElegidaPorVariacion9 +
						"<br> monedaAnterior; " + monedasAnterior[0] + ", " + monedasAnterior[1] + ", " + monedasAnterior[2] + 
						"<br> monedaNueva; " + monedasNuevas[0] + ", " + monedasNuevas[1] + ", " + monedasNuevas[2] + 
						"<br> valor json " + aa;
			;
muestra.innerHTML =  salida;
















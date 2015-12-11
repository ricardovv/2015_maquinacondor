//par aimprimir onbjetos
var prin = function(o){
    var str='';

    for(var p in o){
        if(typeof o[p] == 'string'){
            str+= p + ': ' + o[p]+'; </br>';
        }else{
            str+= p + ': { </br>' + print(o[p]) + '}';
        }
    }

    return str;
}


var dict = {
	key 	: "palabraxx",
	value	: "100"

};



//toma datos de diario
//var myurl ='http://api.nytimes.com/svc/search/v2/articlesearch.json?q=rainbow&api-key=99cfea65a5bb30650b3d31eb1713233e%3A15%3A73386102';
var urlDiario ='http://api.nytimes.com/svc/search/v2/articlesearch.json?q=santiago&api-key=d16aa54cf90c4d66d6731c0dc50d2d24:1:66460247';

function setup() {
  noCanvas(); 
  loadJSON(urlDiario, tomaDatos); 
}

function draw() { 
}




function tomaDatos(datos){
    // var periodicoDiv = document.getElementById("valorPeriodico").innerHTML = "Datos del diario son" + data ;  
	for(i = 0; i<5; i++) {
  		var datosAMostrar = datos.response.docs[i].snippet;
  		println(datosAMostrar);
//    	var periodicoDiv = document.getElementById("valorPeriodico").innerHTML = i + " son " + datosAMostrar + "</br></br></br>" ;  
	}
// 		document.getElementById("valorPeriodico").innerHTML =  prin(dict.value) ;  
 		document.getElementById("valorPeriodico").innerHTML =   JSON.stringify(  parseInt(dict.value) ) ;  

}


 
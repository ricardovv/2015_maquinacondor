// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//MAQUINA CONDOR, Demian Schopf
//Versión Online 1.1
//Santiago, Chile. Noviembre - Diciembre 2015
 
// sacar los arrays de links de las palabras,s e abren dinamicamente.  

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//var getApariciones = palabraMasRepetidaBuscadorCantidad; // buscador en archivo aparte entrega cantidad de veces palabras mas buscada
//var getPalabra = palabraMasRepetidaBuscador;  // buscador en archivo aparte entrega palabras mas buscada 
var getApariciones = 15; //ejemplo para prueba cambio rapido de cantidad de veces palabra mas repetida
var getPalabra = "baba";//ejemplo para prueba cambio rapido de palabra mas repetida

var d = new Date();
var fecha   =   d.getDate();
var dia     =   d.getDay();
var hora    =   d.getHours();
var minutos =   d.getMinutes();
 
var mm=new Date();
var m2 = mm.getMonth() + 1;
var mesok = (m2 < 10) ? '0' + m2 : m2;
var mesok=new Array(12);
mesok[0]="Enero";
mesok[1]="Febrero";
mesok[2]="Marzo";
mesok[3]="Abril";
mesok[4]="Mayo";
mesok[5]="Junio";
mesok[6]="Julio";
mesok[7]="Agosto";
mesok[8]="Septiembre";
mesok[9]="Octubre";
mesok[10]="Noviembre";
mesok[11]="Diciembre";

var mesNombre = mesok[mm.getMonth()]; 



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// FONDOS ALEATORIOS 
window.onload=function(){  
   var divbg=document.getElementById("wrap");  
   var imgarray = new Array("imgbg01.gif", "imgbg02.gif");  
   var imgElegida =Math.floor(Math.random()* imgarray.length);  

  //cambia color de fuente si sale imagen espeifica 
   if (imgElegida == 0) {
     document.getElementById("poema").style.color = "white";
   }
   divbg.style.background="url(_img/"+imgarray[imgElegida]+")";  
   divbg.style.backgroundSize="cover";  
} 
 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//VARIABLES MONEDAS
var counterCargaJSON = 0;
  // variables globales para accceder, se actualizan luego
    var   monedaValor0;
    var   monedaValor1;
    var   monedaValor2;
    var   monedaValor3;
    var   monedaValor4;
    var   monedaValor5;
    var   monedaValor6;
    var   monedaValor7;
    var   monedaValor8;
    var   monedaValor9;
    var   monedaValor10;
    var   monedaValor11;
    var   monedaValor12;
    var   monedaValor13;
    var   monedaValor14;
    var   monedaValor15;
    var   monedaValor16;
    //var   monedaValorSuma;
    /*
dominantes - - - - - - 
ILS - el Shéquel israelí
USD - Dólar norteamericano
GBP - la Libra inglesa  
EUR - el Euro europeo 
SAR - el Riyal Saudí 
dominados  - - - - - - 
SYP - la Libra siria 
AFN - el Afganí afgano 
IRR - el Dinar iraquí 
LYD - el Dinar libio
PKR - la Rupia paquistaní
dominados  - - - - - - 
CLP - el Peso chileno
ARS - el Peso argentino
BRL - el Real brasileño
PYG - el Guaraní paraguayo
UYU - el Peso uruguayo
BOB - el Peso boliviano
Otros RUBLO YEN Yuan Chino
*/

  // variables globales para nombres
    var   monedaNombre0    	= "Moneda Principal ";
    var   monedaNombre1    	= " el Shéquel israelí ";
    var   monedaNombre2    	= " el Dólar norteamericano ";
    var   monedaNombre3    	= " la Libra inglesa ";
    var   monedaNombre4    	= " el Euro europeo ";
    var   monedaNombre5    	= " el Riyal saudí ";
    
    var   monedaNombre6    	= " la Libra siria ";
    var   monedaNombre7    	= " el Afganí afgano ";
    var   monedaNombre8    	= " el Dinar iraquí ";
    var   monedaNombre9    	= " el Dinar Libio ";
    var   monedaNombre10    = " la Rupia paquistaní ";
    
    var   monedaNombre11    = " el peso Chileno ";
    var   monedaNombre12    = " el peso argentino ";
    var   monedaNombre13    = " el Real brasileño ";
    var   monedaNombre14    = " el Guaraní paraguayo ";
    var   monedaNombre15    = " el Peso uruguayo ";
    var   monedaNombre16    = " el Peso boliviano ";
    var   monedaNombreSuma	= "las Monedas suman ";
    
    //valores para output html
    var   monedaOutput0;
    var   monedaOutput1;
    var   monedaOutput2;
    var   monedaOutput3;
    var   monedaOutput4;
    var   monedaOutput5;
    var   monedaOutput6;
    var   monedaOutput7;
    var   monedaOutput8;
    var   monedaOutput9;
    var   monedaOutput10;
    var   monedaOutput11;
    var   monedaOutput12;
    var   monedaOutput13;
    var   monedaOutput14;
    var   monedaOutput15;
    var   monedaOutput16;
    var   monedaOutputSuma;

 // - - - - - - - - - - - - - - - - - - - - - - - 
//llama JSON, segun tiempo de regarga general. 
function llamaJSON(){
  counterCargaJSON++;
  document.getElementById("numero").innerHTML = counterCargaJSON ;
  cargaJSON();
} 
// cierre contador - - - - - - - - - - - - - - - - - - - - - - - 


// - - - - - - - - - - - - - - - - - - - - - - - 
 //carga el JSON Çde las monedas
function cargaJSON(){
//URL api monedas data_file
// de api layer, se acabaron los 1000 request
var url_data = 'http://apilayer.net/api/live?access_key=5c98ee4b518a69099255b6846ce21102&currencies=ILS,USD,GBP,EUR,SAR,SYP,AFN,IRR,LYD,PKR,CLP,ARS,BRL,PYG,UYU,BOB&format=1';


var http_request = new XMLHttpRequest();
  // detecta errores // - - - - - - - - - - - - - - - - - - - - - - -  
  try{ // Opera 8.0+, Firefox, Chrome, Safari
    http_request = new XMLHttpRequest();
  }
  catch (e){// cartch 1
    // IExplorer  
    try{
      http_request = new ActiveXObject("Msxml2.XMLHTTP"); 
    }
      catch (e){
          try{ 
            http_request = new ActiveXObject("Microsoft.XMLHTTP"); 
        }// Por si hay problemas de algun tipo 
        catch (e){ 
          alert("Problemas con el browser!"); return false; 
      }
    }
  }// cierre catch 1 // - - - - - - - - - - - - - - - - - - - - - - - 

  // - - - - - - - - - - - - - - - - - - - - - - - 
  http_request.onreadystatechange = function(){
      if (http_request.readyState == 4  ){
        // Javascript function para parsear lso datos de JSON
        var jsonObj = JSON.parse(http_request.responseText);
        // variable jsonObj contiene los datos y la estructura.
        //https://en.wikipedia.org/wiki/List_of_circulating_currencies 
        monedaValor0 = jsonObj.source;
        monedaValor1 = jsonObj.quotes.USDILS;  // ILS - el Shéquel israelí
        monedaValor2 = jsonObj.quotes.USDUSD;  // USD - Dólar norteamericano, 
        monedaValor3 = jsonObj.quotes.USDGBP;  // GBP - la Libra inglesa
        monedaValor4 = jsonObj.quotes.USDEUR;  // EUR - el Euro europeo
        monedaValor5 = jsonObj.quotes.USDSAR;  // SAR - el Riyal Saudí 
        
        monedaValor6 = jsonObj.quotes.USDSYP;  // SYP - la Libra Siria
        monedaValor7 = jsonObj.quotes.USDAFN;  // AFN - el Afganí Afgano
        monedaValor8 = jsonObj.quotes.USDIRR;  // IRR - el Dinar Iraquí 
        monedaValor9 = jsonObj.quotes.USDLYD;  // LYD - el Dinar Libia
        monedaValor10 = jsonObj.quotes.USDPKR;  // PKR - la Rupia paquistaní

        monedaValor11 = jsonObj.quotes.USDCLP;  // CLP - el peso Chileno
        monedaValor12 = jsonObj.quotes.USDARS;  // ARS - el peso Argentino
        monedaValor13 = jsonObj.quotes.USDBRL;  // BRL - el Real Brasil 
        monedaValor14 = jsonObj.quotes.USDPYG;  // PYG - el Guaraní Paraguayo
        monedaValor15 = jsonObj.quotes.USDUYU;  // UYU - el peso Uruguayo
        monedaValor16 = jsonObj.quotes.USDBOB;  // BOB - el peso Boliviano
                
        monedaValorSuma= monedaValor0 + monedaValor1 + monedaValor2 + monedaValor3 + monedaValor4 + monedaValor5 + monedaValor6 + monedaValor7 + monedaValor8 + monedaValor9;


        // valores para output html
          monedaOutput0    = monedaNombre0 + monedaValor0;
          monedaOutput1    = monedaNombre1 + monedaValor1;
          monedaOutput2    = monedaNombre2 + monedaValor2;
          monedaOutput3    = monedaNombre3 + monedaValor3;
          monedaOutput4    = monedaNombre4 + monedaValor4;
          monedaOutput5    = monedaNombre5 + monedaValor5;
          monedaOutput6    = monedaNombre6 + monedaValor6;
          monedaOutput7    = monedaNombre7 + monedaValor7;
          monedaOutput8    = monedaNombre8 + monedaValor8;
          monedaOutput9    = monedaNombre9 + monedaValor9;
          monedaOutput10    = monedaNombre10 + monedaValor10;
          monedaOutput11    = monedaNombre11 + monedaValor11;
          monedaOutput12    = monedaNombre12 + monedaValor12;
          monedaOutput13    = monedaNombre13 + monedaValor13;
          monedaOutput14    = monedaNombre14 + monedaValor14;
          monedaOutput15    = monedaNombre15 + monedaValor15;
          monedaOutput16    = monedaNombre16 + monedaValor16;
        monedaOutputSuma 	= monedaNombreSuma + monedaValorSuma;

        // updaters de html
//         document.getElementById("moneda0").innerHTML  = monedaOutput0;
//         document.getElementById("moneda1").innerHTML  = monedaOutput1;
//         document.getElementById("moneda2").innerHTML  = monedaOutput2;
//         document.getElementById("moneda3").innerHTML  = monedaOutput3;
//         document.getElementById("moneda4").innerHTML  = monedaOutput4;
//         document.getElementById("moneda5").innerHTML  = monedaOutput5;
//         document.getElementById("moneda6").innerHTML  = monedaOutput6;
//         document.getElementById("moneda7").innerHTML  = monedaOutput7;
//         document.getElementById("moneda8").innerHTML  = monedaOutput8;
//         document.getElementById("moneda9").innerHTML  = monedaOutput9;
//         document.getElementById("moneda10").innerHTML  = monedaOutput0;
//         document.getElementById("moneda11").innerHTML  = monedaOutput11;
//         document.getElementById("moneda12").innerHTML  = monedaOutput12;
//         document.getElementById("moneda13").innerHTML  = monedaOutput13;
//         document.getElementById("moneda14").innerHTML  = monedaOutput14;
//         document.getElementById("moneda15").innerHTML  = monedaOutput15;
//         document.getElementById("moneda16").innerHTML  = monedaOutput16;
//         document.getElementById("monedaSuma").innerHTML   = monedaOutputSuma;
      }// cierre if
  }// cierre FUNCTION
   // - - - - - - - - - - - - - - - - - - - - - - - 
  http_request.open("GET", url_data, true);
  http_request.send();
} // cierre function cargaJSON() - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// LISTAS NOMBRES Y PALABRAS
//window.onload=function(){  
//var nombreALista = ["Arafat", "Jamal", "Ayman", "Abdullah", "Mohammad", "Anas", "Samira", "Abdul-Fattah", "Rahaf", "Mohammad"];  
var nombreALista = ["3341"];  
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//LISTA DE LINKS
var linkNombreLista = ["http://drones.pitchinteractive.com"]
var linkPalabra1Lista = ["popuptexto.html"]
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//LISTA CATEGORIAS PALABRAS 1 al 4

var categoria1 =  [  
                          ["1Bóvedas", "1Coyunturas", "1Cámaras", "1Nervaduras"], 
                          ["craneales", "encefálicas", "medulares", "oculares"], 
                          ["inertes", "exánimes", "exangües", "comatosas"], 
                          ["objetamente", "ascépticamente", "impecablemente", "sirúrgicamente"], 
                          ["descosidas", "hilvanadas", "suturadas", "rezurcidas"], 
                          ["vivisecciones", "áscaras", "morbilidades", "secciones"], 
                          ["escalpelos", "cisurados", "hilos", "gabinetes"], 
                          ["afásicas", "disfásicas", "disfémicas", "disfónicas"], 
                          ["1necronomías", "1tanatonomías", "1logópedas", "1xtanatólogos"]
                          ];
 
var categoria2 =  [  
                          ["2Arterias", "2Membranas", "2Tejidos", "2Epitelios"], 
                          ["sublinguales", "lacrimales", "musculares", "interiores"], 
                          ["enervaciones", "norgánicas", "endrogámicas", "negantrópicas"], 
                          ["purulacines", "expectoraciones", "secreciones", "siquiatrices"], 
                          ["transandinas", "nueguinas", "transplantinas", "andígenas"], 
                          ["viraciones", "inseminaciones", "nidaciones", "ramificaciones"], 
                          ["racimos", "omnicidas", "tanátomos", "óvalos"], 
                          ["crepusculares", "eclípticas", "trifásicas", "bifásicas"], 
                          ["2borradores", "2hablaciones", "2fosales", "2sacramentales"]
                          ];

var categoria3 =  [ 
                          ["3Bocas", "3Cortezas", "3Cuencas", "3Fosas"], 
                          ["nasales", "uterinas", "himenales", "trompales"], 
                          ["mustias", "yermas", "yertas", "baldías"], 
                          ["por", "por", "por", "por"], 
                          ["oclusiones", "oclusas", "disformes", "biformes"], 
                          ["talas", "hablaciones", "retracciones", "suturas"], 
                          ["abladores", "lagares", "llagares", "lagares"],
                          ["norgánicas", "negantrópicas", "endrogámicas", "necronómicas"], 
                          ["3naturalezas muertas", "3sobrenaturalezas", "3limbos", "3purgatorios"]
                          ];

var categoria4 =  [ 
                          ["4Mariposas", "4Nínfulos", "4Lucíferas", "4Crisálidos"], 
                          ["cobardes", "evitables", "salivales", "soslayables"], 
                          ["temerarias", "eutanasias", "quebradas", "distanasias"], 
                          ["fatalmente", "disfásicamente", "ascépticamente", "objetamente"], 
                          ["ciegas", "asistidas", "socorridas", "auxiliadas"], 
                          ["llamas", "dilaciones", "contracciones", "áscaras"], 
                          ["Fénix", "transplantenses" , "andígenas", "nueguinos"], 
                          ["obstinadas", "obsecadas", "elípticas", "eclípticas"], 
                          ["4alas", "4ánforas", "4urnas", "4tálamos"]
                          ];
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 





// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//PALABRAS CLAVE PARA BUSCAR EN EL DIARIO
var palabrasClave = ["activists", "administration", "adversarial", "adversary", "aggression", "aid", "alliance", "ambassador", "ambush", "ambushed", "analysts", "annihilation", "antitank", "arm", "armored", "arms", "arsenal", "artillery", "assassinate", "assassination", "assault", "atomic", "attack", "attacks", "bank", "banking", "barrel", "barrels", "battle", "billion", "billions", "blockade", "blood", "boat", "bodies", "bomb", "bombardments", "bombed", "bombers", "bombings", "bombs", "bought", "brigade", "broken", "brutal", "brutality", "brutally", "bunker", "bunkers", "buried", "bussines", "buy", "campaign", "campaigns", "camps", "capital", "capitalization", "capitals", "captured", "casualties", "cause", "cease-fire", "cease", "cents", "chevron", "civil", "civilian", "civilians", "cleared", "climbed", "coffin", "combat", "combats", "command", "commander", "commerce", "companies", "company's", "company", "conflict", "consum", "consumers", "consumption", "controls", "corp.", "cost", "costs", "council", "crimes", "crisis", "criticism", "crossfire", "crude", "cuba's", "cuba", "cuban", "cubic", "damage", "dead", "deal", "deals", "death", "demand", "demanding", "deported", "destroyed", "destroying", "destruction", "detainees", "deter", "detonated", "died", "disagreement", "disagreements", "disarmament", "disarmed", "disarmed", "disproportionate", "division", "divisions", "dollar", "dollars", "dow", "economy", "emergency", "energy", "entertainment", "escalate", "escalates", "escalation", "euro", "euros", "evacuated", "exchange", "executed", "executing", "exile", "exiled", "exodus", "exploited", "explosives", "extracting", "exxon", "feet", "fields", "fierce", "fight", "fighters", "fighting", "fire", "fired", "force", "forces", "fought", "fuel", "fundamentalist", "fundamentalistic", "fundamentalists", "funding", "funds", "gain", "gallon", "gas", "gasoline", "geopolitical", "global", "grenades", "guerrilla", "guerrillas", "gunmen", "gunned", "habana", "habanna", "havanna", "headquarter", "headquarters", "health", "helicopter", "helicopters", "hidden", "hit", "hitting", "hostilities", "hunt", "hunting", "hunts", "inciting", "increase", "industry", "infantry", "inflation", "injured", "insurgent", "intervene", "intervention", "interventions", "invaded", "invasion", "investment", "investors", "jet", "jets", "kidnapped", "kidnapping", "kidnappings", "kill", "killed", "killing", "kills", "launched", "launcher", "launches", "market", "martyr", "martyrs", "medical", "miami", "militant", "militants", "military", "militia", "militias", "million", "millions", "mines", "ministry", "missiles", "mission", "mob", "mobil's", "mobile", "money", "mortar", "munition", "nasdaq", "negotiate", "negotiated", "negotiation", "network", "networks", "nuclear", "occupyng", "offensive", "oil-rich", "oil's", "oil", "oilfield", "opec", "operating", "operation", "operations", "opponents", "organization", "paratroopers", "patrol", "pay", "payment", "petroleum", "pipeline", "pipelines", "points", "power", "precision", "pressure", "price", "prices", "prision", "prisioner", "producer", "product", "production", "profit", "profitabel", "profitability", "profits", "provoking", "pump", "punishing", "rage", "rages", "raid", "raids", "rais", "raises", "refineries", "refining", "refugee", "refugees", "refused", "reject", "rejects", "religious", "remotely", "reprisal", "reprisals", "research", "reserves", "resistance", "resources", "retaliation", "reuters", "revolution", "revolutionary", "rights", "riot", "rising", "rockets", "rose", "sale", "security", "service", "services", "shelled", "shelling", "shells", "shells", "shelter", "shooting", "state", "storms", "stormy", "strategic", "strategy", "strategy", "strikes", "striking", "struck", "suicide-bombings", "suicide", "surgery", "suspected", "tactic", "tactics", "tanks", "tanks", "target", "targeted", "targets", "tax", "taxes", "tension", "tensions", "territories", "territory", "terrorism", "trade", "traders", "trades", "trading", "training-camps", "treasury", "troops", "tunnel", "tunneled", "u.n", "unwilling", "violated", "violation", "violations", "violence", "violent", "war", "warplanes", "wars", "weapons", "weapons", "wounded", "wounding", "yen"];
function traeResultadosBuscador(){
//testear palabra buscada
//var getApariciones;
//var getPalabra;
}


 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// SELECCION DE CATEGORIAS corregido jueves 15 enero 
var categoriaSeleccionada; //es capaz de seleccionar categorias

//si palabra es xx, selecciona xx categoria y lo pasa a variable

function entregaCategoriaSeleccionada() {
	//creadasa aca para q sean globales. 
 palabrasClaveLista =  ["aba", "abe", "abi", "baba", "bebe", "bibi", "caca", "cece", "cici", "dada", "dede", "didi"];
	//se divide array para ir contando secuencias de palabras
	palabrasClave1 = palabrasClaveLista.slice(0,3); 
	palabrasClave2 = palabrasClaveLista.slice(3,6);
	palabrasClave3 = palabrasClaveLista.slice(0,9);
	palabrasClave4 = palabrasClaveLista.slice(0,12);
	
	// for(i = 0; i<palabrasClave1.length; i++) {
// 		if (palabrasClave1[i] == "aba") {
//     		categoriaSeleccionada = categoria1;
//   		}
// 	}

//Selecciona en que categoria esta la palabra
	var encontrada1 = false;
	for (i = 0; i < palabrasClave1.length && !encontrada1; i++) {
  		if (palabrasClave1[i] === getPalabra) {
	    	encontrada1 = true;
	    	categoriaSeleccionada = categoria1;
 	 	}
 	} 	
	for (j = 0; j < palabrasClave2.length && !encontrada1; j++) {
  		if (palabrasClave2[j] === getPalabra) {
	    	encontrada1 = true;
	    	categoriaSeleccionada = categoria2;
 	 	}
	}
	for (k = 0; k < palabrasClave3.length && !encontrada1; k++) {
  		if (palabrasClave3[k] === getPalabra) {
	    	encontrada1 = true;
	    	categoriaSeleccionada = categoria3;
 	 	}
	}
	for (l = 0; l < palabrasClave4.length && !encontrada1; l++) {
  		if (palabrasClave4[l] === getPalabra) {
	    	encontrada1 = true;
	    	categoriaSeleccionada = categoria4;
 	 	}
	}

}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

 
 
 
 
 
 


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// SELECCION DE MONEDAS
var output_seleccionado;

// Evalua y Devuelve valores monedas. Por ahora random, luego evalua datos segun rangos 
function money1(_val1, _val2) {
    var money1Val = Math.random() * (_val2 - _val1) + _val1 ;    
    return money1Val; 
 }
// VALORES MONEDAS
var money1Low = 0.0;//valore snetrantes bajos
var money1High = 4.0;//valore snetrantes altos
var valorVar1;// MUESTRA VALORES MONEDAS
var valorDeCorte1 = 1.0;
var valorDeCorte2 = 2.0;
var valorDeCorte3 = 3.0;
var valorDeCorte4 = 4.0;

//Muestra valores
function entregaComparacion() {
  valorVar1 = money1(money1Low, money1High);
  if (valorVar1 <= valorDeCorte1) {
    output_seleccionado = "> Menor q valorDeCorte1" + " | Categoria 1";
  }

  if (valorVar1 > valorDeCorte1 && valorVar1 <= valorDeCorte2 ) {
    output_seleccionado = ">> Menor q valorDeCorte2" + " | Categoria 2";
  }
  
  if (valorVar1 > valorDeCorte2 && valorVar1 <= valorDeCorte3 ) {
    output_seleccionado = ">>> Menor q valorDeCorte3 " + " | Categoria 3";
  } 

  else if (valorVar1 > valorDeCorte3 && valorVar1 <= valorDeCorte4 ){
    output_seleccionado = " Menor q valorDeCorte4" + " | Categoria 4";
  }
}
//Muestra valores
function muestraMoneda() {
 // document.getElementById("valorMoneda1").innerHTML = valorVar1 + output_seleccionado;  
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//PALARAS PARA POP UP - toma valores de las palabras para pasarlos al popopup
var valorPopupPalabra1 = "";
var valorPopupPalabra2 = "";
var valorPopupPalabra3 = "";
var valorPopupPalabra4 = "";
var valorPopupPalabra5 = "";
var valorPopupPalabra6 = "";
var valorPopupPalabra7 = "";
var valorPopupPalabra8 = "";
var valorPopupPalabra9 = "";
var valorPopupPalabra = "";
var valorPopupPalabraBuscada = getPalabra;
var valorPopupPalabraBuscadaVeces = getApariciones;
var valorPopupPalabraBuscadaFecha = "día <b>"+fecha+"</b> de <b>"+mesNombre+"</b>";
var valorPopupMoneda1 = "";
var valorPopupMoneda2 = "";
var valorPopupMonedaValor = "";

function abreVentana(numeroPalabra) {
  if (numeroPalabra == 1) {
    valorPopupPalabra = valorPopupPalabra1;
  }
  if (numeroPalabra == 2) {
    valorPopupPalabra = valorPopupPalabra2;
  }
  if (numeroPalabra == 3) {
    valorPopupPalabra = valorPopupPalabra3;
  }
  if (numeroPalabra == 4) {
    valorPopupPalabra = valorPopupPalabra4;
  }
  if (numeroPalabra == 5) {
    valorPopupPalabra = valorPopupPalabra5;
  }
  if (numeroPalabra == 6) {
    valorPopupPalabra = valorPopupPalabra6;
  }
  if (numeroPalabra == 7) {
    valorPopupPalabra = valorPopupPalabra7;
  }
  if (numeroPalabra == 8) {
    valorPopupPalabra = valorPopupPalabra8;
  }
  if (numeroPalabra == 9) {
    valorPopupPalabra = valorPopupPalabra9;
  }

// crea ventana popup nueva con imagenes y explicacion. 
  newwindow2=window.open('','name','');
  var tmp = newwindow2.document;
  tmp.write('<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">');

  tmp.write('<html><head><title>popup</title>');
  tmp.write('<link rel="stylesheet" href="_css/popupstyle.css">');
  tmp.write('<link href=\'https://fonts.googleapis.com/css?family=Roboto:400,500,700|Roboto+Condensed:400,700\' rel=\'stylesheet\' type=\'text/css\'>');
  tmp.write('</head><body>');
  // contenidos  
  tmp.write('<div id="textopopup"><div id="texto"><p id="parrafo">');
  // frase 1
  tmp.write('La aparición de la palabra <a id="palabra1Div">' + valorPopupPalabra + '</a> en el verso se debe a una conjunción entre dos datos.<br>');
  // frase 2 
  tmp.write('El primero, es que la palabra "<b>' + valorPopupPalabraBuscada + '</b>" aparece <b>' + valorPopupPalabraBuscadaVeces + '</b> veces el ' + valorPopupPalabraBuscadaFecha + '<br>'); 
  // frase 3
  tmp.write('en los articulos del Periódico <a href="http://www.nytimes.com/" target="_blank">The New York Times</a> examinados por la Máquina Cóndor.<br>');
  // frase 4 
  tmp.write('El segundo es porque el valor de compra de <a href="http://co.apilayer.net/" target="_blank">' +  monedaNombre3 + ' </a><br> en relación a ' + 
    '<a href="http://co.apilayer.net/" target="_blank">' + monedaNombre2 + 
    '</a> es de<a href="http://co.apilayer.net/" target="_blank"> ' + monedaValor3 + '</a>.'); 
  // cierre divs
  tmp.write('</p></div></div>');
  //jscript para el bg
  tmp.write('<script language="javascript" type="text/javascript" src="popupscript.js"></script>');

  // cierre HTML, importantes!.  
  tmp.write('</body></html>');
  tmp.close();

}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//NOMBRES
function cambiaNombreA() {
  //Codigo para pruebas rapidas
  var nombreASelector = Math.floor(Math.random()* nombreALista.length);  
  var nombreADiv      = document.getElementById("nombreADiv"); 
  var marcador        = "array " + nombreASelector + ": ";
  nombreADiv.innerHTML = nombreALista[nombreASelector];  
  
  //set atributos del link de la palabra o nombre
  nombreADiv.setAttribute('href', linkNombreLista[0]);
  nombreADiv.setAttribute('target', "_self"); 
  nombreADiv.setAttribute('class', "tooltip"); 
}

//PALABRA 1
function cambiaPalabra1() {
  //Codigo para pruebas rapidas
  var palabraNumero = 0;
  var palabra1Selector  = Math.floor(Math.random()*4);  
  var palabra1Div       = document.getElementById("palabra1Div");  
  var palabraQuaVa      = categoriaSeleccionada[palabraNumero][palabra1Selector];
  palabra1Div.innerHTML = palabraQuaVa;  

  valorPopupPalabra1 = palabraQuaVa;//entreva valor de palabra para el popup

  //setea atributo del link de la palabra
  // palabra1Div.setAttribute('href', linkPalabra1Lista[0]);
  // palabra1Div.setAttribute('target', "_blank"); 
  // palabra1Div.setAttribute('class', "tooltip"); 
 }


//PALABRA 2
function cambiaPalabra2() {
  //Codigo para pruebas rapidas
  var palabraNumero = 1;
  var palabra2Selector =  Math.floor(Math.random()* 4);  
  var palabra2Div      =  document.getElementById("palabra2Div");  
  var palabraQuaVa      = categoriaSeleccionada[palabraNumero][palabra2Selector];
  palabra2Div.innerHTML = palabraQuaVa;  

  valorPopupPalabra2 = palabraQuaVa;//entreva valor de palabra para el popup

}

//PALABRA 3
function cambiaPalabra3() {
  //Codigo para pruebas rapidas
  var palabraNumero = 2; 
  var palabra3Selector  = Math.floor(Math.random()* 4);  
  var palabra3Div       =document.getElementById("palabra3Div"); 
  var palabraQuaVa      = categoriaSeleccionada[palabraNumero][palabra3Selector];
  palabra3Div.innerHTML = palabraQuaVa;  

  valorPopupPalabra3 = palabraQuaVa;//entreva valor de palabra para el popup

  //setea atributyo del link de la palabra
  // palabra3Div.setAttribute('href', linkPalabra1Lista[0]);
  // palabra3Div.setAttribute('target', "_blank"); 
  // palabra3Div.setAttribute('class', "tooltip"); 
}

//PALABRA 4
function cambiaPalabra4() {
    //Codigo para pruebas rapidas
  var palabraNumero = 3;
  var palabra4Selector = Math.floor(Math.random()* 4);  
  var palabra4Div=document.getElementById("palabra4Div");
  var palabraQuaVa      = categoriaSeleccionada[palabraNumero][palabra4Selector];
  palabra4Div.innerHTML = palabraQuaVa;  

  valorPopupPalabra4 = palabraQuaVa;//entreva valor de palabra para el popup

  //setea atributyo del link de la palabra
  // palabra4Div.setAttribute('href', linkPalabra1Lista[0]);
  // palabra4Div.setAttribute('target', "_blank"); 
  // palabra4Div.setAttribute('class', "tooltip"); 
}

//PALABRA 5
function cambiaPalabra5() {
  //Codigo para pruebas rapidas
  var palabraNumero = 4;
  var palabra5Selector = Math.floor(Math.random()* 4);  
  var palabra5Div=document.getElementById("palabra5Div");  
  var palabraQuaVa      = categoriaSeleccionada[palabraNumero][palabra5Selector];
  palabra5Div.innerHTML = palabraQuaVa;  

  valorPopupPalabra5 = palabraQuaVa;//entreva valor de palabra para el popup

  //setea atributyo del link de la palabra
  // palabra5Div.setAttribute('href', linkPalabra1Lista[0]);
  // palabra5Div.setAttribute('target', "_blank"); 
  // palabra5Div.setAttribute('class', "tooltip"); 
}

//PALABRA 6
function cambiaPalabra6() {
    //Codigo para pruebas rapidas
  var palabraNumero = 5;
  var palabra6Selector =Math.floor(Math.random()* 4);  
  var palabra6Div=document.getElementById("palabra6Div");  
  var palabraQuaVa      = categoriaSeleccionada[palabraNumero][palabra6Selector];
  palabra6Div.innerHTML = palabraQuaVa;  

  valorPopupPalabra6 = palabraQuaVa;//entreva valor de palabra para el popup

  //setea atributyo del link de la palabra
  // palabra6Div.setAttribute('href', linkPalabra1Lista[0]);
  // palabra6Div.setAttribute('target', "_blank"); 
  // palabra6Div.setAttribute('class', "tooltip"); 
}

//PALABRA 7
function cambiaPalabra7() {
    //Codigo para pruebas rapidas
  var palabraNumero = 6;
  var palabra7Selector =Math.floor(Math.random()* 4);  
  var palabra7Div=document.getElementById("palabra7Div");  
  var palabraQuaVa      = categoriaSeleccionada[palabraNumero][palabra7Selector];
  palabra7Div.innerHTML = palabraQuaVa;  

  valorPopupPalabra7 = palabraQuaVa;//entreva valor de palabra para el popup

  //setea atributyo del link de la palabra
  // palabra7Div.setAttribute('href', linkPalabra1Lista[0]);
  // palabra7Div.setAttribute('target', "_blank"); 
  // palabra7Div.setAttribute('class', "tooltip"); 
}

//PALABRA 8
function cambiaPalabra8() {
    //Codigo para pruebas rapidas
  var palabraNumero = 7;
  var palabra8Selector =Math.floor(Math.random()* 4);  
  var palabra8Div=document.getElementById("palabra8Div");  
  var palabraQuaVa      = categoriaSeleccionada[palabraNumero][palabra8Selector];
  palabra8Div.innerHTML = palabraQuaVa;  

  valorPopupPalabra8 = palabraQuaVa;//entreva valor de palabra para el popup

  //setea atributyo del link de la palabra
  // palabra8Div.setAttribute('href', linkPalabra1Lista[0]);
  // palabra8Div.setAttribute('target', "_blank"); 
  // palabra8Div.setAttribute('class', "tooltip"); 
}

//PALABRA 9
function cambiaPalabra9() {
  //Codigo para pruebas rapidas
  var palabraNumero = 8;
  var palabra9Selector =Math.floor(Math.random()* 4);  
  var palabra9Div=document.getElementById("palabra9Div");  
  var palabraQuaVa      = categoriaSeleccionada[palabraNumero][palabra9Selector];
  palabra9Div.innerHTML = palabraQuaVa;  
  
  valorPopupPalabra9 = palabraQuaVa;//entreva valor de palabra para el popup

  //setea atributyo del link de la palabra
  // palabra9Div.setAttribute('href', linkPalabra1Lista[0]);
  // palabra9Div.setAttribute('target', "_blank"); 
  // palabra9Div.setAttribute('class', "tooltip"); 
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
var cajaOverlay; 
function mostrar(cual){
  cajaOverlay           =   document.getElementById("cajaOverlay");
    /* estilos overlay*/
  cajaOverlay.style.position        =  'absolute';
  cajaOverlay.style.top             =  0;
  cajaOverlay.style.backgroundColor =  'rgba(0, 0, 0, 0.8)';
  cajaOverlay.style.display         =  'inline';
  /*resize y posicion */
  cajaOverlay.style.width           = window.innerWidth + 'px';
  cajaOverlay.style.height          = window.innerHeight + 'px';
  cajaOverlay.style.top             = window.pageXOffset + 'px'; 

  headerSobreObra                   =   document.getElementById("sobreobra");
  headerSobreArtista                =   document.getElementById("sobreartista");

  if(cual == 1){//abre sobre obra, pero debe cerrar sobreartista
    headerSobreArtista.style.display  =  'none';
    headerSobreObra.style.display  =  'inline';
  } 
  if(cual == 2){//abre sobre artista, pero debe cerrar sobreobra
    headerSobreObra.style.display  =  'none';
    headerSobreArtista.style.display  =  'inline';
  } 
 }//cierre monstrar

function cerrar(){
  document.getElementById("sobreobra").style.display    =  'none';
  document.getElementById("sobreartista").style.display =  'none';
  document.getElementById("cajaOverlay").style.display  = "none";
}




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//CAMBIA TODO
function cambiaTodo(){  
  entregaCategoriaSeleccionada();

  cambiaNombreA();  
  cambiaPalabra1(); 
  cambiaPalabra2();
  cambiaPalabra3();
  cambiaPalabra4();
  cambiaPalabra5();
  cambiaPalabra6();
  cambiaPalabra7();
  cambiaPalabra8();
  cambiaPalabra9();

  muestraMoneda(); 
}   
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 





// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//UPDATERS // ABAJO PARA Q CAMBIE CUANDO CARGA TODO LOD EMAS
setTimeout(cargaJSON, 1000); //para iniciar una vez la carga de los valores de  las omedas
setTimeout(cambiaTodo, 1000); //para iniciar una vez la carga de los valores de  las omedas

var tiempoRecargaJSON = setInterval(llamaJSON, 3600000); //recarga el json 3600000 ms una hora 
var tiempoParaCambiarTodo = 900000;// 20.000 son 20 seg para que recargar todo el poema en su totalidad. 

var counter = tiempoParaCambiarTodo/1000; //inicializa contador tiempo reversa de pie de pagina. dividio x mil


function counterGeneracionPoema() {
if (counter == 0) {
  counter = tiempoParaCambiarTodo/1000;
} counter--;
 document.getElementById("outputTiempo").innerHTML = counter;  
};

//diferente apra cambiar poema y para cambiar tiepo de carga de json
setInterval(counterGeneracionPoema, 999); //llama cada segundo el counter del poema
setInterval(cambiaTodo, tiempoParaCambiarTodo); //llama el cambio de todo 




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


 

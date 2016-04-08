// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//MAQUINA CONDOR, DEmian Schopf
//Versión Online 1.1
//Santiago, Chile. Noviembre - Diciembre 2015
 
// sacar los arrays de links de las palabras,s e abren dinamicamente.  

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
var getApariciones = 12;
var getPalabra = "civil";

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
   var spot =Math.floor(Math.random()* imgarray.length);  
   divbg.style.background="url(_img/"+imgarray[spot]+")";  
   divbg.style.backgroundSize="cover";  
} 
 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//CARGA MONEDA
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
    //var   monedaValorSuma;
  // variables globales para nombres
    var   monedaNombre0    = "Moneda Principal ";
    var   monedaNombre1    = "el Dolar Americano ";
    var   monedaNombre2    = "la Libra Inglesa ";
    var   monedaNombre3    = "el Euro ";
    var   monedaNombre4    = "el Yen Japones ";
    var   monedaNombre5    = "el Yuan Chino ";
    var   monedaNombre6    = "el Rublo Ruso ";
    var   monedaNombre7    = "el Dolar Australiano ";
    var   monedaNombre8    = "el Bolivar Boliviano ";
    var   monedaNombre9    = "el Peso Chileno ";
    var   monedaNombreSuma = "las Monedas suman ";
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
    //var   monedaOutputSuma;



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
//var url_data = 'http://apilayer.net/api/live?access_key=5c98ee4b518a69099255b6846ce21102&currencies=USD,GBP,EUR,JPY,CNY,RUB,AUD,BOB,CLP&format=1';

// otra api de open exchange rates. 
//https://openexchangerates.org/api/currencies.json // solo los nombres de la smonedas
var url_data = 'https://openexchangerates.org/api/currencies.json';

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
        // ESTOS SON DE apilayer, se acabo por q llego a los mil request. - - - - - - - - - - - - - - -  
        // monedaValor0 = jsonObj.source;
        // monedaValor1 = jsonObj.quotes.USDUSD;  //USD - US Dollar
        // monedaValor2 = jsonObj.quotes.USDGBP;  //GBP - British Pound
        // monedaValor3 = jsonObj.quotes.USDEUR;  //EUR - Euro
        // monedaValor4 = jsonObj.quotes.USDJPY;  //JPY - Yen Japones
        // monedaValor5 = jsonObj.quotes.USDCNY;  //CNY - Yuan Chino
        // monedaValor6 = jsonObj.quotes.USDRUB;  //RUB - Rublo Ruso
        // monedaValor7 = jsonObj.quotes.USDAUD;  //AUD - Australian Dollar
        // monedaValor8 = jsonObj.quotes.USDBOB;  //CPL - Peso Chileno 
        // monedaValor9 = jsonObj.quotes.USDCLP;  //BOB - Bolivar Boliviano 
        //monedaValorSuma= monedaValor0 + monedaValor1 + monedaValor2 + monedaValor3 + monedaValor4 + monedaValor5 + monedaValor6 + monedaValor7 + monedaValor8 + monedaValor9;

        // ESTOS SON DE OPEN EXCHANGE RATES usarlo mientra sllega l otra  - - - - - - - - - - - - - - -  
        monedaValor0 = jsonObj.source;
        monedaValor1 = jsonObj.rates.AED;  //USD - US Dollar
        monedaValor2 = jsonObj.rates.GBP;  //GBP - British Pound
        monedaValor3 = jsonObj.rates.EUR;  //EUR - Euro
        monedaValor4 = jsonObj.rates.JPY;  //JPY - Yen Japones
        monedaValor5 = jsonObj.rates.CNY;  //CNY - Yuan Chino
        monedaValor6 = jsonObj.rates.RUB;  //RUB - Rublo Ruso
        monedaValor7 = jsonObj.rates.AUD;  //AUD - Australian Dollar
        monedaValor8 = jsonObj.rates.BOB;  //CPL - Peso Chileno 
        monedaValor9 = jsonObj.rates.CLP;  //BOB - Bolivar Boliviano 


        // valores para output html
          monedaOutput0    = monedaNombre0 + "monedaValor0";
          monedaOutput1    = monedaNombre1 + "monedaValor1";
          monedaOutput2    = monedaNombre2 + "monedaValor2";
          monedaOutput3    = monedaNombre3 + "monedaValor3";
          monedaOutput4    = monedaNombre4 + "monedaValor4";
          monedaOutput5    = monedaNombre5 + "monedaValor5";
          monedaOutput6    = monedaNombre6 + "monedaValor6";
          monedaOutput7    = monedaNombre7 + "monedaValor7";
          monedaOutput8    = monedaNombre8 + "monedaValor8";
          monedaOutput9    = monedaNombre9 + "monedaValor9";
        //monedaOutputSuma = monedaNombreSuma + "monedaValorSuma";

        // updaters de html
        document.getElementById("moneda0").innerHTML  = "monedaOutput0";
        document.getElementById("moneda1").innerHTML  = "monedaOutput1";
        document.getElementById("moneda2").innerHTML  = "monedaOutput2";
        document.getElementById("moneda3").innerHTML  = "monedaOutput3";
        document.getElementById("moneda4").innerHTML  = "monedaOutput4";
        document.getElementById("moneda5").innerHTML  = "monedaOutput5";
        document.getElementById("moneda6").innerHTML  = "monedaOutput6";
        document.getElementById("moneda7").innerHTML  = "monedaOutput7";
        document.getElementById("moneda8").innerHTML  = "monedaOutput8";
        document.getElementById("moneda9").innerHTML  = "monedaOutput9";
        document.getElementById("monedaSuma").innerHTML   = "monedaOutputSuma";
      }// cierre if
  }// cierre FUNCTION
   // - - - - - - - - - - - - - - - - - - - - - - - 
  http_request.open("GET", url_data, true);
  http_request.send();
} // cierre function cargaJSON() - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// NOMBRES Y PALABRAS
//window.onload=function(){  
//var nombreALista = ["Arafat", "Jamal", "Ayman", "Abdullah", "Mohammad", "Anas", "Samira", "Abdul-Fattah", "Rahaf", "Mohammad"];  
var nombreALista = ["3341"];  


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//PALABRAS 1 al 9

var categoria1 =  [  
                          ["Bóveda", "Coyuntura", "Cámara", "Nervadura"], 
                          ["craneal", "encefálica", "medular", "ocular"], 
                          ["inertes", "exánimes", "exangües", "comatosas"], 
                          ["objetamente", "ascépticamente", "impecablemente", "sirúrgicamente"], 
                          ["descosidas", "hilvanadas", "suturadas", "rezurcidas"], 
                          ["vivisección", "áscara", "morbilidad", "sección"], 
                          ["escalpelo", "cisurado", "hilo", "gabinete"], 
                          ["afásica", "disfásica", "disfémica", "disfónica"], 
                          ["necronomías", "tanatonomías", "logopedas", "tanatologos"]
                          ];
 
var categoria2 =  [  
                          ["Arteria", "Membrana", "Tejido", "Epitelio"], 
                          ["sublingual", "lacrimal", "muscular", "interior"], 
                          ["enervaciones", "norgánicas", "endrogámicas", "negantrópicas"], 
                          ["purulacines", "expectoraciones", "secreciones", "siquiatrices"], 
                          ["transandinas", "nueguinas", "transplantinas", "andígenas"], 
                          ["viración", "inseminación", "nidación", "ramificación"], 
                          ["racimo", "omnicida", "tanátomo", "óvalo"], 
                          ["crepuscular", "eclíptica", "trifásica", "bifásica"], 
                          ["borradores", "hablaciones", "fosales", "sacramentales"]
                          ];

var categoria3 =  [ 
                          ["Boca", "Corteza", "Cuenca", "Fosa"], 
                          ["nasal", "uterina", "himenal", "trompal"], 
                          ["mustias", "yermas", "yertas", "baldías"], 
                          ["por", "por", "por", "por"], 
                          ["oclusión", "oclusa", "disforme", "biforme"], 
                          ["tala", "hablación", "retracción", "sutura"], 
                          ["ablador", "lagar", "llagar", "lagar"],
                          ["norgánica", "negantrópica", "endrogámica", "necronómica"], 
                          ["naturalezas muertas", "sobrenaturalezas", "limbos", "purgatorios"]
                          ];

var categoria4 =  [ 
                          ["Mariposa", "Nínfulo", "Lucífera", "Crisálido"], 
                          ["cobarde", "evitable", "salival", "soslyable"], 
                          ["temeraria", "eutanasia", "quebrada", "distanasia"], 
                          ["fatalmente", "disfásicamente", "ascépticamente", "objetamente"], 
                          ["ciega", "asistida", "socorrida", "auxiliada"], 
                          ["llama", "dilación", "contracción", "áscara"], 
                          ["Fénix", "transplantense" , "andígena", "nueguino"], 
                          ["obstinada", "obsecada", "elíptica", "eclíptica"], 
                          ["alas", "ánforas", "urnas", "tálamos"]
                          ];
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 





// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//PALABRAS CLAVE PARA BUSCAR EN EL DIARIO
var palabrasClave = ["activists", "administration", "adversarial", "adversary", "aggression", "aid", "alliance", "ambassador", "ambush", "ambushed", "analysts", "annihilation", "antitank", "arm", "armored", "arms", "arsenal", "artillery", "assassinate", "assassination", "assault", "atomic", "attack", "attacks", "bank", "banking", "barrel", "barrels", "battle", "billion", "billions", "blockade", "blood", "boat", "bodies", "bomb", "bombardments", "bombed", "bombers", "bombings", "bombs", "bought", "brigade", "broken", "brutal", "brutality", "brutally", "bunker", "bunkers", "buried", "bussines", "buy", "campaign", "campaigns", "camps", "capital", "capitalization", "capitals", "captured", "casualties", "cause", "cease-fire", "cease", "cents", "chevron", "civil", "civilian", "civilians", "cleared", "climbed", "coffin", "combat", "combats", "command", "commander", "commerce", "companies", "company's", "company", "conflict", "consum", "consumers", "consumption", "controls", "corp.", "cost", "costs", "council", "crimes", "crisis", "criticism", "crossfire", "crude", "cuba's", "cuba", "cuban", "cubic", "damage", "dead", "deal", "deals", "death", "demand", "demanding", "deported", "destroyed", "destroying", "destruction", "detainees", "deter", "detonated", "died", "disagreement", "disagreements", "disarmament", "disarmed", "disarmed", "disproportionate", "division", "divisions", "dollar", "dollars", "dow", "economy", "emergency", "energy", "entertainment", "escalate", "escalates", "escalation", "euro", "euros", "evacuated", "exchange", "executed", "executing", "exile", "exiled", "exodus", "exploited", "explosives", "extracting", "exxon", "feet", "fields", "fierce", "fight", "fighters", "fighting", "fire", "fired", "force", "forces", "fought", "fuel", "fundamentalist", "fundamentalistic", "fundamentalists", "funding", "funds", "gain", "gallon", "gas", "gasoline", "geopolitical", "global", "grenades", "guerrilla", "guerrillas", "gunmen", "gunned", "habana", "habanna", "havanna", "headquarter", "headquarters", "health", "helicopter", "helicopters", "hidden", "hit", "hitting", "hostilities", "hunt", "hunting", "hunts", "inciting", "increase", "industry", "infantry", "inflation", "injured", "insurgent", "intervene", "intervention", "interventions", "invaded", "invasion", "investment", "investors", "jet", "jets", "kidnapped", "kidnapping", "kidnappings", "kill", "killed", "killing", "kills", "launched", "launcher", "launches", "market", "martyr", "martyrs", "medical", "miami", "militant", "militants", "military", "militia", "militias", "million", "millions", "mines", "ministry", "missiles", "mission", "mob", "mobil's", "mobile", "money", "mortar", "munition", "nasdaq", "negotiate", "negotiated", "negotiation", "network", "networks", "nuclear", "occupyng", "offensive", "oil-rich", "oil's", "oil", "oilfield", "opec", "operating", "operation", "operations", "opponents", "organization", "paratroopers", "patrol", "pay", "payment", "petroleum", "pipeline", "pipelines", "points", "power", "precision", "pressure", "price", "prices", "prision", "prisioner", "producer", "product", "production", "profit", "profitabel", "profitability", "profits", "provoking", "pump", "punishing", "rage", "rages", "raid", "raids", "rais", "raises", "refineries", "refining", "refugee", "refugees", "refused", "reject", "rejects", "religious", "remotely", "reprisal", "reprisals", "research", "reserves", "resistance", "resources", "retaliation", "reuters", "revolution", "revolutionary", "rights", "riot", "rising", "rockets", "rose", "sale", "security", "service", "services", "shelled", "shelling", "shells", "shells", "shelter", "shooting", "state", "storms", "stormy", "strategic", "strategy", "strategy", "strikes", "striking", "struck", "suicide-bombings", "suicide", "surgery", "suspected", "tactic", "tactics", "tanks", "tanks", "target", "targeted", "targets", "tax", "taxes", "tension", "tensions", "territories", "territory", "terrorism", "trade", "traders", "trades", "trading", "training-camps", "treasury", "troops", "tunnel", "tunneled", "u.n", "unwilling", "violated", "violation", "violations", "violence", "violent", "war", "warplanes", "wars", "weapons", "weapons", "wounded", "wounding", "yen"];
function traeResultadosBuscador(){

}


/*
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//PALABRAS 1 al 9

var categoria1 =  [  
                          ["c1_p1_1_bóveda", "c1_p1_2_coyuntura", "c1_p1_3_cámara", "c1_p1_4_nervadura"], 
                          ["c1_p2_1_craneal", "c1_p2_2_encefálica", "c1_p2_3_medular", "c1_p2_4_ocular"], 
                          ["c1_p3_1_inerte", "c1_p3_2_exánime", "c1_p3_3_exangüe",  "c1_p3_4_comatoso"], 
                          ["c1_p4_1_objetamente", "c1_p4_2_ascépticamente", "c1_p4_3_impecablemente", "c1_p4_4_sirúrgicamente"], 
                          ["c1_p5_1_descosida", "c1_p5_2_hilvanada", "c1_p5_3_suturada", "c1_p5_4_zurcida"], 
                          ["c1_p6_1_vivisección", "c1_p6_2_áscara", "c1_p6_3_morbilidad", "c1_p6_4_sección"], 
                          ["c1_p7_1_escalpelo", "c1_p7_2_cisurado", "c1_p7_3_hilo", "c1_p7_4_gabinete"], 
                          ["c1_p8_1_afásica", "c1_p8_2_disfásica", "c1_p8_3_disfémica", "c1_p8_4_disfónica"], 
                          ["c1_p9_1_necronomías", "c1_p9_2_tanatonomías", "c1_p9_3_logopedas", "c1_p9_4_tanatologos"]
                          ];
 
var categoria2 =  [  
                          ["c2_p1_1_llagar", "c2_p1_2_membrana", "c2_p1_3_tejido", "c2_p1_4_epitelio"], 
                          ["c2_p2_1_sublingual", "c2_p2_2_lacrimal", "c2_p2_3_muscular", "c2_p2_4_intestinal"], 
                          ["c2_p3_1_inficcionada", "c2_p3_2_norgánica", "c2_p3_3_endrogámica", "c2_p3_4_negantrópica"], 
                          ["c2_p4_1_supuración", "c2_p4_2_expectoración", "c2_p4_3_secreción", "c2_p4_4_psiquiatríz"], 
                          ["c2_p5_1_transandina", "c2_p5_2_nueguina", "c2_p5_3_transplantina", "c2_p5_4_andígena"], 
                          ["c2_p6_1_viración", "c2_p6_2_inseminación", "c2_p6_3_nidación", "c2_p6_4_ramificación"], 
                          ["c2_p7_1_racimo", "c2_p7_2_omnicida", "c2_p7_3_tanátomo", "c2_p7_4_óvalo"], 
                          ["c2_p8_1_crepuscular", " c2_p8_2_ecplíptica", "c2_p8_3_trifásica", "c2_p8_4_bifásica"], 
                          ["c2_p9_1_borradores", "c2_p9_2_tachadores", "c2_p9_3_fosales", "c2_p9_4_sacramentales"]
                          ];

var categoria3 =  [ 
                          ["c3_p1_1_concavidad", "c3_p1_2_caverna", "c3_p1_3_cuenca", "c3_p1_4_fosa"], 
                          ["c3_p2_1_nasal", "c3_p2_2_uterina", "c3_p2_3_himenal", "c3_p2_4_trompal"], 
                          ["c3_p3_1_estéril", "3_p3_2_yerma", "3_p3_3_deseca", "3_p3_4_baldía"], 
                          ["c3_p4_1_por", "c3_p4_2_por", "c3_p4_3_por", "c3_p4_4_por"], 
                          ["c3_p5_1_oclusión", "c3_p5_2_oclusa", "c3_p5_3_disforme", "c3_p5_4_biforme"], 
                          ["c3_p6_1_tala", "c3_p6_2_ablación", "c3_p6_3_retracción", "c3_p6_4_sutura"], 
                          ["c3_p7_1_ablador", "c3_p7_2_lagar" , "c3_p7_3_lagar", "c3_p7_4_lagar"],
                          ["c3_p8_1_norgánica", "c3_p8_2_negantrópica", "c3_p8_3_endrogámica", "c3_p8_4_necronómica"], 
                          ["c3_p9_1_naturalezas muertas", "c3_p9_2_sobrenaturalezas", "c3_p9_3_limbos", "c3_p9_4_purgatorios"]
                          ];

var categoria4 =  [ 
                          ["c4_p1_1_mariposa", "c4_p1_2_nínfulo", "c4_p1_3_lucífera", "c4_p1_4_crisálido"], 
                          ["c4_p2_1_cobarde", "c4_p2_2_evitable", "c4_p2_3_salival", "c4_p2_4_soslyable"], 
                          ["c4_p3_1_temeraria", "c4_p3_2_eutanasia", "c4_p3_3_quebrada", "c4_p3_4_distanasia"], 
                          ["c4_p4_1_fatalmente", "c4_p4_2_disfásicamente", "c4_p4_3_ascépticamente", "c4_p4_4_objetamente"], 
                          ["c4_p5_1_ciega", "c4_p5_2_asistida", "c4_p5_3_socorrida", "c4_p5_4_auxiliada"], 
                          ["c4_p6_1_llama", "c4_p6_2_dilación", "c4_p6_3_contracción", "c4_p6_4_áscara"], 
                          ["c4_p7_1_Fénix", "c4_p7_2_transplantense" , "c4_p7_3_andígena", "c4_p7_4_nueguino"], 
                          ["c4_p8_1_obstinada", "c4_p8_2_obsecada", "c4_p8_3_elíptica", "c4_p8_4_eclíptica"], 
                          ["c4_p8_1_alas", "c4_p8_2_ánforas", "c4_p8_3_urnas", "c4_p8_4_nichos"]
                          ];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
*/

//LISTA DE LINKS
var linkNombreLista = ["http://drones.pitchinteractive.com"]
var linkPalabra1Lista = ["popuptexto.html"]
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 



 


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// SELECCION DE MONEDAS
var categoriaSeleccionada = categoria4; 
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
    categoriaSeleccionada = categoria1;
    output_seleccionado = "> Menor q valorDeCorte1" + " | Categoria 1";
  }

  if (valorVar1 > valorDeCorte1 && valorVar1 <= valorDeCorte2 ) {
    categoriaSeleccionada = categoria2;
    output_seleccionado = ">> Menor q valorDeCorte2" + " | Categoria 2";
  }
  
  if (valorVar1 > valorDeCorte2 && valorVar1 <= valorDeCorte3 ) {
    categoriaSeleccionada = categoria3;
    output_seleccionado = ">>> Menor q valorDeCorte3 " + " | Categoria 3";
  } 

  else if (valorVar1 > valorDeCorte3 && valorVar1 <= valorDeCorte4 ){
    categoriaSeleccionada = categoria4;
    output_seleccionado = " Menor q valorDeCorte4" + " | Categoria 4";
  }
}
//Muestra valores
function muestraMoneda() {
 // document.getElementById("valorMoneda1").innerHTML = valorVar1 + output_seleccionado;  
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 




//toma valores de las palabras para pasarlos al popopup
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
  tmp.write('El segundo es porque el valor de compra de <a href="http://co.apilayer.net/" target="_blank">' +  monedaNombre1 + ' </a><br> en relación a ' + 
    '<a href="http://co.apilayer.net/" target="_blank">' + monedaNombre2 + 
    '</a> es de<a href="http://co.apilayer.net/" target="_blank"> ' + monedaNombre3 + '</a>.'); 

  // cierre divs
  tmp.write('</p></div></div>');

  //jscript para el bg
  tmp.write('<script language="javascript" type="text/javascript" src="popupscript.js"></script>');

  // cierre HTML, importantes!.  
  tmp.write('</body></html>');
  tmp.close();

}




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
  nombreADiv.setAttribute('target', "_blank"); 
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

  //setea atributyo del link de la palabra
  // palabra2Div.setAttribute('href', linkPalabra1Lista[0]);
  // palabra2Div.setAttribute('target', "_blank"); 
  // palabra2Div.setAttribute('class', "tooltip"); 
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
          document.getElementById("moneda0").innerHTML  = "monedaOutput0";

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

  entregaComparacion();
  muestraMoneda(); 
}   

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//UPDATERS // ABAJO PARA Q CAMBIE CUANDO CARGA TODO LOD EMAS
var tiempoRecargaJSON = setInterval(llamaJSON, 1000); //recarga el json 3600000 ms una hora 
var tiempoCambiaTodo = 2000;// para que cambie y regargue el poema en su totalidad. 

var counter = tiempoCambiaTodo/1000; //inicializa contador tiempo reversa de pie de pagina. dividio x mil

function counterGeneracionPoema() {
if (counter == 0) {
  counter = tiempoCambiaTodo/1000;
} counter--;
 document.getElementById("outputTiempo").innerHTML = counter;  
};

//diferente apra cambiar poema y para cambiar tiepo de carga de json
setInterval(counterGeneracionPoema, 999); //llama cada segundo el counter del poema
setInterval(cambiaTodo, tiempoCambiaTodo); //llama el cambio de todo 




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


 

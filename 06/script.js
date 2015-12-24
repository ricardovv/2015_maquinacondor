//EXAMPLES
//LOAD JSON http://jsfiddle.net/markcoleman/mj84C/
window.onload=function(){  
   var divbg=document.getElementById("wrap");  
   var imgarray = new Array("dron1.gif", "dron2.gif", "dron3.gif");  
   var spot =Math.floor(Math.random()* imgarray.length);  
   divbg.style.background="url(_img/"+imgarray[spot]+")";  
   divbg.style.backgroundSize="cover";  
}  


 // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//P5, prueba para cargar html y leer monedas, funciona, pero no carga el html. 
// var htmlraw;
// var htmljoin;
// function preload() {
//   // Load A Midsummer Night's Dream into an array of strings
//   htmlraw = loadStrings("monedas.txt");
// }
// function setup() {
//   htmljoin = join(htmlraw, "\n");
// }
// function draw() {  
// }
 

//window.onload=function(){  
var nombreALista = new Array("Arafat", "Jamal", "Ayman", "Abdullah", "Mohammad", "Anas", "Samira", "Abdul-Fattah", "Rahaf", "Mohammad");  


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//PALABRAS 1 al 9
var palabra1categoria1 = new Array( "c1_1_bóveda", "c1_2_cavidad", "c1_3_cámara", "c1_4_corteza", "c1_5_craneal", "c1_6_encefálica", "c1_7_medular", "c1_8_ocular", "c1_9_inerte", "c1_10_exánime", "c1_11_exangüe",  "c1_12_cosa", "c1_13_objetamente", "c1_14_ascépticamente", "c1_15_impecablemente", "c1_16_sirúrgicamente", "c1_17_descosida", "c1_18_hilvanada", "c1_19_suturada", "c1_20_zurcida", "c1_21_vivisección", "c1_22_disección", "c1_23_bisección", "c1_24_sección", "c1_25_inciso", "c1_26_cisurado" , "c1_27_trepanado", "c1_28_punzado", "c1_29_afásica", "c1_30_disfásica", "c1_31_disfémica", "c1_32_disfónica", "c1_33_necronomías", "c1_34_tanatonomías", "c1_35_logopedas", "c1_36_tanatologos");
var palabra2categoria2 = new Array( "c2_1_llagar", "c2_2_membrana", "c2_3_tejido", "c2_4_epitelio", "c2_5_sublingual", "c2_6_lacrimal", "c2_7_muscular", "c2_8_intestinal", "c2_9_infecta", "c2_10_norgánica", "c2_11_endrogámica",  "c2_12_psiquiatriz", "c2_13_supuración", "c2_14_expectoración", "c2_15_secreción", "c2_16_salivación", "c2_17_sural", "c2_18_lechosa", "c2_19_3", "c2_20_suralizante", "c2_21_viración", "c2_22_seminación", "c2_23_nidación", "c2_24_ramificación", "c2_25_necrónomo", "c2_26_omnicida" , "c2_27_tanátomo", "c2_28_necrotrópico", "c2_29_crepuscular", "c2_30_ecplíptica", "c2_31_trifásica", "c2_32_bifásica", "c2_33_borradores", "c2_34_tachadores", "c2_35_fosales", "c2_36_sacramentales");
var palabra3categoria3 = new Array( "c3_1_concavidad", "c3_2_inervación", "c3_3_cuenca", "c3_4_hendidura", "c3_5_labial", "c3_6_uterina", "c3_7_himenal", "c3_8_trompal", "c3_9_estéril", "c3_10_yerma", "c3_11_yertil",  "c3_12_derramada", "c3_13_por", "c3_14_por", "c3_15_por", "c3_16_por", "c3_17_oclusión", "c3_18_oclusa", "c3_19_disforme", "c3_20_biforme", "c3_21_tala", "c3_22_herpe", "c3_23_propación", "c3_24_microsis", "c3_25_ablador", "c3_26_2" , "c3_27_3", "c3_28_4", "c3_29_norgánica", "c3_30_negantrópica", "c3_31_endrogámica", "c3_32_4", "c3_33_naturalezas muertas", "c3_34_sobrenaturalezas", "c3_35_limbos", "c3_36_purgatorios");
var palabra4categoria4 = new Array( "c4_1_mariposa", "c4_2_nínfulo", "c4_3_lucídera", "c4_4_cristalino", "c4_5_cobarde", "c4_6_evitable", "c4_7_súrica", "c4_8_soslyable", "c4_9_temeraria", "c4_10_eutanasia", "c4_11_quebrada",  "c4_12_distanasia", "c4_13_fatalmente", "c4_14_disfásicamente", "c4_15_ascépticamente", "c4_16_objetamente", "c4_17_ciega", "c4_18_asistida", "c4_19_socorrida", "c4_20_auxiliada", "c4_21_llama", "c4_22_dilación", "c4_23_contracción", "c4_24_tocación", "c4_25_Fénix", "c4_26_transplantense" , "c4_27_andígena", "c4_28_nueguino", "c4_29_obstinada", "c4_30_obsecada", "c4_31_elíptica", "c4_32_elusiva", "c4_33_alas", "c4_34_ánforas", "c4_35_urnas", "c4_36_nichos");
var palabra5categoria5 = new Array( "c5_1_necrologías", "c5_2_tanatologías", "c5_3_logópedas", "c5_4_tanatólogos", "c5_5_cremadores", "c5_6_incineradores", "c5_7_fosales", "c5_8_sacramentales", "c5_9_naturalezas muertas", "c5_10_sobre naturalezas", "c5_11_extirpaciones",  "c5_12_ablaciones", "c5_13_alas", "c5_14_ánforas", "c5_15_urnas", "c5_16_nichos", "c5_17_fosales", "c5_18_sacramentales", "c5_19_ánforas", "c5_20_osarios", "c5_21_naturalezas muertas", "c5_22_sobre naturalezas", "c5_23_logóopedas", "c5_24_tanatólogos", "c5_25_naturalezas muertas", "c5_26_sobre naturalezas" , "c5_27_logópedas", "c5_28_tanatólogos", "c5_29_naturalezas muertas", "c5_30_sobre naturalezas", "c5_31_logópedas", "c5_32_tanatólogos", "c5_33_naturalezas muertas", "c5_34_sobre naturalezas", "c5_35_logópedas", "c5_36_tanatólogos");
var palabra6categoria6 = new Array( "c6_1_necrologías", "c6_2_tanatologías", "c6_3_logópedas", "c6_4_tanatólogos", "c6_5_cremadores", "c6_6_incineradores", "c6_7_fosales", "c6_8_sacramentales", "c6_9_naturalezas muertas", "c6_10_sobre naturalezas", "c6_11_extirpaciones",  "c6_12_ablaciones", "c6_13_alas", "c6_14_ánforas", "c6_15_urnas", "c6_16_nichos", "c6_17_fosales", "c6_18_sacramentales", "c6_19_ánforas", "c6_20_osarios", "c6_21_naturalezas muertas", "c6_22_sobre naturalezas", "c6_23_logóopedas", "c6_24_tanatólogos", "c6_25_naturalezas muertas", "c6_26_sobre naturalezas" , "c6_27_logópedas", "c6_28_tanatólogos", "c6_29_naturalezas muertas", "c6_30_sobre naturalezas", "c6_31_logópedas", "c6_32_tanatólogos", "c6_33_naturalezas muertas", "c6_34_sobre naturalezas", "c6_35_logópedas", "c6_36_tanatólogos");
var palabra7categoria7 = new Array( "c7_1_necrologías", "c7_2_tanatologías", "c7_3_logópedas", "c7_4_tanatólogos", "c7_5_cremadores", "c7_6_incineradores", "c7_7_fosales", "c7_8_sacramentales", "c7_9_naturalezas muertas", "c7_10_sobre naturalezas", "c7_11_extirpaciones",  "c7_12_ablaciones", "c7_13_alas", "c7_14_ánforas", "c7_15_urnas", "c7_16_nichos", "c7_17_fosales", "c7_18_sacramentales", "c7_19_ánforas", "c7_20_osarios", "c7_21_naturalezas muertas", "c7_22_sobre naturalezas", "c7_23_logóopedas", "c7_24_tanatólogos", "c7_25_naturalezas muertas", "c7_26_sobre naturalezas" , "c7_27_logópedas", "c7_28_tanatólogos", "c7_29_naturalezas muertas", "c7_30_sobre naturalezas", "c7_31_logópedas", "c7_32_tanatólogos", "c7_33_naturalezas muertas", "c7_34_sobre naturalezas", "c7_35_logópedas", "c7_36_tanatólogos");
var palabra8categoria8 = new Array( "c8_1_necrologías", "c8_2_tanatologías", "c8_3_logópedas", "c8_4_tanatólogos", "c8_5_cremadores", "c8_6_incineradores", "c8_7_fosales", "c8_8_sacramentales", "c8_9_naturalezas muertas", "c8_10_sobre naturalezas", "c8_11_extirpaciones",  "c8_12_ablaciones", "c8_13_alas", "c8_14_ánforas", "c8_15_urnas", "c8_16_nichos", "c8_17_fosales", "c8_18_sacramentales", "c8_19_ánforas", "c8_20_osarios", "c8_21_naturalezas muertas", "c8_22_sobre naturalezas", "c8_23_logóopedas", "c8_24_tanatólogos", "c8_25_naturalezas muertas", "c8_26_sobre naturalezas" , "c8_27_logópedas", "c8_28_tanatólogos", "c8_29_naturalezas muertas", "c8_30_sobre naturalezas", "c8_31_logópedas", "c8_32_tanatólogos", "c8_33_naturalezas muertas", "c8_34_sobre naturalezas", "c8_35_logópedas", "c8_36_tanatólogos");
var palabra9categoria9 = new Array( "c9_1_necrologías", "c9_2_tanatologías", "c9_3_logópedas", "c9_4_tanatólogos", "c9_5_cremadores", "c9_6_incineradores", "c9_7_fosales", "c9_8_sacramentales", "c9_9_naturalezas muertas", "c9_10_sobre naturalezas", "c9_11_extirpaciones",  "c9_12_ablaciones", "c9_13_alas", "c9_14_ánforas", "c9_15_urnas", "c9_16_nichos", "c9_17_fosales", "c9_18_sacramentales", "c9_19_ánforas", "c9_20_osarios", "c9_21_naturalezas muertas", "c9_22_sobre naturalezas", "c9_23_logóopedas", "c9_24_tanatólogos", "c9_25_naturalezas muertas", "c9_26_sobre naturalezas" , "c9_27_logópedas", "c9_28_tanatólogos", "c9_29_naturalezas muertas", "c9_30_sobre naturalezas", "c9_31_logópedas", "c9_32_tanatólogos", "c9_33_naturalezas muertas", "c9_34_sobre naturalezas", "c9_35_logópedas", "c9_36_tanatólogos"); 
//LISTA DE LINKS
var linkNombreLista = ["popuptexto.html"]
var linkPalabra1Lista = ["popuptexto.html"]
//ver que es esto
var cartegory1; 


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//NOMBRES
function cambiaNombreA() {
    //Codigo para pruebas rapidas
  var nombreASelector = Math.floor(Math.random() * nombreALista.length);  
  var nombreADiv      = document.getElementById("nombreADiv");  
  var marcador        = "array " + nombreASelector + ": ";
  nombreADiv.innerHTML =  marcador + nombreALista[nombreASelector];  

  //set atributos del link de la palabra o nombre
  nombreADiv.setAttribute('href', linkNombreLista[nombreASelector]);
  nombreADiv.setAttribute('target', "_blank"); 
  nombreADiv.setAttribute('class', "tooltip"); 

  //Tooltip Inner Elements
  //var innerTooltipData = "<span>" + "valor XX" + "</span>";
  //var innerNombre      =  nombreALista[nombreASelector];
  //nombreADiv.innerHTML = innerTooltipData + innerNombre;  
  //coloca onmouseover mouseout, no los uso por ahora
  //nombreADiv.setAttribute('onmouseover', "bigImg(this)"); 
  //nombreADiv.setAttribute('onmouseout', "normalImg(this)"); 
  //onmouseout="normalImg(this)"
}


//PALABRA 1
function cambiaPalabra1() {
  //Codigo para pruebas rapidas
  //var palabra1Selector  = Math.floor(Math.random()* palabra1categoria1.length);  
  var palabra1Selector  = 5 + Math.floor(Math.random()* 4);  
  var palabra1Div       = document.getElementById("palabra1Div");  
  var marcador        = "array " + palabra1Selector + ": ";
  palabra1Div.innerHTML = marcador + palabra1categoria1[palabra1Selector];  

  //setea atributo del link de la palabra
  palabra1Div.setAttribute('href', linkPalabra1Lista[0]);
  palabra1Div.setAttribute('target', "_blank"); 
  palabra1Div.setAttribute('class', "tooltip"); 
 
  //Tooltip Inner Elements para index texto
  //var innerTooltipData = "<span>" + "valor XX" + "</span>";
  //var innerPalabra1      =  palabra1categoria1[palabra1Selector];
  //palabra1Div.innerHTML = innerTooltipData + innerPalabra1;  
}

 
//PALABRA 2
function cambiaPalabra2() {
  //Codigo para pruebas rapidas
  //var palabra2Selector = Math.floor(Math.random() * palabra2categoria2.length);  
  var palabra2Selector = 5 + Math.floor(Math.random()* 4);  
  var palabra2Div=document.getElementById("palabra2Div");  
  var marcador        = "array " + palabra2Selector + ": ";
  palabra2Div.innerHTML= marcador + palabra2categoria2[palabra2Selector];  

  //setea atributyo del link de la palabra
  palabra2Div.setAttribute('href', linkPalabra1Lista[0]);
  palabra2Div.setAttribute('target', "_blank"); 
  palabra2Div.setAttribute('class', "tooltip"); 

  //Tooltip Inner Elements
  //var innerTooltipData = "<span>" + "valor XX" + "</span>";
  //var innerPalabra2      =  palabra2categoria2[palabra2Selector];
  //palabra2Div.innerHTML = innerTooltipData + innerPalabra2;  
}

//PALABRA 3
function cambiaPalabra3() {
  //Codigo para pruebas rapidas
  var palabra3Selector =Math.floor(Math.random()* palabra3categoria3.length);  
  var palabra3Div=document.getElementById("palabra3Div");  
  palabra3Div.innerHTML= palabra3categoria3[palabra3Selector];  
  //setea atributyo del link de la palabra
  palabra3Div.setAttribute('href', linkPalabra1Lista[0]);
  palabra3Div.setAttribute('target', "_blank"); 
  palabra3Div.setAttribute('class', "tooltip"); 

  //Tooltip Inner Elements
  //var innerTooltipData = "<span>" + "valor XX" + "</span>";
  //var innerPalabra3      =  palabra3categoria3[palabra3Selector];
  //palabra3Div.innerHTML = innerTooltipData + innerPalabra3;  
}

//PALABRA 4
function cambiaPalabra4() {
    //Codigo para pruebas rapidas
  var palabra4Selector =Math.floor(Math.random()* palabra4categoria4.length);  
  var palabra4Div=document.getElementById("palabra4Div");  
  palabra4Div.innerHTML= palabra4categoria4[palabra4Selector];  
  //setea atributyo del link de la palabra
  palabra4Div.setAttribute('href', linkPalabra1Lista[0]);
  palabra4Div.setAttribute('target', "_blank"); 
  palabra4Div.setAttribute('class', "tooltip"); 
  
  //Tooltip Inner Elements
  //var innerTooltipData = "<span>" + "valor cccXX" + "</span>";
  //var innerPalabra4    =  palabra4categoria4[palabra4Selector];
  //palabra4Div.innerHTML = innerTooltipData + innerPalabra4;  
}

//PALABRA 5
function cambiaPalabra5() {
    //Codigo para pruebas rapidas
  var palabra5Selector =Math.floor(Math.random() * palabra5categoria5.length);  
  var palabra5Div=document.getElementById("palabra5Div");  
  palabra5Div.innerHTML= palabra5categoria5[palabra5Selector];  
  //setea atributyo del link de la palabra
  palabra5Div.setAttribute('href', linkPalabra1Lista[0]);
  palabra5Div.setAttribute('target', "_blank"); 
  palabra5Div.setAttribute('class', "tooltip"); 

  //Tooltip Inner Elements
  //var innerTooltipData = "<span>" + "valor XX" + "</span>";
  //var innerPalabra5    =  palabra5categoria5[palabra5Selector];
  //palabra5Div.innerHTML = innerTooltipData + innerPalabra5;  
}

//PALABRA 6
function cambiaPalabra6() {
    //Codigo para pruebas rapidas
  var palabra6Selector =Math.floor(Math.random() * palabra6categoria6.length);  
  var palabra6Div=document.getElementById("palabra6Div");  
  palabra6Div.innerHTML= palabra6categoria6[palabra6Selector];  
  //setea atributyo del link de la palabra
  palabra6Div.setAttribute('href', linkPalabra1Lista[0]);
  palabra6Div.setAttribute('target', "_blank"); 
  palabra6Div.setAttribute('class', "tooltip"); 

  //Tooltip Inner Elements
  //var innerTooltipData = "<span>" + "valor XX" + "</span>";
  //var innerPalabra6    =  palabra6categoria6[palabra6Selector];
  //palabra6Div.innerHTML = innerTooltipData + innerPalabra6;  
}

//PALABRA 7
function cambiaPalabra7() {
    //Codigo para pruebas rapidas
  var palabra7Selector =Math.floor(Math.random() * palabra7categoria7.length);  
  var palabra7Div=document.getElementById("palabra7Div");  
  palabra7Div.innerHTML= palabra7categoria7[palabra7Selector];  
  //setea atributyo del link de la palabra
  palabra7Div.setAttribute('href', linkPalabra1Lista[0]);
  palabra7Div.setAttribute('target', "_blank"); 
  palabra7Div.setAttribute('class', "tooltip"); 

  //Tooltip Inner Elements
  //var innerTooltipData = "<span>" + "valor XX" + "</span>";
  //var innerPalabra7    =  palabra7categoria7[palabra7Selector];
  //palabra7Div.innerHTML = innerTooltipData + innerPalabra7;  
}

//PALABRA 8
function cambiaPalabra8() {
    //Codigo para pruebas rapidas
  var palabra8Selector =Math.floor(Math.random() * palabra8categoria8.length);  
  var palabra8Div=document.getElementById("palabra8Div");  
  palabra8Div.innerHTML= palabra8categoria8[palabra8Selector];  
  //setea atributyo del link de la palabra
  palabra8Div.setAttribute('href', linkPalabra1Lista[0]);
  palabra8Div.setAttribute('target', "_blank"); 
  palabra8Div.setAttribute('class', "tooltip"); 

  //Tooltip Inner Elements
  //var innerTooltipData = "<span>" + "valor XX" + "</span>";
  //var innerPalabra8    =  palabra8categoria8[palabra8Selector];
  //palabra8Div.innerHTML = innerTooltipData + innerPalabra8;  
}

//PALABRA 9
function cambiaPalabra9() {
    //Codigo para pruebas rapidas
  var palabra9Selector =Math.floor(Math.random() * palabra9categoria9.length);  
  var palabra9Div=document.getElementById("palabra9Div");  
  //cartegory1 = cartegory1Json.c1b;
  //palabra9Div.innerHTML= cartegory1;  
  palabra9Div.innerHTML = palabra9categoria9[palabra9Selector];  
  //setea atributyo del link de la palabra
  palabra9Div.setAttribute('href', linkPalabra1Lista[0]);
  palabra9Div.setAttribute('target', "_blank"); 
  palabra9Div.setAttribute('class', "tooltip"); 

  //Tooltip Inner Elements
  //var innerTooltipData = "<span>" + "valor XX" + "</span>";
  //var innerPalabra9    =  palabra9categoria9[palabra9Selector];
  //palabra9Div.innerHTML = innerTooltipData + innerPalabra9;  
}



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//MUESTRA Tooltip, ver guia (http://jsfiddle.net/xaAN3/) no los uso por ahora
function bigImg(x) {
    x.style.color = "yellow";
   // document.getElementById("nombreADiv").innerHTML = "bla bla bla";  
    //var newDiv = document.createElement("span");
    // var t = document.createTextNode("Nuevo bloque");
    // newDiv.appendChild(t);
    //document.getElementById("palabra1Div").appendChild(newDiv);

    //document.getElementById("nombreADiv").innerHTML = '<span class="title">' + 'dentrospan' + '</span>';

    // var para = document.createElement("span");
    // var t = document.createTextNode("This is a paragraph.");
    // para.appendChild(t);
    // document.getElementById("title").appendChild(para);

//    document.getElementById("title").innerHTML = '<span class="title">' + 'dentrospan' + '</span>';

}
//no los uso por ahora
function normalImg(x) { 
    x.style.color = "green";
 //  document.getElementById("tooltip").innerHTML = "";

//    var newDiv.removeChild(newDiv.childNodes);
}




// MONEDAS, llee isntaforex y pasa los datos
 var textoweb = "este es el texto donde encontrare la moneda, puede ser dolar 610, o euro 750 para cocompararlos";

//funcion por revisar para determinar valor a usar edesde el string. 
function valorEntreMedio(_texto, _inicio, _termino) {
  var parte = "";
  var parteTexto = _texto.indexOf(_inicio);
  
  if (parteTexto == -1) { return ""};
  parteTexto += _inicio.length;

  var terminaTexto = _texto.indexOf(_termino, parteTexto);
  if (terminaTexto == -1) { return ""};

  return _texto.substring(parteTexto, terminaTexto);
}

function tomaMoneda1() {
  var palabraClave = "dolar";
  var palabraClaveLargo =  palabraClave.length;
  var antes    = textoweb.indexOf(palabraClave);
  var despues   = textoweb.indexOf(", o");
  var elvalor1  = textoweb.substring( antes + palabraClaveLargo, despues ); 

  var mostrarWeb = valorEntreMedio(textoweb, antes, despues);
//  document.getElementById("valorMoneda1").innerHTML = parseInt(elvalor1 );
} 



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
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
var seleccionado;
// - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - - 
// TRABAJANDO ACA< VIENDO VALORS DE CORTE PARA ELEGIR CATEGORIAS
// - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - - 
//Muestra valores
function entregaComparacion() {
  valorVar1 = money1(money1Low, money1High);
  if (valorVar1 < valorDeCorte1) {
    seleccionado = "> Menor q valorDeCorte1 " + valorDeCorte1;
  }
  if (valorVar1 >= valorDeCorte1 && valorVar1 < valorDeCorte2 ) {
    seleccionado = ">> Menor q valorDeCorte2 " + valorDeCorte2;
  }
  if (valorVar1 >= valorDeCorte2 && valorVar1 < valorDeCorte3 ) {
    seleccionado = ">>> Menor q valorDeCorte3 " + valorDeCorte3;
  } else {
    seleccionado = ">>>> Menor q valorDeCorte4"+ valorDeCorte4;
  }
}


//Muestra valores
function muestraMoneda() {
  document.getElementById("valorMoneda1").innerHTML = valorVar1 + seleccionado;  
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//CAMBIA TODO
function cambiaTodo(){  
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
  // tomaMoneda1();
 entregaComparacion();
  muestraMoneda(); 
  
 
}  


//UPDATER / ABAJO PARA Q CAMBIE CUANDO CARGA TODO LOD EMAS
var tiempoRecarga = setInterval(cambiaTodo, 1000); //ex myVar1
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 

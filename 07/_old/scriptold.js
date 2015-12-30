//window.onload=function(){  
var nombreALista = new Array("Arafat", "Jamal", "Ayman", "Abdullah", "Mohammad", "Anas", "Samira", "Abdul-Fattah", "Rahaf", "Mohammad");  
var palabra1Lista = new Array("Palabra1_1", "Palabra1_2", "Palabra1_3", "Palabra1_4", "Palabra1_5", "Palabra1_6", "Palabra1_7", "Palabra1_8", "Palabra1_9", "Palabra1_10");  
var palabra2Lista = new Array("Palabra2_1", "Palabra2_2", "Palabra2_3", "Palabra2_4", "Palabra2_5", "Palabra2_6", "Palabra2_7", "Palabra2_8", "Palabra2_9", "Palabra2_10");  
var palabra3Lista = new Array("Palabra3_1", "Palabra3_2", "Palabra3_3", "Palabra3_4", "Palabra3_5", "Palabra3_6", "Palabra3_7", "Palabra3_8", "Palabra3_9", "Palabra3_10");  
var palabra4Lista = new Array("Palabra4_1", "Palabra4_2", "Palabra4_3", "Palabra4_4", "Palabra4_5", "Palabra4_6", "Palabra4_7", "Palabra4_8", "Palabra4_9", "Palabra4_10");  
var palabra5Lista = new Array("Palabra5_1", "Palabra5_2", "Palabra5_3", "Palabra5_4", "Palabra5_5", "Palabra5_6", "Palabra5_7", "Palabra5_8", "Palabra5_9", "Palabra5_10");  
 




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//LLEVAR P5


var palabra1categoria1 = new Array( "c1_1_necrologías", "c1_2_tanatologías", "c1_3_logópedas", "c1_4_tanatólogos", "c1_5_cremadores", "c1_6_incineradores", "c1_7_fosales", "c1_8_sacramentales", "c1_9_naturalezas muertas", "c1_10_sobre naturalezas", "c1_11_extirpaciones",  "c1_12_ablaciones", "c1_13_alas", "c1_14_ánforas", "c1_15_urnas", "c1_16_nichos", "c1_17_fosales", "c1_18_sacramentales", "c1_19_ánforas", "c1_20_osarios", "c1_21_naturalezas muertas", "c1_22_sobre naturalezas", "c1_23_logóopedas", "c1_24_tanatólogos", "c1_25_naturalezas muertas", "c1_26_sobre naturalezas" , "c1_27_logópedas", "c1_28_tanatólogos", "c1_29_naturalezas muertas", "c1_30_sobre naturalezas", "c1_31_logópedas", "c1_32_tanatólogos", "c1_33_naturalezas muertas", "c1_34_sobre naturalezas", "c1_35_logópedas", "c1_36_tanatólogos");
var palabra2categoria2 = new Array( "c2_1_necrologías", "c2_2_tanatologías", "c2_3_logópedas", "c2_4_tanatólogos", "c2_5_cremadores", "c2_6_incineradores", "c2_7_fosales", "c2_8_sacramentales", "c2_9_naturalezas muertas", "c2_10_sobre naturalezas", "c2_11_extirpaciones",  "c2_12_ablaciones", "c2_13_alas", "c2_14_ánforas", "c2_15_urnas", "c2_16_nichos", "c2_17_fosales", "c2_18_sacramentales", "c2_19_ánforas", "c2_20_osarios", "c2_21_naturalezas muertas", "c2_22_sobre naturalezas", "c2_23_logóopedas", "c2_24_tanatólogos", "c2_25_naturalezas muertas", "c2_26_sobre naturalezas" , "c2_27_logópedas", "c2_28_tanatólogos", "c2_29_naturalezas muertas", "c2_30_sobre naturalezas", "c2_31_logópedas", "c2_32_tanatólogos", "c2_33_naturalezas muertas", "c2_34_sobre naturalezas", "c2_35_logópedas", "c2_36_tanatólogos");
var palabra3categoria3 = new Array( "c3_1_necrologías", "c3_2_tanatologías", "c3_3_logópedas", "c3_4_tanatólogos", "c3_5_cremadores", "c3_6_incineradores", "c3_7_fosales", "c3_8_sacramentales", "c3_9_naturalezas muertas", "c3_10_sobre naturalezas", "c3_11_extirpaciones",  "c3_12_ablaciones", "c3_13_alas", "c3_14_ánforas", "c3_15_urnas", "c3_16_nichos", "c3_17_fosales", "c3_18_sacramentales", "c3_19_ánforas", "c3_20_osarios", "c3_21_naturalezas muertas", "c3_22_sobre naturalezas", "c3_23_logóopedas", "c3_24_tanatólogos", "c3_25_naturalezas muertas", "c3_26_sobre naturalezas" , "c3_27_logópedas", "c3_28_tanatólogos", "c3_29_naturalezas muertas", "c3_30_sobre naturalezas", "c3_31_logópedas", "c3_32_tanatólogos", "c3_33_naturalezas muertas", "c3_34_sobre naturalezas", "c3_35_logópedas", "c3_36_tanatólogos");
var palabra4categoria4 = new Array( "c4_1_necrologías", "c4_2_tanatologías", "c4_3_logópedas", "c4_4_tanatólogos", "c4_5_cremadores", "c4_6_incineradores", "c4_7_fosales", "c4_8_sacramentales", "c4_9_naturalezas muertas", "c4_10_sobre naturalezas", "c4_11_extirpaciones",  "c4_12_ablaciones", "c4_13_alas", "c4_14_ánforas", "c4_15_urnas", "c4_16_nichos", "c4_17_fosales", "c4_18_sacramentales", "c4_19_ánforas", "c4_20_osarios", "c4_21_naturalezas muertas", "c4_22_sobre naturalezas", "c4_23_logóopedas", "c4_24_tanatólogos", "c4_25_naturalezas muertas", "c4_26_sobre naturalezas" , "c4_27_logópedas", "c4_28_tanatólogos", "c4_29_naturalezas muertas", "c4_30_sobre naturalezas", "c4_31_logópedas", "c4_32_tanatólogos", "c4_33_naturalezas muertas", "c4_34_sobre naturalezas", "c4_35_logópedas", "c4_36_tanatólogos");
var palabra5categoria5 = new Array( "c5_1_necrologías", "c5_2_tanatologías", "c5_3_logópedas", "c5_4_tanatólogos", "c5_5_cremadores", "c5_6_incineradores", "c5_7_fosales", "c5_8_sacramentales", "c5_9_naturalezas muertas", "c5_10_sobre naturalezas", "c5_11_extirpaciones",  "c5_12_ablaciones", "c5_13_alas", "c5_14_ánforas", "c5_15_urnas", "c5_16_nichos", "c5_17_fosales", "c5_18_sacramentales", "c5_19_ánforas", "c5_20_osarios", "c5_21_naturalezas muertas", "c5_22_sobre naturalezas", "c5_23_logóopedas", "c5_24_tanatólogos", "c5_25_naturalezas muertas", "c5_26_sobre naturalezas" , "c5_27_logópedas", "c5_28_tanatólogos", "c5_29_naturalezas muertas", "c5_30_sobre naturalezas", "c5_31_logópedas", "c5_32_tanatólogos", "c5_33_naturalezas muertas", "c5_34_sobre naturalezas", "c5_35_logópedas", "c5_36_tanatólogos");
var palabra6categoria6 = new Array( "c6_1_necrologías", "c6_2_tanatologías", "c6_3_logópedas", "c6_4_tanatólogos", "c6_5_cremadores", "c6_6_incineradores", "c6_7_fosales", "c6_8_sacramentales", "c6_9_naturalezas muertas", "c6_10_sobre naturalezas", "c6_11_extirpaciones",  "c6_12_ablaciones", "c6_13_alas", "c6_14_ánforas", "c6_15_urnas", "c6_16_nichos", "c6_17_fosales", "c6_18_sacramentales", "c6_19_ánforas", "c6_20_osarios", "c6_21_naturalezas muertas", "c6_22_sobre naturalezas", "c6_23_logóopedas", "c6_24_tanatólogos", "c6_25_naturalezas muertas", "c6_26_sobre naturalezas" , "c6_27_logópedas", "c6_28_tanatólogos", "c6_29_naturalezas muertas", "c6_30_sobre naturalezas", "c6_31_logópedas", "c6_32_tanatólogos", "c6_33_naturalezas muertas", "c6_34_sobre naturalezas", "c6_35_logópedas", "c6_36_tanatólogos");
var palabra7categoria7 = new Array( "c7_1_necrologías", "c7_2_tanatologías", "c7_3_logópedas", "c7_4_tanatólogos", "c7_5_cremadores", "c7_6_incineradores", "c7_7_fosales", "c7_8_sacramentales", "c7_9_naturalezas muertas", "c7_10_sobre naturalezas", "c7_11_extirpaciones",  "c7_12_ablaciones", "c7_13_alas", "c7_14_ánforas", "c7_15_urnas", "c7_16_nichos", "c7_17_fosales", "c7_18_sacramentales", "c7_19_ánforas", "c7_20_osarios", "c7_21_naturalezas muertas", "c7_22_sobre naturalezas", "c7_23_logóopedas", "c7_24_tanatólogos", "c7_25_naturalezas muertas", "c7_26_sobre naturalezas" , "c7_27_logópedas", "c7_28_tanatólogos", "c7_29_naturalezas muertas", "c7_30_sobre naturalezas", "c7_31_logópedas", "c7_32_tanatólogos", "c7_33_naturalezas muertas", "c7_34_sobre naturalezas", "c7_35_logópedas", "c7_36_tanatólogos");
var palabra8categoria8 = new Array( "c8_1_necrologías", "c8_2_tanatologías", "c8_3_logópedas", "c8_4_tanatólogos", "c8_5_cremadores", "c8_6_incineradores", "c8_7_fosales", "c8_8_sacramentales", "c8_9_naturalezas muertas", "c8_10_sobre naturalezas", "c8_11_extirpaciones",  "c8_12_ablaciones", "c8_13_alas", "c8_14_ánforas", "c8_15_urnas", "c8_16_nichos", "c8_17_fosales", "c8_18_sacramentales", "c8_19_ánforas", "c8_20_osarios", "c8_21_naturalezas muertas", "c8_22_sobre naturalezas", "c8_23_logóopedas", "c8_24_tanatólogos", "c8_25_naturalezas muertas", "c8_26_sobre naturalezas" , "c8_27_logópedas", "c8_28_tanatólogos", "c8_29_naturalezas muertas", "c8_30_sobre naturalezas", "c8_31_logópedas", "c8_32_tanatólogos", "c8_33_naturalezas muertas", "c8_34_sobre naturalezas", "c8_35_logópedas", "c8_36_tanatólogos");

var palabra9categoria9 = new Array( "c9_1_necrologías", "c9_2_tanatologías", "c9_3_logópedas", "c9_4_tanatólogos", "c9_5_cremadores", "c9_6_incineradores", "c9_7_fosales", "c9_8_sacramentales", "c9_9_naturalezas muertas", "c9_10_sobre naturalezas", "c9_11_extirpaciones",  "c9_12_ablaciones", "c9_13_alas", "c9_14_ánforas", "c9_15_urnas", "c9_16_nichos", "c9_17_fosales", "c9_18_sacramentales", "c9_19_ánforas", "c9_20_osarios", "c9_21_naturalezas muertas", "c9_22_sobre naturalezas", "c9_23_logóopedas", "c9_24_tanatólogos", "c9_25_naturalezas muertas", "c9_26_sobre naturalezas" , "c9_27_logópedas", "c9_28_tanatólogos", "c9_29_naturalezas muertas", "c9_30_sobre naturalezas", "c9_31_logópedas", "c9_32_tanatólogos", "c9_33_naturalezas muertas", "c9_34_sobre naturalezas", "c9_35_logópedas", "c9_36_tanatólogos");


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 







// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//PRELOAD JSON P5
var cartegory1;
function preload() {
  cartegory1 = loadJSON("cartegory1b.json");
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
}  


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//NOMBRES
function cambiaNombreA() {
  var nombreASelector = Math.floor(Math.random() * nombreALista.length);  
  var nombreADiv      = document.getElementById("nombreADiv");  
  nombreADiv.innerHTML= nombreALista[nombreASelector ];  
}

//PALABRA 1
function cambiaPalabra1() {
  var palabra1Selector =Math.floor(Math.random()* palabra1Lista.length);  
  var palabra1Div=document.getElementById("palabra1Div");  
  palabra1Div.innerHTML= palabra1Lista[palabra1Selector];  
}
 
//PALABRA 2
function cambiaPalabra2() {
  var palabra2Selector =Math.floor(Math.random()* palabra2Lista.length);  
  var palabra2Div=document.getElementById("palabra2Div");  
  palabra2Div.innerHTML= palabra2Lista[palabra2Selector];  
}

//PALABRA 3
function cambiaPalabra3() {
  var palabra3Selector =Math.floor(Math.random()* palabra3Lista.length);  
  var palabra3Div=document.getElementById("palabra3Div");  
  palabra3Div.innerHTML= palabra3Lista[palabra3Selector];  
}

//PALABRA 4
function cambiaPalabra4() {
  var palabra4Selector =Math.floor(Math.random()* palabra4Lista.length);  
  var palabra4Div=document.getElementById("palabra4Div");  
  palabra4Div.innerHTML= palabra4Lista[palabra4Selector];  
}

//PALABRA 5
function cambiaPalabra5() {
  var palabra5Selector =Math.floor(Math.random() * palabra5Lista.length);  
  var palabra5Div=document.getElementById("palabra5Div");  
  palabra5Div.innerHTML= palabra5Lista[palabra5Selector];  
}



//PALABRA 9
function cambiaPalabra9() {
  var palabra9Selector =Math.floor(Math.random() * palabra5Lista.length);  
  var palabra9Div=document.getElementById("palabra9Div");  
  palabra9Div.innerHTML= palabra5Lista[palabra9Selector];  
}


 // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//P5
function setup() {

}

 // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//P5
function draw() {
  
}

  var myVar1 = setInterval(cambiaTodo, 1000);
   

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

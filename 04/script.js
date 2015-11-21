//EXAMPLES
//LOAD JSON http://jsfiddle.net/markcoleman/mj84C/


//window.onload=function(){  
var nombreALista = new Array("Arafat", "Jamal", "Ayman", "Abdullah", "Mohammad", "Anas", "Samira", "Abdul-Fattah", "Rahaf", "Mohammad");  
var palabra1Lista = new Array("Pálabra1_1", "Palabra1_2", "Palabra1_3", "Palabra1_4", "Palabra1_5", "Palabra1_6", "Palabra1_7", "Palabra1_8", "Palabra1_9", "Palabra1_10");  
var palabra2Lista = new Array("Palabra2_1", "Palabra2_2", "Palabra2_3", "Palabra2_4", "Palabra2_5", "Palabra2_6", "Palabra2_7", "Palabra2_8", "Palabra2_9", "Palabra2_10");  
var palabra3Lista = new Array("Palabra3_1", "Palabra3_2", "Palabra3_3", "Palabra3_4", "Palabra3_5", "Palabra3_6", "Palabra3_7", "Palabra3_8", "Palabra3_9", "Palabra3_10");  
var palabra4Lista = new Array("Palabra4_1", "Palabra4_2", "Palabra4_3", "Palabra4_4", "Palabra4_5", "Palabra4_6", "Palabra4_7", "Palabra4_8", "Palabra4_9", "Palabra4_10");  
var palabra5Lista = new Array("Palabra5_1", "Palabra5_2", "Palabra5_3", "Palabra5_4", "Palabra5_5", "Palabra5_6", "Palabra5_7", "Palabra5_8", "Palabra5_9", "Palabra5_10");  
 

//PALABRAS 1 al 9
var palabra1categoria1 = new Array( "c9_1_necrologías", "c9_2_tanatologías", "c9_3_logópedas", "c9_4_tanatólogos", "c9_5_cremadores", "c9_6_incineradores", "c9_7_fosales", "c9_8_sacramentales", "c9_9_naturalezas muertas", "c9_10_sobre naturalezas", "c9_11_extirpaciones",  "c9_12_ablaciones", "c9_13_alas", "c9_14_ánforas", "c9_15_urnas", "c9_16_nichos", "c9_17_fosales", "c9_18_sacramentales", "c9_19_ánforas", "c9_20_osarios", "c9_21_naturalezas muertas", "c9_22_sobre naturalezas", "c9_23_logóopedas", "c9_24_tanatólogos", "c9_25_naturalezas muertas", "c9_26_sobre naturalezas" , "c9_27_logópedas", "c9_28_tanatólogos", "c9_29_naturalezas muertas", "c9_30_sobre naturalezas", "c9_31_logópedas", "c9_32_tanatólogos", "c9_33_naturalezas muertas", "c9_34_sobre naturalezas", "c9_35_logópedas", "c9_36_tanatólogos");
var palabra2categoria2 = new Array( "c9_1_necrologías", "c9_2_tanatologías", "c9_3_logópedas", "c9_4_tanatólogos", "c9_5_cremadores", "c9_6_incineradores", "c9_7_fosales", "c9_8_sacramentales", "c9_9_naturalezas muertas", "c9_10_sobre naturalezas", "c9_11_extirpaciones",  "c9_12_ablaciones", "c9_13_alas", "c9_14_ánforas", "c9_15_urnas", "c9_16_nichos", "c9_17_fosales", "c9_18_sacramentales", "c9_19_ánforas", "c9_20_osarios", "c9_21_naturalezas muertas", "c9_22_sobre naturalezas", "c9_23_logóopedas", "c9_24_tanatólogos", "c9_25_naturalezas muertas", "c9_26_sobre naturalezas" , "c9_27_logópedas", "c9_28_tanatólogos", "c9_29_naturalezas muertas", "c9_30_sobre naturalezas", "c9_31_logópedas", "c9_32_tanatólogos", "c9_33_naturalezas muertas", "c9_34_sobre naturalezas", "c9_35_logópedas", "c9_36_tanatólogos");
var palabra3categoria3 = new Array( "c9_1_necrologías", "c9_2_tanatologías", "c9_3_logópedas", "c9_4_tanatólogos", "c9_5_cremadores", "c9_6_incineradores", "c9_7_fosales", "c9_8_sacramentales", "c9_9_naturalezas muertas", "c9_10_sobre naturalezas", "c9_11_extirpaciones",  "c9_12_ablaciones", "c9_13_alas", "c9_14_ánforas", "c9_15_urnas", "c9_16_nichos", "c9_17_fosales", "c9_18_sacramentales", "c9_19_ánforas", "c9_20_osarios", "c9_21_naturalezas muertas", "c9_22_sobre naturalezas", "c9_23_logóopedas", "c9_24_tanatólogos", "c9_25_naturalezas muertas", "c9_26_sobre naturalezas" , "c9_27_logópedas", "c9_28_tanatólogos", "c9_29_naturalezas muertas", "c9_30_sobre naturalezas", "c9_31_logópedas", "c9_32_tanatólogos", "c9_33_naturalezas muertas", "c9_34_sobre naturalezas", "c9_35_logópedas", "c9_36_tanatólogos");
var palabra4categoria4 = new Array( "c9_1_necrologías", "c9_2_tanatologías", "c9_3_logópedas", "c9_4_tanatólogos", "c9_5_cremadores", "c9_6_incineradores", "c9_7_fosales", "c9_8_sacramentales", "c9_9_naturalezas muertas", "c9_10_sobre naturalezas", "c9_11_extirpaciones",  "c9_12_ablaciones", "c9_13_alas", "c9_14_ánforas", "c9_15_urnas", "c9_16_nichos", "c9_17_fosales", "c9_18_sacramentales", "c9_19_ánforas", "c9_20_osarios", "c9_21_naturalezas muertas", "c9_22_sobre naturalezas", "c9_23_logóopedas", "c9_24_tanatólogos", "c9_25_naturalezas muertas", "c9_26_sobre naturalezas" , "c9_27_logópedas", "c9_28_tanatólogos", "c9_29_naturalezas muertas", "c9_30_sobre naturalezas", "c9_31_logópedas", "c9_32_tanatólogos", "c9_33_naturalezas muertas", "c9_34_sobre naturalezas", "c9_35_logópedas", "c9_36_tanatólogos");
var palabra5categoria5 = new Array( "c9_1_necrologías", "c9_2_tanatologías", "c9_3_logópedas", "c9_4_tanatólogos", "c9_5_cremadores", "c9_6_incineradores", "c9_7_fosales", "c9_8_sacramentales", "c9_9_naturalezas muertas", "c9_10_sobre naturalezas", "c9_11_extirpaciones",  "c9_12_ablaciones", "c9_13_alas", "c9_14_ánforas", "c9_15_urnas", "c9_16_nichos", "c9_17_fosales", "c9_18_sacramentales", "c9_19_ánforas", "c9_20_osarios", "c9_21_naturalezas muertas", "c9_22_sobre naturalezas", "c9_23_logóopedas", "c9_24_tanatólogos", "c9_25_naturalezas muertas", "c9_26_sobre naturalezas" , "c9_27_logópedas", "c9_28_tanatólogos", "c9_29_naturalezas muertas", "c9_30_sobre naturalezas", "c9_31_logópedas", "c9_32_tanatólogos", "c9_33_naturalezas muertas", "c9_34_sobre naturalezas", "c9_35_logópedas", "c9_36_tanatólogos");
var palabra6categoria6 = new Array( "c9_1_necrologías", "c9_2_tanatologías", "c9_3_logópedas", "c9_4_tanatólogos", "c9_5_cremadores", "c9_6_incineradores", "c9_7_fosales", "c9_8_sacramentales", "c9_9_naturalezas muertas", "c9_10_sobre naturalezas", "c9_11_extirpaciones",  "c9_12_ablaciones", "c9_13_alas", "c9_14_ánforas", "c9_15_urnas", "c9_16_nichos", "c9_17_fosales", "c9_18_sacramentales", "c9_19_ánforas", "c9_20_osarios", "c9_21_naturalezas muertas", "c9_22_sobre naturalezas", "c9_23_logóopedas", "c9_24_tanatólogos", "c9_25_naturalezas muertas", "c9_26_sobre naturalezas" , "c9_27_logópedas", "c9_28_tanatólogos", "c9_29_naturalezas muertas", "c9_30_sobre naturalezas", "c9_31_logópedas", "c9_32_tanatólogos", "c9_33_naturalezas muertas", "c9_34_sobre naturalezas", "c9_35_logópedas", "c9_36_tanatólogos");
var palabra7categoria7 = new Array( "c9_1_necrologías", "c9_2_tanatologías", "c9_3_logópedas", "c9_4_tanatólogos", "c9_5_cremadores", "c9_6_incineradores", "c9_7_fosales", "c9_8_sacramentales", "c9_9_naturalezas muertas", "c9_10_sobre naturalezas", "c9_11_extirpaciones",  "c9_12_ablaciones", "c9_13_alas", "c9_14_ánforas", "c9_15_urnas", "c9_16_nichos", "c9_17_fosales", "c9_18_sacramentales", "c9_19_ánforas", "c9_20_osarios", "c9_21_naturalezas muertas", "c9_22_sobre naturalezas", "c9_23_logóopedas", "c9_24_tanatólogos", "c9_25_naturalezas muertas", "c9_26_sobre naturalezas" , "c9_27_logópedas", "c9_28_tanatólogos", "c9_29_naturalezas muertas", "c9_30_sobre naturalezas", "c9_31_logópedas", "c9_32_tanatólogos", "c9_33_naturalezas muertas", "c9_34_sobre naturalezas", "c9_35_logópedas", "c9_36_tanatólogos");
var palabra8categoria8 = new Array( "c9_1_necrologías", "c9_2_tanatologías", "c9_3_logópedas", "c9_4_tanatólogos", "c9_5_cremadores", "c9_6_incineradores", "c9_7_fosales", "c9_8_sacramentales", "c9_9_naturalezas muertas", "c9_10_sobre naturalezas", "c9_11_extirpaciones",  "c9_12_ablaciones", "c9_13_alas", "c9_14_ánforas", "c9_15_urnas", "c9_16_nichos", "c9_17_fosales", "c9_18_sacramentales", "c9_19_ánforas", "c9_20_osarios", "c9_21_naturalezas muertas", "c9_22_sobre naturalezas", "c9_23_logóopedas", "c9_24_tanatólogos", "c9_25_naturalezas muertas", "c9_26_sobre naturalezas" , "c9_27_logópedas", "c9_28_tanatólogos", "c9_29_naturalezas muertas", "c9_30_sobre naturalezas", "c9_31_logópedas", "c9_32_tanatólogos", "c9_33_naturalezas muertas", "c9_34_sobre naturalezas", "c9_35_logópedas", "c9_36_tanatólogos");
 
var palabra9categoria9 = new Array( "c9_1_necrologías", "c9_2_tanatologías", "c9_3_logópedas", "c9_4_tanatólogos", "c9_5_cremadores", "c9_6_incineradores", "c9_7_fosales", "c9_8_sacramentales", "c9_9_naturalezas muertas", "c9_10_sobre naturalezas", "c9_11_extirpaciones",  "c9_12_ablaciones", "c9_13_alas", "c9_14_ánforas", "c9_15_urnas", "c9_16_nichos", "c9_17_fosales", "c9_18_sacramentales", "c9_19_ánforas", "c9_20_osarios", "c9_21_naturalezas muertas", "c9_22_sobre naturalezas", "c9_23_logóopedas", "c9_24_tanatólogos", "c9_25_naturalezas muertas", "c9_26_sobre naturalezas" , "c9_27_logópedas", "c9_28_tanatólogos", "c9_29_naturalezas muertas", "c9_30_sobre naturalezas", "c9_31_logópedas", "c9_32_tanatólogos", "c9_33_naturalezas muertas", "c9_34_sobre naturalezas", "c9_35_logópedas", "c9_36_tanatólogos");


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//PRELOAD JSON P5
var cartegory1;
 
// var cartegory1Json = {
//   "c1a": "1a-bóveda",
//   "c1b": "1b-cavidad",
//   "c1c": "1c-cámara",
//   "c1d": "1d-corteza"
// }



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//NOMBRES
function cambiaNombreA() {
  var nombreASelector = Math.floor(Math.random() * nombreALista.length);  
  var nombreADiv      = document.getElementById("nombreADiv");  
  nombreADiv.innerHTML= nombreALista[nombreASelector];  
}

//PALABRA 1
function cambiaPalabra1() {
  var palabra1Selector =Math.floor(Math.random()* palabra1categoria1.length);  
  var palabra1Div=document.getElementById("palabra1Div");  
  palabra1Div.innerHTML= palabra1categoria1[palabra1Selector];  
}
 
//PALABRA 2
function cambiaPalabra2() {
  var palabra2Selector =Math.floor(Math.random()* palabra2categoria2.length);  
  var palabra2Div=document.getElementById("palabra2Div");  
  palabra2Div.innerHTML= palabra2categoria2[palabra2Selector];  
}

//PALABRA 3
function cambiaPalabra3() {
  var palabra3Selector =Math.floor(Math.random()* palabra3categoria3.length);  
  var palabra3Div=document.getElementById("palabra3Div");  
  palabra3Div.innerHTML= palabra3categoria3[palabra3Selector];  
}

//PALABRA 4
function cambiaPalabra4() {
  var palabra4Selector =Math.floor(Math.random()* palabra4categoria4.length);  
  var palabra4Div=document.getElementById("palabra4Div");  
  palabra4Div.innerHTML= palabra4categoria4[palabra4Selector];  
}

//PALABRA 5
function cambiaPalabra5() {
  var palabra5Selector =Math.floor(Math.random() * palabra5categoria5.length);  
  var palabra5Div=document.getElementById("palabra5Div");  
  palabra5Div.innerHTML= palabra5categoria5[palabra5Selector];  
}

//PALABRA 6
function cambiaPalabra6() {
  var palabra6Selector =Math.floor(Math.random() * palabra6categoria6.length);  
  var palabra6Div=document.getElementById("palabra6Div");  
  palabra6Div.innerHTML= palabra6categoria6[palabra6Selector];  
}

//PALABRA 7
function cambiaPalabra7() {
  var palabra7Selector =Math.floor(Math.random() * palabra7categoria7.length);  
  var palabra7Div=document.getElementById("palabra7Div");  
  palabra7Div.innerHTML= palabra7categoria7[palabra7Selector];  
}

//PALABRA 8
function cambiaPalabra8() {
  var palabra8Selector =Math.floor(Math.random() * palabra8categoria8.length);  
  var palabra8Div=document.getElementById("palabra8Div");  
  palabra8Div.innerHTML= palabra8categoria8[palabra8Selector];  
}

//PALABRA 9
function cambiaPalabra9() {
  var palabra9Selector =Math.floor(Math.random() * palabra9categoria9.length);  
  var palabra9Div=document.getElementById("palabra9Div");  
    //cartegory1 = cartegory1Json.c1b;
    //palabra9Div.innerHTML= cartegory1;  
    palabra9Div.innerHTML = palabra9categoria9[palabra9Selector];  
  
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

}  



 // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//P5
function setup() {

}

 // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//P5
function draw() {
  
}

//UPDATER / ABAJO PARA Q CAMBIE CUANDO CARGA TODO LOD EMAS
var myVar1 = setInterval(cambiaTodo, 500);
   

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

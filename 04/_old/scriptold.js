//window.onload=function(){  
var nombreALista = new Array("Arafat", "Jamal", "Ayman", "Abdullah", "Mohammad", "Anas", "Samira", "Abdul-Fattah", "Rahaf", "Mohammad");  
var palabra1Lista = new Array("Palabra1_1", "Palabra1_2", "Palabra1_3", "Palabra1_4", "Palabra1_5", "Palabra1_6", "Palabra1_7", "Palabra1_8", "Palabra1_9", "Palabra1_10");  
var palabra2Lista = new Array("Palabra2_1", "Palabra2_2", "Palabra2_3", "Palabra2_4", "Palabra2_5", "Palabra2_6", "Palabra2_7", "Palabra2_8", "Palabra2_9", "Palabra2_10");  
var palabra3Lista = new Array("Palabra3_1", "Palabra3_2", "Palabra3_3", "Palabra3_4", "Palabra3_5", "Palabra3_6", "Palabra3_7", "Palabra3_8", "Palabra3_9", "Palabra3_10");  
var palabra4Lista = new Array("Palabra4_1", "Palabra4_2", "Palabra4_3", "Palabra4_4", "Palabra4_5", "Palabra4_6", "Palabra4_7", "Palabra4_8", "Palabra4_9", "Palabra4_10");  
var palabra5Lista = new Array("Palabra5_1", "Palabra5_2", "Palabra5_3", "Palabra5_4", "Palabra5_5", "Palabra5_6", "Palabra5_7", "Palabra5_8", "Palabra5_9", "Palabra5_10");  
 

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

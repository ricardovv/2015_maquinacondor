window.onload   = function(){  
   var divbg    = document.getElementById("textopopup");  
   //background de china fulscreen dura x segundos
   divbg.style.background=  "url(_img/imgbg03.gif)";        
   divbg.style.backgroundSize="cover";  
   setTimeout(cargaBGChinas, 8500); //llama cada segundo el cointer del poema
}  

function cargaBGChinas() {
	var parrafo    =	document.getElementById("parrafo");  
	parrafo.style.display = "block";  

	// BG
	var imgarray = new Array("imgchina01.jpg","imgchina02.jpg");  
	var spot     = Math.floor(Math.random()* imgarray.length);  

	var divbg    =	document.getElementById("textopopup");  
	divbg.style.background=  "url(_img/" + imgarray[spot] + ")";        
	divbg.style.backgroundSize="cover";  
//aparece texto p
}
    
//Elige imagen para fondo
//segun la imagen coloca texto arriba o abajo
window.onload		= function(){  
	var divbg    	= document.getElementById("textopopup");  
	var imgarray	= new Array("imgchina01.jpg","imgchina02.jpg");  
	var imgElegida    	= Math.floor(Math.random()* imgarray.length);  
    divbg.style.background=  "url(_img/" + imgarray[imgElegida] + ")";        

    if (imgElegida == 0) {
		document.getElementById("texto").style.top = "5px";
	}else if (imgElegida == 1) {
		document.getElementById("texto").style.top = "550px";
	}
	
}  

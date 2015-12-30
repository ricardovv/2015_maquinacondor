    window.onload   = function(){  
       var divbg    = document.getElementById("textopopup");  
       var imgarray = new Array("dron2.gif", "dron2.gif", "dron3.gif");  
       var spot     = Math.floor(Math.random()* imgarray.length);  
       divbg.style.background=  "url(_img/" + imgarray[spot] + ")";        
     }  

    
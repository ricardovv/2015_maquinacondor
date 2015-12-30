    window.onload   = function(){  
       var divbg    = document.getElementById("textopopup");  
       var imgarray = new Array("dron1.gif", "dron2.gif");  
       var spot     = Math.floor(Math.random()* imgarray.length);  
       divbg.style.background=  "url(_img/" + imgarray[spot] + ")";        
     }  

    
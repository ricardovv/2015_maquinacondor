    window.onload   = function(){  
       var divbg    = document.getElementById("textopopup");  
       var imgarray = new Array("imgbg03.gif");  
       var spot     = Math.floor(Math.random()* imgarray.length);  
       divbg.style.background=  "url(_img/" + imgarray[spot] + ")";        
     }  

    
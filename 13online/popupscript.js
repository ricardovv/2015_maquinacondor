    window.onload   = function(){  
       var divbg    = document.getElementById("textopopup");  
       var imgarray = new Array("imgchina01.jpg","imgchina02.jpg");  
       var spot     = Math.floor(Math.random()* imgarray.length);  
       divbg.style.background=  "url(_img/" + imgarray[spot] + ")";        
     }  

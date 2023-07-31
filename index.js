var colorArray = ["pink", "red", "burlywood", "green", "aqua", "cadetblue", "yellow", "gray", "blueviolet","cornflowerblue","coral","darkcyne","crimson","darkred"];
var i = 0;


function changeColor(){
   document.body.style.background = colorArray[i];
   i++;
   if( i >= colorArray.length) {
       i = 0;
       

   }
   
}

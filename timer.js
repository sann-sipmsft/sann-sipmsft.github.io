window.onload = function()
{
  var input = prompt("How many minutes would you like to focus for? ")
   var hou = parseInt(input) - 1;
   var sec = 59;
   setInterval(function(){

   document.getElementById("timer").innerHTML =
   (hou).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) +" : " +
   (sec).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + " minutes" ;
   sec--;
   if (hou == 00 && sec == 00)
   {
     location.reload();
   }
   if (sec == -1)
   {
     hou--;
     sec = 59;
   }
  },1000);
}

window.onload = function()
{
  var input = prompt("How many minutes would you like to focus for? ")
  var hou = parseInt(input) - 1;
  var sec = 59;
  setInterval(function()
  {
    if (hou == 00 && sec == 00)
    {
      // minute or minutes,based on the original input
      if (input == "1")
      {
        var min = " minute."
      }
      else
      {
        var min = " minutes."
      }

      //output after timer is done
      document.getElementById("timer").innerHTML = "Congratulations! You have worked for " + input + min + "\nKeep it up! Take a short break and come back for another focus session!"
      document.getElementById("timerformat").innerHTML = "";
    }
    else
    {
      // if statement for declaration of variable for
      if (hou == 0)
      {
        var min_display = " "
      }
      else if (hou == 1)
      {
        var min_display = hou + "minute and "
      }
      else
      {
        var min_display = hou + " minutes and "
      }

      //variable to hold display for seconds
      var sec_display = sec + " seconds"

      // output/ countdown on screen
      document.getElementById("timer").innerHTML = "TRY TO STAY ON TASK FOR";
      document.getElementById("timerformat").innerHTML = min_display + sec_display;
      sec--;

      if (sec == -1)
      {
        hou--;
        sec = 59;
      }
    }
  },1000);
}

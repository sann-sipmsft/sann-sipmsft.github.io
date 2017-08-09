function startTimer()
{
  
  var input = prompt("How many minutes would you like to focus for? ");
  var hou = parseInt(input) - 1;
  var sec = 59;
  var intervaltimer = 1000;

  interval1 = setInterval(function()
  {
    if (parseInt(input) == undefined)
    {
      prompt("Please enter a numeric value.");
      location.reload();
    }
    else if (hou == 00 && sec == 00)
    {
      // minute or minutes,based on the original input
      if (input == "1")
      {
        var min = " minute.";
      }
      else
      {
        var min = " minutes.";
      }

        //output after timer is done
      document.getElementById("timer").innerHTML = "Congratulations! You have worked for " + input + min + " Keep it up!<br>Take a short break and come back for another focus session!<br><br>"
      document.getElementById("timerformat").innerHTML = "GOOD JOB!";
      var elem = document.getElementById('starter');
      elem.parentNode.removeChild(elem)
      clearInterval(interval1);
    }
    else
    {
      if (sec == -1)
      {
        hou--;
        sec = 59;
      }
        // if statement for declaration of variable for
      if (hou == 0)
      {
        var min_display = " ";
      }
      else if (hou == 1)
      {
        var min_display = hou + " minute and ";
      }
      else
      {
        var min_display = hou + " minutes and ";
      }
      //variable to hold display for seconds
      var sec_display = sec + " seconds";

        // output/ countdown on screen
      document.getElementById("timer").innerHTML = "TRY TO STAY ON TASK FOR<br><br>";
      document.getElementById("timerformat").innerHTML = min_display + sec_display;

      document.getElementById("restarter").value = "RESTART";
      sec--;

    }
  },intervaltimer);
}

function pauseTimer()
{
  clearInterval(interval1);
  document.getElementById("timerformat").innerHTML = "TIMER HAS BEEN STOPPED. <br> RESTART THE TIMER WHEN YOU ARE READY.";
}

function restartTimer()
{
  clearInterval(interval1);
  startTimer();
}

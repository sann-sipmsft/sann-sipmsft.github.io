function startTimer()
{
  // reset all IDs for restarters
  document.getElementById("timerformat").style.fontSize = "250%";
  document.getElementById("timerformat").style.top = "50%";
  document.getElementById("timer").style.fontSize = "100%";

  // declare variables for number of minutes and seconds
  var input = document.getElementById('lolz').value;
  var hou = parseInt(input) - 1;
  var decimalchecker = parseInt(input) % 1;
  var sec = 59;
  var intervaltimer = 1000;

  interval1 = setInterval(function()
  {
    if (isNaN(parseInt(input)) == true)
    {
      document.getElementById("alerts").innerHTML = "Please enter a numeric value.";
      clearInterval(interval1);
    }
    else if (hou < 0)
    {
      document.getElementById("alerts").innerHTML = "Please enter a positive integer.";
      clearInterval(interval1);
    }
    else if (parseInt(input) >= 60)
    {
      document.getElementById("alerts").innerHTML ="Studying for too long without taking any breaks will cause your brain to become fatigued. Remember that your brain needs some rest too!";
      clearInterval(interval1);
    }
    else if (hou == 00 && sec == 00)
    {
      // minute or minutes,based on the original input
      if (input == "1")
      {
        var min = " MINUTE.";
      }
      else
      {
        var min = " MINUTES.";
      }

        //output after timer is done
      document.getElementById("timer").innerHTML = "TAKE A SHORT BREAK AND COME BACK FOR ANOTHER SESSION!<br>"
      document.getElementById("timerformat").innerHTML = "GOOD JOB! <br> YOU HAVE WORKED FOR " + input + min + "<br><br>KEEP IT UP!";
      document.getElementById("timer").style.fontSize = "65%";
      document.getElementById("timerformat").style.top = "43%";
      document.getElementById("timerformat").style.fontSize = "200%";
      clearInterval(interval1);
    }
    else
    {
      // changes color of circle as timer nears 00:00
      if (hou < 1)
      {
        document.getElementById("background").style.background = "rgb(156, 255, 176)";
        document.getElementById("timerformat").style.color = "black";
      }
      else if (hou < 2)
      {
        document.getElementById("background").style.background = "rgb(115,255,176)";
        document.getElementById("timerformat").style.color = "black";
      }
      else if (hou < 3)
      {
        document.getElementById("background").style.background = "rgb(181, 255, 213)";
        document.getElementById("timerformat").style.color = "black";
      }
      else if (hou < 5)
      {
        document.getElementById("background").style.background = "rgb(200, 232, 229)";
        document.getElementById("timerformat").style.color = "black";
      }
      else if (hou < 10)
      {
        document.getElementById("background").style.background = "rgb(123, 163, 215)";
        document.getElementById("timerformat").style.color = "black";
      }
      else
      {
        document.getElementById("background").style.background = "rgb(78,101, 178)";
        document.getElementById("timerformat").style.color = "rgb(194,194,214)";
      }

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
        var min_display = hou + " minute";
      }
      else
      {
        var min_display = hou + " minutes";
      }
      //variable to hold display for seconds
      var sec_display = sec + " seconds";

      // output/ countdown on screen
      document.getElementById("timer").innerHTML = "TRY TO STAY ON TASK FOR<br>";
      document.getElementById("timerformat").innerHTML = "<br><br>" + min_display + "<br>" + sec_display;
      sec--;

      if (hou != 0 && sec !=0)
      {
      	document.getElementById("starter").disabled = true;
      }
      else
      {
	document.getElementById("starter").disabled = false;
      }
    }
  },intervaltimer);
}

function pauseTimer()
{
  clearInterval(interval1);
  document.getElementById("timerformat").innerHTML = "TIMER HAS BEEN STOPPED. <br> RESTART THE TIMER WHEN YOU ARE READY.";
  document.getElementById("timerformat").style.fontSize = "150%";
}

function restartTimer()
{
  clearInterval(interval1);
  location.reload();
}

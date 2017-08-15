function startTimer(minutes)
{
  // reset all IDs for restarters
  document.getElementById("timerformat").style.fontSize = "250%";
  document.getElementById("timerformat").style.top = "50%";
  document.getElementById("timer").style.fontSize = "100%";

  // declare variables for number of minutes and seconds
  var input = minutes
  var hou = parseInt(minutes) - 1;
  var decimalchecker = parseInt(minutes) % 1;
  var sec = 59;
  var intervaltimer = 1000;
  var applause = new Audio("applause.mp3");

  interval1 = setInterval(function()
  {
    if (isNaN(parseInt(minutes)) == true)
    {
      document.getElementById("alerts").innerHTML = "PLEASE ENTER A NUMERIC VALUE.";
      clearInterval(interval1);
    }
    else if (hou < 0)
    {
      document.getElementById("alerts").innerHTML = "PLEASE ENTER A POSITIVE INTEGER.";
      clearInterval(interval1);
    }
    else if (parseInt(minutes) >= 60)
    {
      document.getElementById("alerts").innerHTML ="STUDYING FOR TOO LONG WITHOUT TAKING ANY BREAKS WILL CAUSE YOU BRAIN TO BECOME FATIGUED. REMEMBER THAT YOUR BRAIN NEEDS SOME REST TOO!";
      clearInterval(interval1);
    }
    else if (hou == 00 && sec == 00)
    {
      // minute or minutes,based on the original input
      if (minutes == "1")
      {
        var min = " MINUTE.";
      }
      else
      {
        var min = " MINUTES.";
      }

        //output after timer is done
      document.getElementById("timer").innerHTML = "TAKE A SHORT BREAK AND COME BACK FOR ANOTHER SESSION!<br>"
      document.getElementById("timerformat").innerHTML = "GOOD JOB! <br> YOU HAVE WORKED FOR " + minutes + min + "<br><br>KEEP IT UP!";
      document.getElementById("timer").style.fontSize = "65%";
      document.getElementById("timerformat").style.top = "43%";
      document.getElementById("timerformat").style.fontSize = "200%";
      playAudio(applause);
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
        var min_display = hou + " MINUTE";
      }
      else
      {
        var min_display = hou + " MINUTES";
      }
      //variable to hold display for seconds
      if (sec ==1)
      {
        var sec_display = sec + " SECOND"
      }
      else
      {
        var sec_display = sec + " SECONDS";
      }

      // output/ countdown on screen
      document.getElementById("timer").innerHTML = "TRY TO STAY ON TASK FOR...<br>";
      document.getElementById("timerformat").innerHTML = min_display + "<br>" + sec_display;
      sec--;

      if (hou != 0 && sec !=0)
      {
      	document.getElementById("starter").disabled = true;
        document.getElementById("breaker").disabled = true;
        document.getElementById("lolz").disabled = true;
        document.getElementById("komodoro").disabled = true;

      }
      else
      {
	       document.getElementById("starter").disabled = false;
         document.getElementById("breaker").disabled = false;
         document.getElementById("lolz").disabled = false;
         document.getElementById("komodoro").disabled = false;
      }
    }
  },intervaltimer);
}

function startRealTimer()
{
  var input = document.getElementById('lolz').value;
  startTimer(input);
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

function komodoro()
{
  startTimer("25");
}
function breakTimer()
{
  document.getElementById("timerformat").style.fontSize = "250%";
  document.getElementById("timerformat").style.top = "50%";
  document.getElementById("timer").style.fontSize = "100%";

  // declare variables for number of minutes and seconds
  var hou = 7;
  var sec = 59;
  var intervaltimer = 1000;
  var alarm = new Audio("alarm.mp3");

  interval1 = setInterval(function()
    {
      if (hou == 00 && sec == 00)
      {
        // minute or minutes,based on the original input
        if (hou == "1")
        {
          var min = " MINUTE.";
        }
        else
        {
          var min = " MINUTES.";
        }
          //output after timer is done
        document.getElementById("timer").innerHTML = "YOUR SHORT BREAK IS OVER.<br>"
        document.getElementById("timerformat").innerHTML = "START ANOTHER FOCUS SESSION BY RESTARTING THE TIMER.";
        document.getElementById("timer").style.fontSize = "65%";
        document.getElementById("timerformat").style.top = "43%";
        document.getElementById("timerformat").style.fontSize = "200%";
        playAudio(alarm);
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
        else
        {
          document.getElementById("background").style.background = "rgb(123, 163, 215)";
          document.getElementById("timerformat").style.color = "black";
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
          var min_display = hou + " MINUTE";
        }
        else
        {
          var min_display = hou + " MINUTES";
        }
        //variable to hold display for seconds
        if (sec ==1)
        {
          var sec_display = sec + " SECOND"
        }
        else
        {
          var sec_display = sec + " SECONDS";
        }

        // output/ countdown on screen
        document.getElementById("timer").innerHTML = "SHORT BREAK<br>";
        document.getElementById("timerformat").innerHTML = min_display + "<br>" + sec_display;
        sec--;

        if (hou != 0 && sec !=0)
        {
        	document.getElementById("starter").disabled = true;
          document.getElementById("breaker").disabled = true;
          document.getElementById("lolz").disabled = true;
          document.getElementById("komodoro").disabled = true;
        }
        else
        {
  	       document.getElementById("starter").disabled = false;
           document.getElementById("breaker").disabled = false;
           document.getElementById("lolz").disabled = false;
           document.getElementById("komodoro").disabled = false;
        }
      }
    },intervaltimer);
}

function playAudio(audio)
{
  audio.play();
  setTimeout(function(){ audio.pause() }, 5000);
}

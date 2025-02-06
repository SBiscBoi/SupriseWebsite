document.addEventListener('DOMContentLoaded', function() {
    setCountdownText();
  });

  
function setCountdownText(){
  const now = new Date();
  const vDay = new Date('February 14, 2025 00:00:00'); // valentines day date
  //const vDay = new Date('February 6, 2025 14:40:00'); // debug date
  timeLeft = vDay.getTime() - now.getTime();
    
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)).toString();
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000).toString();
    
  var timeString = `${days}:${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  document.getElementById("countdownText").textContent=timeString;
    
  if (timeLeft <= 0){
    document.getElementById("startDiv").style.visibility='hidden';
    document.getElementById("endDiv").style.visibility='visible';
    document.getElementById("pageStyle").setAttribute("href", "ootStylesheet.css");
  } else {
    document.getElementById("startDiv").style.visibility='visible';
    document.getElementById("endDiv").style.visibility='hidden';
    document.getElementById("pageStyle").setAttribute("href", "stylesheet.css");
  }
}

setInterval(setCountdownText, 1000);
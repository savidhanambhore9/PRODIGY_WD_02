let timer; // To store the interval of the stopwatch
let isRunning = false; // Flag to track if the stopwatch is running
let seconds = 0, minutes = 0, hours = 0;
let laps = []; // Array to store lap times

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStopBtn").innerHTML = "Start";
    isRunning = false;
  } else {
    timer = setInterval(updateDisplay, 1000);
    document.getElementById("startStopBtn").innerHTML = "Pause";
    isRunning = true;
  }
}

function updateDisplay() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  let displayString = `${(hours < 10 ? '0' : '')}${hours}:${(minutes < 10 ? '0' : '')}${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
  document.getElementById("display").innerHTML = displayString;
}

function recordLap() {
  if (isRunning) {
    let lapTime = `${(hours < 10 ? '0' : '')}${hours}:${(minutes < 10 ? '0' : '')}${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
    laps.push(lapTime);

    let lapsList = document.getElementById("laps");
    let lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${laps.length}: ${lapTime}`;
    lapsList.prepend(lapItem);
  }
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  laps = [];
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("startStopBtn").innerHTML = "Start";
  document.getElementById("laps").innerHTML = "";
}

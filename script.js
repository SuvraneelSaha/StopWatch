// variables initialization
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

// Dom elements -- Buttons 
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");

// Dom elements of the Timer 
const hours_tens = document.getElementById("hours-tens");
const hours_ones = document.getElementById("hours-ones");
const minutes_tens = document.getElementById("minutes-tens");
const minutes_ones = document.getElementById("minutes-ones");
const seconds_tens = document.getElementById("seconds-tens");
const seconds_ones = document.getElementById("seconds-ones");

// startTimer method
function startTimer() {
  if (isRunning === false) {
    // Mark stopwatch as running
    isRunning = true;

    // Calculate the actual start time
    startTime = Date.now() - elapsedTime;

    // Start the interval to update display every 10ms
    timerInterval = setInterval(updateDisplay, 10);

    // Optional: Update button states
    startBtn.textContent = "Running";
    startBtn.disabled = true;
    pauseBtn.disabled = false;
  }
}

function updateDisplay() {
  // Calculate current elapsed time
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  // Convert milliseconds to time units
  const totalSeconds = Math.floor(elapsedTime / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Extract individual digits
  const hoursTens = Math.floor(hours / 10);
  const hoursOnes = hours % 10;
  const minutesTens = Math.floor(minutes / 10);
  const minutesOnes = minutes % 10;
  const secondsTens = Math.floor(seconds / 10);
  const secondsOnes = seconds % 10;

  // Update the HTML spans
  hours_tens.textContent = hoursTens;
  hours_ones.textContent = hoursOnes;
  minutes_tens.textContent = minutesTens;
  minutes_ones.textContent = minutesOnes;
  seconds_tens.textContent = secondsTens;
  seconds_ones.textContent = secondsOnes;
}

startBtn.addEventListener("click",startTimer);
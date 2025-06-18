// variables initialization
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

// Dom elements -- Buttons
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

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
    pauseBtn.textContent = "Pause";
    pauseBtn.disabled = false;
  }
}

function updateDisplay() {
  // Calculate current elapsed time
  // date.now() returns time in ms
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

startBtn.addEventListener("click", startTimer);

function pauseTimer() {
  if (isRunning === true) {
    isRunning = false;
    clearInterval(timerInterval);
    // Proper button state management
    startBtn.textContent = "Resume";
    startBtn.disabled = false;
    pauseBtn.textContent = "Paused";
    pauseBtn.disabled = true;
    // updateDisplay();
  }
}
// updateDisplay();
// this will execute immediately when the script loads

pauseBtn.addEventListener("click", pauseTimer);

function resetTimer() {
  if (isRunning === true) {
    isRunning = false;
    clearInterval(timerInterval);
  }
  // Reset all time variables to zero
  startTime = 0;
  elapsedTime = 0;
  timerInterval = null;

  // Reset all display digits to 0
  hours_tens.textContent = "0";
  hours_ones.textContent = "0";
  minutes_tens.textContent = "0";
  minutes_ones.textContent = "0";
  seconds_tens.textContent = "0";
  seconds_ones.textContent = "0";

  // Reset button states to initial condition
  startBtn.textContent = "Start";
  startBtn.disabled = false;
  pauseBtn.textContent = "Pause";
  pauseBtn.disabled = true; // Disable pause until timer starts
  resetBtn.disabled = false;
}

resetBtn.addEventListener("click", resetTimer);

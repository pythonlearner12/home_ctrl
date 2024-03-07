
const startButton = document.getElementById("js-start");
const stopButton = document.getElementById("js-stop");
const resetButton = document.getElementById("js-reset");

let seconds = 0;
let minutes = 0;
let running = false;

const secondsTimer = document.getElementById("js-secondsTimer");
const minutesTimer = document.getElementById("js-minutesTimer");

let timer;

resetButton.onclick = function () {
    minutesTimer.innerText = 0;
    secondsTimer.innerText = 0;
}

startButton.onclick = function () {
  if (running === true) {
    return;
  }

  running = true;
  timer = setInterval(function () {
    seconds = seconds + 1;

    if (seconds === 100) {
      minutes = minutes + 1;
      minutesTimer.innerText = minutes;
      seconds = 0;
    }

    secondsTimer.innerText = seconds;
  }, 10);
};

stopButton.onclick = function () {
  clearInterval(timer);
  running = false;
};

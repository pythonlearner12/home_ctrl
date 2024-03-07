let time = 0;
let intervalID;
const timeElement = document.getElementById('stopwatch-time');

function startTimer() {
    stopTimer();
    intervalID = setInterval(stopwatchLoop, 10);
}

function stopTimer() {
    clearInterval(intervalID);
}

function restartTimer() {
    time = 0;
    timeElement.textContent = '0.00s';
}

function stopwatchLoop() {
    time += 0.01;
    timeElement.textContent = time.toFixed(2) + 's';
}
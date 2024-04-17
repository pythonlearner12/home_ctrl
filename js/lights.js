const lightBulb = document.getElementById('light-bulb');
const timeInput = document.getElementById('time_input');

let isOn = false;
let isOnDelay = false;

function swapImage() {
    lightBulb.src = (isOn = !isOn)
        ? 'static/lightbulb_on.png'
        : 'static/lightbulb_off.png';
}

function delayedToggle() {
    if (!timeInput.value || isOnDelay) return;

    isOnDelay = true;

    setTimeout(() => {
        swapImage();
        isOnDelay = false;
    }, timeInput.value * 1000);
}
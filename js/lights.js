const lightBulb = document.getElementById('light-bulb');
const timeInput = document.getElementById('time_input');

let isOn = false;
let isOnDelay = false;

function toggleLights() {
    lightBulb.src = (isOn = !isOn)
        ? 'static/lightbulb_on.png'
        : 'static/lightbulb_off.png';

    fetch('server/', {
        method: 'POST',
        body: `{ "lights": [${isOn}, ${isOn}, ${isOn}] }`
    });
}

function delayedToggle() {
    if (!timeInput.value || isOnDelay) return;

    isOnDelay = true;

    setTimeout(() => {
        toggleLights();
        isOnDelay = false;
    }, timeInput.value * 1000);
}

!async function() {
    const response = await fetch('server/');
    const parsed = await response.json();
    
    if (parsed?.lights) {
        isOn = parsed.lights.some(state => state);
        lightBulb.src = isOn
            ? 'static/lightbulb_on.png'
            : 'static/lightbulb_off.png';
    }
}();
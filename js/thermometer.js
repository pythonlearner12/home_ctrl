const temps = document.getElementById('temps');
const fluid = document.getElementById('fluid');

for (let i = -30; i <= 70; i += 10) {
    const element = document.createElement('span');
    element.innerText = i;
    temps.appendChild(element);
}

!async function fetchTemperature() {
    const response = await fetch('server/');
    const parsed = await response.json();

    const temperature = parsed?.dht11?.temperature;
    if (!temperature) {
        setTimeout(fetchTemperature, 1000);
        return;
    }

    const percent = 100 - Math.floor(+temperature + 30);
    fluid.style.background = `linear-gradient(
        white 0%,
        white ${percent}%,
        red ${percent}%,
        red 100%)
    `;
}();
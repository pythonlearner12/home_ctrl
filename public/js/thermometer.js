let temperture = 27;
let maxTemperture = 70;

const thermometer = document.getElementById('thermometer');
const context = thermometer.getContext('2d');

function renderThermometer() {
    const width = thermometer.width = thermometer.offsetWidth;
    const height = thermometer.height = thermometer.offsetHeight;
    const unitX = width / 100, unitY = height / 100;

    // Clear canvas
    context.clearRect(0, 0, width, height);

    // Calculate size and position
    const values = {};
    values.width = unitX * 3;
    values.height = unitY * (temperture / (maxTemperture + 10) * 100);
    values.x = width / 2 - values.width / 2;
    values.y = height - values.height;

    // Create gradient
    const gradient = context.createLinearGradient(values.x, 0, values.x + values.width, 0);
    gradient.addColorStop(0, '#FF4444');
    gradient.addColorStop(1, '#AA0000');

    // Draw thermometer
    context.fillStyle = gradient;
    context.beginPath();
    context.roundRect(values.x, values.y, values.width, values.height, [ unitX * 25 ]);
    context.fill();
    context.strokeStyle = '#FFAAAA';
    context.stroke();

    // Draw numbers
    const step = height / (maxTemperture + 10);
    
    context.fillStyle = 'black';
    context.font = Math.floor(unitY * 7) + 'px monospace';

    for (let i = 0; i <= maxTemperture; i += 10) {
        const x = width / 2 + values.width;
        const y = height - i * step - 1;
    
        context.fillRect(x - unitX * 0.6, y, unitX * 6, 1);
        context.fillText((' ' + i).slice(-2) + ' °C', x + 5, y - 2);
    }
}

(window.onresize = renderThermometer)();
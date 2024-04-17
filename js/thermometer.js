const temps = document.getElementById('temps');
const fluid = document.getElementById('fluid');

for (let i = -30; i <= 70; i += 10) {
    const element = document.createElement('span');
    element.innerText = i;
    temps.appendChild(element);
}

const currentTemperture = 60;
const percent = 100 - Math.floor(currentTemperture + 30);

fluid.style.background = `linear-gradient(white 0%, white ${percent}%, red ${percent}%, red 100%)`

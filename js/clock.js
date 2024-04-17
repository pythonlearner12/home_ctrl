const short = document.getElementById('short-hand');
const long = document.getElementById('long-hand');

function clockCalcPos(date) {
    const minutes = date.getMinutes() + date.getSeconds() / 60;
    const hours = date.getHours() + minutes / 60;

    short.style.rotate = hours * 30 + 'deg';
    long.style.rotate = minutes * 6 + 'deg';
}

!function update() {
    clockCalcPos(new Date());
    window.requestAnimationFrame(update);
}();
/*first sub grid*/
function getTimeDecimals(date) {
    const seconds = date.getSeconds() + date.getMilliseconds() / 1000;
    const minutes = date.getMinutes() + seconds / 60;
    const hours = date.getHours() + minutes / 60;

    return [hours, minutes, seconds];
  }

  const short = document.getElementById("short_hand");
  const long = document.getElementById("long_hand");

  (function update() {
    const [hours, minutes] = getTimeDecimals(new Date());
    long.style.rotate = hours * 30 + "deg";
    short.style.rotate = minutes * 6 + "deg";
    window.requestAnimationFrame(update);
  })();

/*second sub grid*/
const imgElement = document.getElementById('lightbulb');
let isOn = true;

function swapImage() {
    imgElement.src = (isOn = !isOn)
        ? '../static/lightbulb_off.png'
        : '../static/lightbulb_on.png';
}

/*third sub grid*/
const coursesData = {
    labels: [
        "warmwater",
        "vermarming",
        "keuken apparaten",
        "koelkast",
        "light",
        "afwas",
        "overig",
    ],
    datasets: [{
        data: [39, 21, 12, 7, 6, 4, 11],
        backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4CAF50",
            "#9C27B0",
            "#E27A1E",
            "#E21E1E",
        ],
    }, ],
};

const config = {
    type: "doughnut",
    data: coursesData,
};
const ctx = document
    .getElementById("coursesDoughnutChart")
    .getContext("2d");

new Chart(ctx, config);
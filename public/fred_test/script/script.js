/*first sub grid*/
const currentTime = new Date();
const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();

const circleElement = document.querySelector('.circle');
circleElement.style.setProperty('--rotation-deg', '' + (currentHour * 60 + currentMinute) / 4 + 'deg');
circleElement.style.setProperty('--time-left', '' + (1440 - (currentHour * 60 + currentMinute)) * 60 + 's');

/*second sub grid*/
const imgElement = document.getElementById('lightbulb');
let isOn = true;

function swapImage() {
    imgElement.src = (isOn = !isOn)
        ? '../static/lightbulb_off.jpg'
        : '../static/lightbulb_on.jpg';
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
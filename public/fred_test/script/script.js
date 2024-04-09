/*first sub grid*/
const currentTime = new Date();
const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();

const circleElement = document.querySelector('.circle');
circleElement.style.setProperty('--rotation-deg', '' + (currentHour * 60 + currentMinute) / 4 + 'deg');
circleElement.style.setProperty('--time-left', '' + (1440 - (currentHour * 60 + currentMinute)) * 60 + 's');



/*second sub grid*/
const imgElement = document.getElementById('lightbulb');

function swapImage() {

    if (imgElement.src.endsWith('lightbulb_on.jpg')) {
        imgElement.src = 'lightbulb_off.jpg';
    } else {
        imgElement.src = 'lightbulb_on.jpg';
    }
}

function checkSomething() {
    imgElement.src = 'lightbulb_on.jpg';
}

/*thrid sub grid*/

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
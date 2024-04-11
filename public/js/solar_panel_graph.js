let labels = [], data = [];

const chart = new Chart(document.getElementById('solar-panel-graph'), {
    type: 'line',
    data: {
        labels,
        datasets: [{
            label: 'Zonnepaneel opbrengst (kWh)',
            borderWidth: 1,
            data
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

function formatTime(input) {
    return ('0' + input).slice(-2);
}

setInterval(() => {
    if (labels.length > 10) {
        labels.shift();
        data.shift();
    }

    const date = new Date();

    labels.push(formatTime(date.getHours()) + ':' + formatTime(date.getMinutes()));
    data.push(Math.floor(Math.random() * 50));
    chart.update();
}, 60000);
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
chart.resize();

function formatTime(input) {
    return ('0' + input).slice(-2);
}

async function getLDRvalue() {
    const response = await fetch('server/');
    const parsed = await response.json();
    return parsed?.ldr ?? 0;
}

async function updateGraph() {
    const date = new Date();
    if (labels.length > 10) {
        labels.shift();
        data.shift();
    }
    
    labels.push(formatTime(date.getHours()) + ':' + formatTime(date.getMinutes()));
    data.push(await getLDRvalue());

    chart.update();
    chart.resize();
}

setInterval(updateGraph, 5000);
updateGraph();
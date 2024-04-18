new Chart(document.getElementById('energie-verbruik'), {
    type: 'doughnut',
    data: {
        labels: [
            'Warm water',
            'Vermarming',
            'Keuken apparaten',
            'Koelkast',
            'Licht',
            'Afwas',
            'Overig',
        ],
        datasets: [{
            data: [39, 21, 12, 7, 6, 4, 11],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4CAF50',
                '#9C27B0',
                '#E27A1E',
                '#E21E1E',
            ],
        }, ],
    },
    options: {
        maintainAspectRatio: false
    }
});
const ctx = document.getElementById('myCharts').getContext('2d')

const labels = [
    '1',
    '2',
    '3',
    '4',
    '5'
]

const data = {
    labels,
    datasets: [{
        data: [Mexico, Brasil],
        label: "Status"
    }]
}

const config = {
    type: 'line',
    data,
    Options:{
        responsive: true
    }
};

const myCharts = new Chart(ctx, config)
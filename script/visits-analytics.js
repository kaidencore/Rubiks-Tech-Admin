const dailyVisits = [120, 135, 150, 140, 160, 155, 170];
const dailyPurchases = [32, 42, 28, 19, 28, 30, 59];

document.addEventListener('DOMContentLoaded', function () {
    const visitsCanvas = document.getElementById('visits-chart');
    const visitsChart = new Chart(visitsCanvas, {
        type: 'bar',
        data: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [{
                label: 'Website Visits',
                data: dailyVisits,
                backgroundColor: 'rgb(20, 50, 80, 0.8)',
            },
            {
                label: 'Online Purchases',
                data: dailyPurchases,
                backgroundColor: '#ff8c00'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        display: false,
                        color: 'white'
                    },
                    ticks: {
                        color: 'white' 
                    },
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    color: 'white',
                    ticks: {
                        color: 'white' 
                    },
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: 'white'
                    }
                }
            }
        }
    });
});
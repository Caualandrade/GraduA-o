document.addEventListener('DOMContentLoaded', () => {
    const academicCtx = document.getElementById('academicChart').getContext('2d');
    const academicChart = new Chart(academicCtx, {
        type: 'bar',
        data: {
            labels: ['Cálculo I', 'Física A', 'Banco de dados I', 'Start', 'Meio ambiente'],
            datasets: [{
                label: 'Notas',
                data: [8.5, 9.0, 7.8, 8.8, 7.6],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const weeklyProgressCtx = document.getElementById('weeklyProgressChart').getContext('2d');
    const weeklyProgressChart = new Chart(weeklyProgressCtx, {
        type: 'line',
        data: {
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
            datasets: [{
                label: 'Horas de Estudo',
                data: [2, 3, 1, 4, 2],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx = document.getElementById('courseHoursChart').getContext('2d');

    const totalHours = [3615, 180, 200, 450, 45, 60];
    const completedHours = [1500, 100, 100, 200, 20, 30];

    const data = {
        labels: [
            'CCO',
            'CCOP',
            'ECO',
            'EXT',
            'DTCC',
            'AC'
        ],
        datasets: [
            {
                label: 'Total',
                data: totalHours,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Concluído',
                data: completedHours,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.raw + ' h';
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 4000,
                    ticks: {
                        stepSize: 500
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
});

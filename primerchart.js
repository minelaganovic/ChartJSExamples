let labels1 = ['Coding', 'Debugging'];
let data1 = [69, 31];
let colors1 = ['#49A9EA', '#36CAAB'];

let myDoughnutChart = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myDoughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['Coding', 'Debugging'],
        datasets: [{
            data: [31, 71],
            backgroundColor: ['red', 'pink']
        }]
    },
    options: {
        title: {
            text: "Coding-Debugging:",
            display: true
        }
    }
});

let labels2 = ['Instagram', 'Facebook', 'WhatsApp', 'Twitter'];
let data2 = [169.6, 160.3, 146.3, 150];
let colors2 = ['red', 'blue', 'lightgreen', 'cadetblue'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [{
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "Percentages of use of social networks in the world",
            display: true
        },
        legend: {
            display: false
        }
    }
});


let labels3 = ['Soft Skills', 'Source Control', 'Debugging', 'Command Line (Terminal)', 'Speed'];
let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'radar',
    data: {
        labels: labels3,
        datasets: [{
                label: 'James Gosling',
                fill: true,
                backgroundColor: "rgba(179, 181, 198, 0.2)",
                borderColor: "rgba(179, 181, 198, 1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(179, 181, 198, 1)",
                data: [50, 12, 55, 7, 29]
            },
            {
                label: 'Linus Torvalds',
                fill: true,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(255, 99, 132, 1)",
                data: [51, 10, 32, 20, 44]
            }
        ]
    },
    options: {
        title: {
            text: "Skills of good programmers:",
            display: true
        }
    }
});

let labels4 = ['Poland',
    'Hungary',
    'Ukraine',
    'Chech Republic',
    'Spain',
    'Austria',
    'Switzerland',
    'Germany'
];
let data4 = [100, 94, 93, 93, 92, 92, 91, 90];
let colors4 = ['pink', '#36CAAB', '#34495E', '#B370CF', '#AC5353', '#CFD4D8', 'red', 'blue', 'yellow'];

let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'pie',
    data: {
        labels: labels4,
        datasets: [{
            data: data4,
            backgroundColor: colors4
        }]
    },
    options: {
        title: {
            text: "Top 8 countries with the best developers:",
            display: true
        }
    }
});
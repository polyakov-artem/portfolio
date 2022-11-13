import Chart from 'chart.js/auto'
const canvas = document.querySelector('.radar').getContext('2d');
let diagram;

const timeStep = 700;
const values = [ 80, 70, 70, 70, 80, 70, 70]; 
const duration=values.length*timeStep;


const data = {
  labels: [
    'HTML',
    'React',
    'Javascript',
    'Github',
    'SASS',
    'Redux',
    'Webpack',
  ],

  datasets: [{
    label: '',
    data: [ ],
    fill: true,
    backgroundColor: 'rgba(149,225,252,0.5)',
    borderColor: 'rgb(149,225,252)',
    pointBackgroundColor: 'rgb(149,225,252)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(149,225,252)'
  }]
};



const config = {
  type: 'radar',
  data: data,
  options: {
    layout: {
      padding: 0
    },
    plugins: {
      legend: {
          display: false,
      },
    },
    scales: {
      r: 
        { 
        min: 50,
        max: 90,
        ticks: {
          stepSize: 10,
          
        },
        pointLabels: {
          font: {
            size: 14
          }
        }
      }
    },
    elements: {
      line: {
        borderWidth: 2
      }
    },
    // animations: {
    //   tension: {
    //     duration: duration,
    //     easing: 'linear',
    //     from: 0.5,
    //     to: 0,
    //   }
    // }
  },
};

async function setValues(values) {

  for (let i=0; i<values.length; i++){
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        diagram.config.data.datasets[0].data.push(values[i]);
        diagram.update()
        resolve("готово!")}
      , timeStep)
    });

    let result = await promise;
  }
};


if (canvas) {
  diagram = new Chart(canvas, config);
  setValues(values);
}



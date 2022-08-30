import { computeRegression } from "./regression.js";

const data = {
    datasets: [{
      label: 'Scatter Dataset',
      data: [{
        x: -10,
        y: 0
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
      }, {
        x: 0.5,
        y: 5.5
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
  };

const config = {
    type: 'scatter',
    data: data,
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        }
      }
    }
  };

const regression = computeRegression(data.datasets[0].data);

data.datasets[1] = {
    label : 'Régression Linéaire',
    data: regression.points.map((point) => { return {x:point[0],y:point[1]}}),
    backgroundColor: 'rgb(128, 128, 128)'
}

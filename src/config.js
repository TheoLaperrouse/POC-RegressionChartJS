import { randomData } from "./regression";

const data = {
  datasets: [{
    label: 'Scatter Dataset',
    data: randomData(),
    backgroundColor: 'rgb(255, 99, 132)'
  }],
};


export const config = {
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

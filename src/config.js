import { randomData } from "./regression";

const data = {
  datasets: [{
    label: 'Scatter Dataset',
    data: randomData(),
    backgroundColor: 'rgb(50, 107, 168)',
    pointRadius: 8
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

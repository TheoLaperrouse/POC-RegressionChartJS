import { randomData } from "./regression";

const data = {
  datasets: [{
    label: 'Scatter Dataset',
    data: randomData(),
    backgroundColor: 'rgb(50, 107, 168)',
    pointRadius: 3
  }],
};


export const config = {
  type: 'scatter',
  data: data,
  options: {
    animation:false,
    elements:{
      line:{
        borderWidth:3,
        borderColor: 'rgb(50, 107, 168)'
      }
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    }
  }
};

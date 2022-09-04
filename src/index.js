import Chart from "chart.js/auto";
import { config } from "./config.js"
import { computeRegressionLinear, computeRegressionPolynomial } from "./regression.js";
import { randomData } from "./regression";

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx,config)

window.addEventListener('load', () => {
    const button = document.querySelector('#regressionButton');
    button.addEventListener('click', () => {
       onClick(true);
    });
    const button2 = document.querySelector('#regressionButton2');
    button2.addEventListener('click', () => {
        onClick(false);
    });
});

function onClick(linear){
    if( config?.data?.datasets.length <= 1){
        const regression = linear? computeRegressionLinear(config.data.datasets[0].data) : computeRegressionPolynomial(config.data.datasets[0].data) ;
        console.log(regression);
        config.data.datasets[1] = {
            type:'line',
            label: 'Régression linéaire',
            data: regression.points.map((point) => { return {x:point[0],y:point[1]}}),
            backgroundColor: 'rgb(56, 168, 50)',
            pointRadius: 8
        }
        document.querySelector('#equation').textContent = regression.string;
    }
    else{
        config.data.datasets.pop();
        config.data.datasets[0].data = randomData();
        document.querySelector('#equation').textContent = '';
    }
    chart.update();
}
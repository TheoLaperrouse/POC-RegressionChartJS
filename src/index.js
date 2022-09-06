import Chart from "chart.js/auto";
import { config } from "./config.js"
import { computeRegression } from "./regression.js";
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
        const regressionObject = computeRegression(linear, config.data.datasets[0].data);
        const regression = regressionObject.regression;
        config.data.datasets[1] = {
            type: 'line',
            label: linear ?  'Régression linéaire' : 'Régression polynomial de degré 2',
            data: config.data.datasets[0].data.map(({x,y}) =>  linear ?
                {
                    x,
                    y: x  * regression.coefficients[1] + regression.coefficients[0]
                }
                :
                {
                    x: x,
                    y: x  * x  * regression.coefficients[2] + x  * regression.coefficients[1] + regression.coefficients[0]
                }
            ),
            backgroundColor: 'rgb(56, 168, 50)',
            borderColor: 'rgb(56, 168, 50)',
            pointRadius: 3,
            order: 1
        }
        document.querySelector('#equation').textContent = linear ? 
            `f(x) = ${regression.coefficients[1].toFixed(2)} x + ${regression.coefficients[0].toFixed(2)} (R2=${regressionObject.score.r2.toFixed(2)})`
            :`f(x) = ${regression.coefficients[2].toFixed(2)} x^2 + ${regression.coefficients[1].toFixed(2)} x + ${regression.coefficients[0].toFixed(2)} (R2=${regressionObject.score.r2.toFixed(2)})`;
    }
    else{
        config.data.datasets.pop();
        config.data.datasets[0].data = randomData();
        document.querySelector('#equation').textContent = '';
    }
    chart.update();
}
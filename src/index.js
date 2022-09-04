import Chart from "chart.js/auto";
import { config } from "./config.js"
import { computeRegression } from "./regression.js";
import { randomData } from "./regression";

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx,config)

window.addEventListener('load', () => {
    const button = document.querySelector('#regressionButton');
    button.addEventListener('click', () => {
        if( config?.data?.datasets.length <= 1){
            const regression = computeRegression(config.data.datasets[0].data);
            config.data.datasets[1] = {
                type:'line',
                label: 'Régression linéaire',
                data: regression.points.map((point) => { return {x:point[0],y:point[1]}}),
                backgroundColor: 'rgb(128, 128, 128)'
            }
            document.querySelector('#equation').textContent = regression.string;
        }
        else{
            config.data.datasets.pop();
            config.data.datasets[0].data = randomData();
            document.querySelector('#equation').textContent = '';
        }
        chart.update();
    });
});
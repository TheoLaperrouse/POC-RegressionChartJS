import Chart from "chart.js/auto";
import { config } from "./config.js"

var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx,config)



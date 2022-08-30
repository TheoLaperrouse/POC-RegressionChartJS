import regression from 'regression';

import "./styles.css";
import Chart from "chart.js";
import { default as $ } from "./lib/jq";

var ctx = $("#myChart");
var myChart = new Chart(ctx, {
  type: "scatter",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Tests",
        data: [
            {x:8,y:3},
            {x:5,y:2},
            {x:1,y:7}
          ]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Custom Chart Title"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

export function computeRegression(data){
    const formattedPoints = data.map((point) => [point.x, point.y]);
    return regression.linear(formattedPoints);
}
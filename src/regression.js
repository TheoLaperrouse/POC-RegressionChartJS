import SimpleLinearRegression from 'ml-regression-simple-linear';
import PolynomialRegression from 'ml-regression-polynomial';
import { sortBy } from "lodash";

export function computeRegression(linear, data){
    const x = data.map(({x}) => x);
    const y = data.map(({y}) => y);
    const regression = linear ? new SimpleLinearRegression(x,y) :  new PolynomialRegression(x, y, 2);
    return { regression, score : regression.score(x,y)} 
}

export function randomData(){
    const tab = Array.apply(null, {length: 1000}).map(Number.call, Number)
    return sortBy(tab.map((value) => ({
        x: Math.random(),
        y: Math.random() * value  
    })),['x'])
}


import regression from "regression";

export function computeRegressionLinear(data){
    const formattedPoints = data.map((point) => [point.x, point.y]);
    return regression.linear(formattedPoints);
}

export function computeRegressionPolynomial(data){
    const formattedPoints = data.map((point) => [point.x, point.y]);
    
    return regression.polynomial(formattedPoints,{order: 2});

}

export function randomData(){
    const tab = Array.apply(null, {length: 50}).map(Number.call, Number)
    return tab.map((value) => ({
        x: Math.random() * value,
        y: Math.random() * value  
    }))
}


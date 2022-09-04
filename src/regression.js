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
    return [1,2,3,4,5,6,7,8].map((value) => ({
        x: Math.random() * value,
        y: Math.random() * value  
    }))
}


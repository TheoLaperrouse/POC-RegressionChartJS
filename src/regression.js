import regression from "regression";

export function computeRegression(data){
    const formattedPoints = data.map((point) => [point.x, point.y]);
    return regression.linear(formattedPoints);
}
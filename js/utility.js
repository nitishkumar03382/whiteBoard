import Point from './point.model.js'
export function getMouseCoordsOnCanvas(e, canvas){
    let rect = canvas.getBoundingClientRect();
    let x = Math.round(e.clientX - rect.left);
    let y = Math.round(e.clientY - rect.top);
    return new Point(x,y);
}
export function findDistance(c1, c2){ 
    let xCord = Math.pow(c2.x - c1.x, 2);
    let yCord = Math.pow(c2.y, - c1.y, 2);
    let distance =  Math.sqrt(xCord + yCord);
    return distance;
}
export default class fill{
    constructor(canvas, point, color){
        // console.log(point); console.log(color);
        this.context = canvas.getContext("2d");
        this.imageData = this.context.getImageData(0, 0, this.context.canvas.width, this.context.canvas.height);
        const targetColor = this.getPixel(point);
        console.log(targetColor);
    }

    floodFill(point, targetColor, fillColor){

    }

    getPixel(point){
        if(point.x<0 || point.y<0 || point.x>= this.imageData.width || point.y >= this.imageData.height){
            return [-1, -1, -1, -1]; //Impossible color

        }
        else{
            const offset = ((point.y * this.imageData.width + point.x) * 4);
            console.log(offset);
            return[
            [this.imageData[offset + 0]],
            [this.imageData[offset + 1]],
            [this.imageData[offset + 2]],
            [this.imageData[offset + 3]]
            ];
        }
    }
}
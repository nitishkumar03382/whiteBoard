import {TOOL_BRUSH, TOOL_CIRCLE,TOOL_ERASER, TOOL_LINE,TOOL_PAINT_BUCKET,TOOL_TRIANGLE,TOOL_RECTANGLE,TOOL_PENCIL} from './tool.js';
import Paint from './paint.class.js';

var paint = new Paint("canvas");
paint.activeTool = TOOL_PENCIL;
paint.lineWidth = 1;
paint.brushSize = 2;
paint.selectedColor = "#000000";
paint.init();

document.querySelectorAll("[data-command]").forEach(
    item =>{
        item.addEventListener("click", e => {
            console.log(item.getAttribute("data-command"));
        });
    }
);

document.querySelectorAll("[data-tool]").forEach(
item => {
    item.addEventListener("click", e => {
        document.querySelector("[data-tool].active").classList.toggle("active");
        item.classList.toggle('active');
        // console.log(item.getAttribute("data-tool"));
        let selectedTool = item.getAttribute("data-tool");
        paint.activeTool = selectedTool;
        switch(selectedTool){
            case TOOL_LINE:
            case TOOL_RECTANGLE:
            case TOOL_PENCIL:
            case TOOL_CIRCLE:
            case TOOL_TRIANGLE:
                //activate shape linewidth group and break
                document.querySelector(".group.for-shapes").style.display = "block";
                //invisible brush linewidths group
                document.querySelector(".group.for-brush").style.display = "none";
                break;
            case TOOL_BRUSH:
                //activate brush line group
                document.querySelector(".group.for-brush").style.display = "block";
                // invisible shape linewidths group
                document.querySelector(".group.for-shapes").style.display = "none";
                break;
            default:
                document.querySelector(".group.for-shapes").style.display = "none";
                document.querySelector(".group.for-brush").style.display = "none";
                // make invisible bothe line group
        }

    });
}
);
document.querySelectorAll("[data-line-width]").forEach(
    item => {
        item.addEventListener("click", e => {
            document.querySelector("[data-line-width].active").classList.toggle("active");
            item.classList.toggle("active");
            let linewidth = item.getAttribute("data-line-width");
            paint.lineWidth = linewidth;
        });
    }
);
document.querySelectorAll("[data-color]").forEach(
    item => {
        item.addEventListener("click", e => {
            document.querySelector("[data-color].active").classList.toggle("active");
            item.classList.toggle("active");
            let color = item.getAttribute("data-color");
            // console.log(color);
            paint.selectedColor = color;
        });
    }
);
document.querySelectorAll("[bg-color]").forEach(
    item => {
        item.addEventListener("click", e => {
            document.querySelector("[bg-color].active").classList.toggle("active");
            item.classList.toggle("active");
            let bgcolor = item.getAttribute("bg-color");
            document.getElementById("canvas").style.backgroundColor = bgcolor;
        });
    }
);
document.querySelectorAll("[data-brush-width]").forEach(
    item => {
        item.addEventListener("click", e => {
            document.querySelector("[data-brush-width].active").classList.toggle("active");
            item.classList.toggle("active");
            let brushsize = item.getAttribute("data-brush-width");
            paint.brushSize = brushsize;
        });
    }
);
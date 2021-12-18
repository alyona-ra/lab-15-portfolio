let lightBlue = "#ADE2F7";
let midBlue = "#61CAF5";
let darkBlue = "#2F6175";

let id = null;
let t = 1;

document.addEventListener('DOMContentLoaded', () => {
    if (id == null) {
        id = setInterval(() => {
            graph(t);
            t+= 0.4;
        }, 90);
    } else {
        clearInterval(id);
        id = null;
    }
});

function graph(t) {
    let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height = canvas.height;

    clear();

    wave(30, 40, darkBlue, 0.6);
    wave(20, 30, midBlue, 0.6);
    wave(13, 20, lightBlue, 0.3);

    function wave(a, f, color, o) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = color;
        
        let x = 0;
        let y = 0;
        let amplitude = a;
        let frequency = f;

        while (x < width) {
            y = height/2 + amplitude * Math.sin(x / frequency + t);
            ctx.lineTo(x, y);
            ctx.lineTo(x, amplitude**2);
            ctx.lineTo(x, y);
            x++;
        }
    
        ctx.globalAlpha = o;
        ctx.stroke();

    }

    function clear() {
        ctx.clearRect(0, 0, width, height);
    }
}

canvas.addEventListener('click', () => {
    if (id == null) {
        id = setInterval(() => {
            graph(t);
            t+= 0.4;
        }, 90);
    } else {
        clearInterval(id);
        id = null;
    }
})

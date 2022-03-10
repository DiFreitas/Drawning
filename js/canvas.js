const screen = document.querySelector('canvas');
const brush = screen.getContext('2d');

brush.fillStyle = "white";
brush.fillRect(0, 0, screen.width, screen.height);
brush.strokeStyle = 'black';
brush.strokeRect(0, 0, screen.width, screen.height);

let drawning = false;
let canvasColor = document.getElementById('canvasColor');
let color = document.getElementById('color');
let size = document.getElementById('size');
let clear = document.getElementById('clear');

function backColor() {

    brush.fillStyle = canvasColor.value;
    brush.fillRect(0, 0, screen.width, screen.height);
    brush.strokeStyle = 'black';
    brush.strokeRect(0, 0, screen.width, screen.height);
}

canvasColor.onclick = backColor;

function draw(paint) {

    const x = paint.pageX - screen.offsetLeft;
    const y = paint.pageY - screen.offsetTop;

    if (drawning) {

        brush.beginPath();
        brush.fillStyle = color.value;
        brush.arc(x, y, size.value, 0, 2 * 3.14);
        brush.fill();
    }
}

function clean() {

    brush.fillStyle = 'white';
    brush.fillRect(0, 0, screen.width, screen.height);
    brush.strokeStyle = 'black';
    brush.strokeRect(0, 0, screen.width, screen.height);
}

clear.onclick = clean;

screen.onmousemove = draw;

function activePaint() {
    drawning = true;
}

function deactivatePaint() {
    drawning = false;
}

screen.onmousedown = activePaint;
screen.onmouseup = deactivatePaint;
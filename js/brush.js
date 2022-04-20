let drawning = false;

function draw(paint) {

    const x = paint.pageX - screen.offsetLeft;
    const y = paint.pageY - screen.offsetTop;

    if (drawning) {

        brush.beginPath();
        brush.fillStyle = color.value;
        brush.arc(x, y, size.value, 0, 2 * Math.PI);
        brush.fill();
    }
}



function activePaint() {
    drawning = true;
}

function deactivatePaint() {
    drawning = false;
}

screen.onmousemove = draw;
screen.onmousedown = activePaint;
screen.onmouseup = deactivatePaint;
function backColor() {

    brush.fillStyle = canvasColor.value;
    brush.fillRect(0, 0, screen.width, screen.height);
    brush.strokeStyle = 'black';
    brush.strokeRect(0, 0, screen.width, screen.height);
}

canvasColor.onclick = backColor;
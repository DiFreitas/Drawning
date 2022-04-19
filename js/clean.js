const clear = document.getElementById('clear');

function clean() {

    brush.fillStyle = 'white';
    brush.fillRect(0, 0, screen.width, screen.height);
    brush.strokeStyle = 'black';
    brush.strokeRect(0, 0, screen.width, screen.height);
}

clear.onclick = clean;
const screen = document.querySelector('canvas');
const brush = screen.getContext('2d');

brush.fillStyle = "white";
brush.fillRect(0, 0, screen.width, screen.height);
brush.strokeStyle = 'black';
brush.strokeRect(0, 0, screen.width, screen.height);


const canvasColor = document.getElementById('canvasColor');
const color = document.getElementById('color');
const size = document.getElementById('size');
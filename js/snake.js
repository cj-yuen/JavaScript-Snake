// game element 
const canvas = document.getElementById('gameCanvas');

// 2d context
const context = convas.getContext('2d');

// snake
let snake = [{x: 150, y:150}, {x: 140, y:150}, {x: 130, y:150}, {x: 120, y:150}, {x: 110, y:150}];

function drawSnakePart(snakePart) {
    context.fillStyle = 'lightgreen';
    context.strokeStyle = 'darkgreen';
    context.fillRect(snakePart.x, snakePart.y, 10, 10);
    context.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake() {
    snake.forEach(drawSnakePart);
}
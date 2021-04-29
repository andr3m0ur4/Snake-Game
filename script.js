const canvas = document.getElementById('snake')
const context = canvas.getContext('2d')
const box = 32
const snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = 'right'

const food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    context.fillStyle = 'lightblue'
    context.fillRect(0, 0, 16 * box, 16 * box)
}

function criarCobrinha() {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = 'blue'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function drawFood() {
    context.fillStyle = 'red'
    context.fillRect(food.x, food.y, box, box)
}

document.onkeydown = update

function update(event) {
    if (event.keyCode == 37 && direction != 'right')  direction = 'left'
    if (event.keyCode == 38 && direction != 'down')  direction = 'up'
    if (event.keyCode == 39 && direction != 'left')  direction = 'right'
    if (event.keyCode == 40 && direction != 'up')  direction = 'down'
}

function iniciarJogo() {
    if (snake[0].x > 15 * box && direction == 'right') snake[0].x = 0
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box
    if (snake[0].y > 15 * box && direction == 'down') snake[0].y = 0
    if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box
    criarBG()
    criarCobrinha()
    drawFood()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if (direction == 'right') snakeX += box
    if (direction == 'left') snakeX -= box
    if (direction == 'up') snakeY -= box
    if (direction == 'down') snakeY += box

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop()
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box
        food.y = Math.floor(Math.random() * 15 + 1) * box
    }

    const newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead)
}

const jogo = setInterval(iniciarJogo, 100)

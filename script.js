const canvas = document.getElementById('snake')
const context = canvas.getContext('2d')
const box = 32
const snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = 'right'

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

function iniciarJogo() {
    criarBG()
    criarCobrinha()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if (direction == 'right') snakeX += box
    if (direction == 'left') snakeX -= box
    if (direction == 'up') snakeY -= box
    if (direction == 'down') snakeY += box

    snake.pop()

    const newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead)
}

const jogo = setInterval(iniciarJogo, 100)

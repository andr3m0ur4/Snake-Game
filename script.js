window.onload = () => {
    const canvas = document.getElementById('snake')
    const context = canvas.getContext('2d')
    let box = 32

    criarBG(context, box)
}

function criarBG(context, box) {
    context.fillStyle = 'lightgreen'
    context.fillRect(0, 0, 16 * box, 16 * box)
}
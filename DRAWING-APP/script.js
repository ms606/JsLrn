const canvas    = document.getElementById('canvas')
const clear     = document.getElementById('clear')
const increase  = document.getElementById('increase')
const decrease  = document.getElementById('decrease')
var sizeCanvas  = document.getElementById('size')
var color       = document.getElementById('color')

let size = 10 
let colorVal = 'black'
let pressed  = false
let x 
let y 

var ctx = canvas.getContext('2d')

canvas.addEventListener('mousedown', (e) => {
    pressed = true    
    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    pressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (pressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        circle(e.offsetX, e.offsetY)
        line(x, y, x2, y2)

        x = x2
        y = y2 
    }
})


color.addEventListener('change', (e) => {
    colorVal = e.target.value
})


clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height )
    }
)

increase.addEventListener('click', () => {
    size += 5
    sizeCanvas.innerHTML = size
})    

decrease.addEventListener('click', () => {
    
    if (size === 1) size = 1
    else 
    size--
    
    sizeCanvas.innerHTML = size
})


function line(x, y, x2, y2){
    ctx.beginPath()
    ctx.moveTo(x,y);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = colorVal;
    ctx.lineWidth = size * 2;    
    ctx.stroke();
}

function circle(x, y){
    console.log(colorVal)
    ctx.beginPath()
    ctx.arc(x, y, size, 0, 2 * Math.PI)
    ctx.fillStyle = colorVal
    ctx.fill()
}
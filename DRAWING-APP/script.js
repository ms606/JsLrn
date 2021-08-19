const canvas    = document.getElementById('canvas')
const clear     = document.getElementById('clear')
const increase  = document.getElementById('increase')
const decrease  = document.getElementById('decrease')
var sizeCanvas  = document.getElementById('size')
var color       = document.getElementById('color')

let size = 5 
let colorVal = 'black'
let pressed = false


var ctx = canvas.getContext('2d')

canvas.addEventListener('mousedown', (e) => {
    pressed = true    
})

canvas.addEventListener('mousemove', (e) => {
    if (pressed) circle(e.offsetX, e.offsetY)
})

canvas.addEventListener('mouseup', (e) => {
    pressed = false
})



color.addEventListener('change', (e) => {

    colorVal = e.target.value
})


clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height )
        }
    )

increase.addEventListener('click', () => {
    size++
    sizeCanvas.innerHTML = size
})    

decrease.addEventListener('click', () => {
    
    if (size === 1) size = 1
    else 
    size--
    
    sizeCanvas.innerHTML = size
})



function circle(x, y){
    console.log(colorVal)
    ctx.beginPath()
    ctx.arc(x, y, size, 0, 2 * Math.PI)
    ctx.fillStyle = colorVal
    ctx.fill()
}
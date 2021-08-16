const container  = document.querySelector('.container')
const splitLeft  = document.querySelector('.left')
const splitRight = document.querySelector('.right')


splitLeft.addEventListener('mouseenter', () => {
    container.classList.add('hover-left')
    console.log('container', container)
})

splitLeft.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left')
    console.log('container', container)
})


splitRight.addEventListener('mouseenter', () => {
    container.classList.add('hover-right')
    console.log('container', container)
})

splitRight.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right')
    console.log('container', container)
})

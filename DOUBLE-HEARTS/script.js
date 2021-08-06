const times = document.querySelector('.times')
const loveMe = document.querySelector('.loveMe')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) => {
    if ( clickTime === 0 ) {
          clickTime = new Date().getTime()
          console.log(clickTime)
    }
    else {
        if ( (new Date().getTime() - clickTime) < 800 ) {
            console.log((clickTime - new Date().getTime()))
            createHeart(e);
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }

    }  
})


console.log(times )
const createHeart = (e) => {
    
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    heart.classList.add('fa-10x');
    
    
    heart.style.top = `${e.clientX}px`;
    heart.style.left = `${e.clientY}px`;

    loveMe.appendChild(heart)

    setTimeout(function(){
        heart.remove()
    }, 1000)    

    times.innerText = timesClicked++
}
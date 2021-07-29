//bring dom 
//bring in slides
//bring in buttons 

let dom         = document.getElementsByClassName('slider-container')
let arrowRight  = document.getElementById('right-arrow')
let arrowLeft   = document.getElementById('left-arrow')
let slide       = document.querySelectorAll('.slide')

console.log(slide)

let count = slide.length

console.log(count)

arrowLeft.addEventListener("click", function(){
        count--
        console.log(count)

        if (count < 1) {
            count = slide.length
        }

        updatePicture()        
    }  
)

arrowRight.addEventListener("click", function(){
    count++
    console.log(count)

    if (count > slide.length) {
        count = 0
    }
    updatePicture()
})


function updatePicture() {
    slide.forEach((slide) => slide.classList.remove("active"))

    slide[count].classList.add("active")
}



//have a counter to increment and decrement when using arrow 
//have all list of picture link array wise. 
//when we move right or left , the array no. is incremented or decremented.
//and which ever array is on the number add or remove the active class on it,

// create two functions one for right and one for left, when clicking it runs and updates

//bring dom 
//bring in slides
//bring in buttons 

let dom = document.getElementsByClassName('slider-container')
let arrowRight = document.getElementsByClassName('arrow right-arrow')
let arrowLeft = document.getElementsByClassName('arrow left-arrow')

let slide = document.getElementsByClassName('slide')
console.log(slide)

let count = 0


arrowRight.addEventListner("click", count ++ )



//have a counter to increment and decrement when using arrow 
//have all list of picture link array wise. 
//when we move right or left , the array no. is incremented or decremented.
//and which ever array is on the number add or remove the active class on it,

// create two functions one for right and one for left, when clicking it runs and updates

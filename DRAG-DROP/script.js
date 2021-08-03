const fill = document.querySelector('.fill')

fill.addEventListener('dragend', dragEnd)
fill.addEventListener('dragstart', dragStart)

const empties = document.querySelectorAll('.empty')

for ( const empty of empties ) {   
    empty.addEventListener('dragover' ,dragOver)    
    empty.addEventListener('dragenter',dragEnter)    
    empty.addEventListener('dragstart',ondragstart)     
    empty.addEventListener('drop'     ,ondrop)
    empty.addEventListener('dragleave',dragLeave)
    console.log(empty)
}

function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
    console.log(this)
}

function dragLeave() {
    this.className = 'empty'
}

function dragOver(e) {
    e.preventDefault()
    
}

function dragEnter(e){
    e.preventDefault()  
    this.className += ' hover'
    console.log(this)
}

function ondrop(){
    this.className = 'empty'
    this.append(fill)

}

function dragEnd(){
    this.className = 'fill'
}
const sw    = document.querySelectorAll('.switch')
const good  = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast  = document.querySelector('#fast')

sw.forEach(sw => sw.addEventListener('change', (e) => updateValue(e.target)))

console.log('good', good.checked);
console.log('cheap', cheap.checked);
console.log('fast', fast.checked);

function updateValue(val){
    if (good.checked && cheap.checked && fast.checked) {
       if (cheap.checked) {
        cheap.checked = false;
       }        
    }
    console.log(val)
    // if (good === val){
    //     fast.checked = false
    // }

}

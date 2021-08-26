const search = document.querySelector('.search')
const searchBtn = document.querySelector('.btn')
const input = document.querySelector('.input')

searchBtn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})

console.log(search, searchBtn)
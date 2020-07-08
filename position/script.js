const elementExample_first = document.querySelector('.elementExample_first')
const elementExampleLast = document.querySelector('.elementExample_last')

elementExample_first.addEventListener('click', function(event){
  this.classList.toggle('active')
  elementExampleLast.classList.add('active')
})
elementExampleLast.addEventListener('click', function(event){
  this.classList.toggle('active')
  elementExample_first.classList.add('active')
})
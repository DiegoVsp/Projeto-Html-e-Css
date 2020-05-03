const bolsa = [
  'cartão de crédito',
  'chaves',
  'dinheiro',
  'escova de cabelo',
  'lenço de papel',
  'perfume',
  'alcool gel'
]
let index = 0;
while(index<bolsa.length){
  console.log(`${index + 1}. ${bolsa[index]}`)
  index++
}
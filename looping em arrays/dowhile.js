const bolsa = [
  'cartão de crédito',
  'chaves',
  'dinheiro',
  'escova de cabelo',
  'lenço de papel',
  'perfume',
  'alcool gel'
]

let index = 0

do {
  console.log(`${index + 1}. ${bolsa[index]}`)
  index ++
}while(index < bolsa.length)
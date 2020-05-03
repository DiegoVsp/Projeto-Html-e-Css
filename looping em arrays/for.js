const bolsa = [
  'cartão de crédito',
  'chaves',
  'dinheiro',
  'escova de cabelo',
  'lenço de papel',
  'perfume',
  'alcool gel'
]
for(let index = 0; index < bolsa.length; index++){
  console.log(`${index+1}. ${bolsa[index]}`)
  if(bolsa[index]=='dinheiro') break
}
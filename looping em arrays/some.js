const idadeFamilia = [{
  nome: 'Vanessa',
  idade: 39
},
{
  nome: 'Gabriel',
  idade: 39
},
{
  nome: 'Bielzinho',
  idade: 11
},
{
  nome: 'Felipe',
  idade: 3
},
]
const ehAdulto = valor => valor.idade >= 18
const temAdutlo = idadeFamilia.some(ehAdulto)
console.log(temAdutlo)

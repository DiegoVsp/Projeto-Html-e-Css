// Intera pelo indice
const familia = [
  {
    nome: 'Diego',
    papel: 'filho'
  },
  {
    nome: 'Francisca',
    papel: 'Mãe'
  },
  {
    nome:'Tiago',
    papel:'Irmão'
  },
  {
    nome: 'Mario',
    papel: 'Pai'
  }
]

for(let pessoa in familia){
  console.log(familia[pessoa])
  // console.log(familia[pessoa].papel)
}
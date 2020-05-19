const sobremesas = [
  {
    nome:'pudim',
    diet: false,
  },
  {
    nome:'gelatina',
    diet: true,
  },
  {
    nome: 'bolo de chocolate',
    diet: false,
  },
  {
    nome: 'pavê',
    diet: false,
  }
];

const idDiet = item => item.diet
const sobremesa = sobremesas.find(idDiet)
console.log(sobremesa)
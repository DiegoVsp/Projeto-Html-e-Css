const people = [
  {
    firstName: 'Estevão', lastName: 'Rodriguez', score: 90
  },
  {
    firstName: 'José', lastName: 'Antônio', score: 100
  },
  {
    firstName: 'Felipe', lastName: 'Tavares', score: 71
  },
  {
    firstName: 'Eric', lastName: 'Silva', score: 82
  }
]

const peopleCopy = people.map(person => {
  return {
    firstName: person.firstName,
    lastName: person.lastName,
    score: person.score
  }
})

// peopleCopy.sort((a,b) => a.score - b.score) //crescente
peopleCopy.sort((a,b) => b.score - a.score) //decrescente
console.log(people, peopleCopy)
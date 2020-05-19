const vetor = [1, 3, 5, 9, 6, 15, 21,0,76]


for (let a = 0; a < vetor.length; a++) {
  for (let b = a + 1; b < vetor.length; b++) {
    if (vetor[a] > vetor[b]) {
      let aux = vetor[b];
      vetor[b] = vetor[a];
      vetor[a] = aux;
    }
  }
}
for (let i = 0; i < vetor.length; i++) {
  console.log(vetor[i])
}


const numeros = [12, 24, 56, 34, 2, 567, 2, 6, 88, 3, 5, 7, 754]

const par = num => num %2 === 0;
const numPar = numeros.filter(par)

console.log(`Numeros pares ${numPar}`)
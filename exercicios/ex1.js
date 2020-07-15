// let a = 'vermelho'
// let b = 'azul';


// let c = a
//  a = b;
//  b = c;

// console.log(a , b)

// function Maior(a, b) {
//   a>b? console.log('O maior é o valor de A'): console.log('O maior é o valor de B')
// }
// Maior(9,5)

// const resultado = entrada(1)
// console.log(resultado)

// function entrada(n1) {
//   if (typeof n1 !== 'number') {
//     return 'Não é um número'
//   }
//   if (n1 % 5 === 0 && n1 % 3 === 0) {
//     return 'FizzBuzz'
//   } else if (n1 % 3 === 0) {
//     return 'Fizz'
//   } else if (n1 % 5 === 0) {
//     return 'Buzz'
//   }
//   return n1
// }



// verificarVelo(130)
// function verificarVelo(velocidade) {
//   const valocidadePermitida = 70
//   const KmPorPonto = 5

//   if (velocidade <= valocidadePermitida) {
//     console.log(`OK`);
//   } else {
//     const pontos = Math.floor((velocidade - valocidadePermitida) / KmPorPonto)
//     if(pontos >= 12) {
//       console.log('Carteira Suspensa')
//     }else{
//       console.log(pontos)
//     }
//   }
// }

// exibir(5)
// function exibir(tamanho) {
//   for (let i = 0 ; i<= tamanho; i++){
//     if(i%2===0){
//       console.log(`O número ${i} é PAR`)
//     }else{
//       console.log(`O número ${i} é IMPAR`)
//     }
//   }
// }

// const filmes = 
//   {
//   titulo: 'Os Incriveis',
//   ano: 2019,
//   diretor: 'Oswaldo',
//   personagem: 'Mulher Elástica'
// }

// function exibirPropri(obj) {
//   for(propriedades in obj){
//     if(typeof obj[propriedades] === 'string') {
//       console.log(propriedades, obj[propriedades])
//     }
//   }
// }
// exibirPropri(filmes)

// somar(10);

// function somar(limite) {
//   let soma =0;
//   for(let i=1; i<=limite; i++) {
//     if(i%3 === 0) {
//       soma += i
//       // console.log(soma)
//     }else if(i%5 === 0) {
//       soma += i
//       // console.log(soma)
//     }
//     // else{
//     //   console.log(i)
//     // }
//   }
//   console.log(`A soma total dos Multiplos de 3 e 5 é igual a ${soma}`)
// }


const notas = [70, 70, 80, 60]
const nNotas = 4
media(notas)
function media(notas) {
  let soma = notas.reduce((atual, proximo) => {
    console.log(atual,proximo)
    return atual+=proximo
  })
   
  console.log(Math.floor((soma)/nNotas))
}

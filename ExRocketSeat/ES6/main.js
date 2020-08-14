// class List {
//   constructor(){
//     this.data = [];
//   }
//   add(data){
//     this.data.push(data)
//     console.log(this.data);
//   }
// }

// class TodoList extends List {
//   constructor(){
//     super();

//     this.usuario = 'Diego';
//   }
//   mostraUsuario(){
//     console.log(this.usuario)
//   }
// }
// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function(){
//   MinhaLista.add('Novo Todo');
// }

// MinhaLista.mostraUsuario();

// class Matematica {
  
//   static soma(a,b){
//     return a+b;
//   }
// }
// console.log(Matematica.soma(1,2));

// CONST e LET

// function teste(x) {
//   let y = 2;
//   if( x> 5){
//     let y=4
//     console.log(x, y)
//   }
// }
// teste(10)

// OPERAÇÕES EM ARRAY
// const arr = [1, 3, 4, 5, 8, 9];

// const newArr = arr.map(function(item, index) {
//   return item + index;
// })
// console.log(newArr)

// const sum = arr.reduce(function(total, next){
//   // console.log(total)
//   return total + next
// })
// console.log(sum)

// const filter = arr.filter(function(item){
//   return item % 2 === 0;
// })
// console.log(filter)

// const find = arr.find(function(item){
//   return item === 4
// })
// console.log(find)


// ARROW FUNCTION

// const arr = [1, 3, 4, 5, 8, 9];

// const newArray = arr.map(item => item * 2)
// console.log(newArray)

// const test = () => ({nome:'Diego'})
// console.log(test())

// DESESTRUTURAÇÃO
// const usuario = {
//   nome:'Diego',
//   idade:'28',
//   endereco: {
//     cidade:'Araraquara',
//     estado:'São Paulo',
//   },
// };

// const {nome, idade, endereco:{estado}} = usuario
// console.log(nome)
// console.log(idade)
// console.log(estado)

// function mostraNome({nome, idade}){
//   console.log(nome, idade)
// }
// mostraNome(usuario)

// REST

// const usuario = {
//   nome: 'Diego',
//   idade: '23',
//   empresa: 'Rocketseat'
// };
// const {nome, ...resto} = usuario;
// console.log(nome);
// console.log(resto)

// console.log('---------')

// const arr = [1,2,3,4];
// const [a,b,...c]=arr;

// console.log(a)
// console.log(b)
// console.log(c)

// console.log('---------')

// function soma(...params){
//   return params.reduce((total, next) => total+next);
// }
// console.log(soma(1,2,5,3))

// Spread
// console.log('----SPREAD-----')
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const arr3 = [...arr1,...arr2]
// console.log(arr3)

// console.log('---------')
// const usuario1 = {
//   nome:'Diego',
//   idade:'23',
//   empresa:'Rocketseat',
// };

// const usuario2 = {...usuario1, nome:'Gabriel'}
// console.log(usuario2)

// Template Literals
// const nome = "Diego";
// const idade = 23;

// console.log(`Meu nome é ${nome} e tenho ${idade} anos`)

// Object Short Syntax
// const nome ='Diego';
// const idade = 23;

// const usuario = {
//   nome,
//   idade,
//   empresa:'Rocketseat',
// }
// console.log(usuario)


// import { soma as somaFunc, subtracao } from './funcoes'
// import * as funcoes from './funcoes'
// import soma, {subtracao} from './funcoes';
// import somaFunction from './soma'; //com export default

// console.log(soma(5,2))
// console.log(subtracao(5,2))

// console.log(somaFunction(5,2))
// console.log(funcoes.subtracao(5,3))

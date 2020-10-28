class List {
  constructor(){
    this.data = [];
  }
  add(data){
    this.data.push(data)
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor(){
    super();

    this.usuario = 'Diego';
  }
  mostraUsuario(){
    console.log(this.usuario)
  }
}
var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
  MinhaLista.add('Novo Todo');
}

// MinhaLista.mostraUsuario();

class Matematica {

  static soma(a,b){
    return a+b;
  }
}
console.log(Matematica.soma(1,2));

// CONST e LET

function teste(x) {
  let y = 2;
  if( x> 5){
    let y=4
    console.log(x, y)
  }
}
teste(10)

// OPERAÇÕES EM ARRAY
const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index) {
  return item + index;
})
console.log(newArr)

const sum = arr.reduce(function(total, next){
  // console.log(total)
  return total + next
})
console.log(sum)

const filter = arr.filter(function(item){
  return item % 2 === 0;
})
console.log(filter)

const find = arr.find(function(item){
  return item === 4
})
console.log(find)


// ARROW FUNCTION

const arr = [1, 3, 4, 5, 8, 9];

const newArray = arr.map(item => item * 2)
console.log(newArray)

const test = () => ({nome:'Diego'})
console.log(test())

// DESESTRUTURAÇÃO
const usuario = {
  nome:'Diego',
  idade:'28',
  endereco: {
    cidade:'Araraquara',
    estado:'São Paulo',
  },
};

const {nome, idade, endereco:{estado}} = usuario
console.log(nome)
console.log(idade)
console.log(estado)

function mostraNome({nome, idade}){
  console.log(nome, idade)
}
mostraNome(usuario)

// REST

const usuario = {
  nome: 'Diego',
  idade: '23',
  empresa: 'Rocketseat'
};
const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto)

console.log('---------')

const arr = [1,2,3,4];
const [a,b,...c]=arr;

console.log(a)
console.log(b)
console.log(c)

console.log('---------')

function soma(...params){
  return params.reduce((total, next) => total+next);
}
console.log(soma(1,2,5,3))

// Spread
console.log('----SPREAD-----')
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1,...arr2]
console.log(arr3)

console.log('---------')
const usuario1 = {
  nome:'Diego',
  idade:'23',
  empresa:'Rocketseat',
};

const usuario2 = {...usuario1, nome:'Gabriel'}
console.log(usuario2)

// Template Literals
const nome = "Diego";
const idade = 23;

console.log(`Meu nome é ${nome} e tenho ${idade} anos`)

// Object Short Syntax
const nome ='Diego';
const idade = 23;

const usuario = {
  nome,
  idade,
  empresa:'Rocketseat',
}
console.log(usuario)


import { soma as somaFunc, subtracao } from './funcoes'
import * as funcoes from './funcoes'
import soma, {subtracao} from './funcoes';
import somaFunction from './soma'; //com export default

console.log(soma(5,2))
console.log(subtracao(5,2))

console.log(somaFunction(5,2))
console.log(funcoes.subtracao(5,3))


// -------------EXERCICIO WEBPACK
import ClasseUsuario from './functions';
import {idade as IdadeUsuario} from './functions';

alert(IdadeUsuario)
ClasseUsuario.info()


// ----------------------

const minhaPromise = () => new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve('OK')
  }, 2000);
})
minhaPromise()
  .then(response => {
  console.log(response)
})
.catch(err => {

})

// Async / Await

async function executaPromise() {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());

}

// com arrow function
const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}
executaPromise();




// ----------------AXIOS
import axios from 'axios';

class Api {
  static async getUserInfo(username){
    try{
      const response = await axios.get(`https://api.github.com/users/${username}`)
      console.log(response);
    }catch(err){
      console.warn('Erro na APi');
    }
  }
}
Api.getUserInfo('diego3g'); 



// ----------------------Exercicios
// ex1
// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
 delay().then(() => {
 console.log('1s');
 delay().then(() => {
 console.log('2s');
 delay().then(() => {
 console.log('3s');
 });
 })
 });
}
umPorSegundo();

const umPorSegundo = async () => {
  await delay(console.log('Olá'))
  await delay(console.log('Bom'))
  await delay(console.log('Dia'))
}
umPorSegundo();

// ex2
import axios from 'axios';

async function getUserFromGithub(user) {
  try {
    const resp = await axios.get(`https://api.github.com/users/${user}`)
    console.log(resp.data)
  } catch (error) {
    console.log('Usuário não existe');
  }
}

getUserFromGithub('diego3g')
getUserFromGithub('diegovsp')

// ex3
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`)
      console.log(response.data);

    } catch (error) {
      console.log('Repositório não existe');
    }
  }
}
Github.getRepositories('diegovsp/nlw');
Github.getRepositories('rocketseat/rocketseat.com.br');

const buscaUsuario = async usuario => {
  try{
    const resp = await axios.get(`https://api.github.com/users/${usuario}`)
    console.log(resp.data)
  }catch(err){
    console.log(err)
  }
}

buscaUsuario('diegovsp')



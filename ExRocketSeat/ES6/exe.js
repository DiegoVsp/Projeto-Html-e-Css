// class Usuario {
//   constructor(email,senha) {
//     this.email = email;
//     this.senha = senha;
//   }
//   isAdmin(){
//     return this.admin === true
//   }  


// }
// class Admin extends Usuario {
//   constructor(email,senha) {
//     super()
//     this.email=email;
//     this.senha=senha;
//     this.admin = true;
//   }
// }

// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste2.com', 'senha1234');

// console.log(User1.senha)
// console.log(Adm1.senha) 


// Ex2
// const usuarios = [
//   { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//   { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//   { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ];


//  const age = usuarios.map(user => user.idade)
//  console.log(age)

//  var Maior18 = usuarios => usuarios.idade > 23 && usuarios.empresa == 'Rocketseat'
//  const p = usuarios.filter(Maior18)
//  console.log(p)

// var google = user => user.empresa == 'Google';
// const g = usuarios.find(google)
// console.log(g)

// const pegaMult = user => ({...user, idade: user.idade*2})
// const filtra = user => user.idade <= 50;

// const res = usuarios.map(pegaMult).filter(filtra);
// console.log(res)


// const arr = [1,2,3,4,5]

// const a = arr.map(item => item + 10)
// console.log(a)
// -----------------------
// const usuario = { nome: 'Diego', idade: 23 };

// const mostraIdade = (usuario)=> usuario.idade;

// console.log(mostraIdade(usuario));

// ------------------------
// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade})


// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));

// 3.4
// const promise = () => new Promise((resolve, reject) => resolve())

// 4.1 - desestruturação simples
// const empresa = {
//   nome: 'Rocketseat',
//   endereco: {
//   cidade: 'Rio do Sul',
//   estado: 'SC',
//   }
//  };
//  const {nome, endereco:{cidade, estado}} = empresa
//  console.log(nome)
//  console.log(cidade)
//  console.log(estado)

// 4.2

// function mostraInfo({nome , idade}) {
//   return `${nome} tem ${idade} anos.`;
//  }
//  console.log(mostraInfo({ nome: 'Diego', idade: 23 }))

// 5.1 REST
// const arr = [1, 2, 3, 4, 5, 6]

// const [x, ...y] = arr;
// console.log(x) 
// console.log(y) 

// function soma(...params){
//   return params.reduce((acum, proximo) => acum+proximo)
// }
// console.log(soma(1,2,4))

// 5.2 SPREAD

// const usuario = {
//   nome: 'Diego',
//   idade: 23,
//   endereco: {
//   cidade: 'Rio do Sul',
//   uf: 'SC',
//   pais: 'Brasil',
//   }
//  };

//  const usuario2 = {...usuario, nome: 'Gabriel'}
//  const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}}
//  console.log(usuario2)
//  console.log(usuario3)


//  Template Literals
// const usuario = 'Diego';
// const idade = 23;
// console.log(`O usuário ${usuario} possui ${idade} anos`);

// Short Syntax
// const nome = 'Diego';
// const idade = 23;
// const usuario = {
//   nome,
//   idade,
//   cidade: 'Rio do Sul',
// };

// console.log(usuario)




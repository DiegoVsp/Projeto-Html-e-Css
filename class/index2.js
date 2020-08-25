// herança
class Pessoa{
  constructor(nome,idade){
    this.nome = nome;
    this.idade = idade;
  }
  falar(){
    console.log('Olá mundo!')
  }
}

class Professor extends Pessoa{
  constructor(nome,idade, materia){
    super(nome,idade);
    this.materia = materia;
  }
  darAula(){
    console.log("Agora vamos dar aula de "+ this.materia)
  }
}

var prof = new Professor('Diego','28','Matemática');

console.log(prof.nome)
prof.falar()
prof.darAula()
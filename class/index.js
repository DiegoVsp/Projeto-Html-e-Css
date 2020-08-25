class Pessoa {
  // definindo atributos aqui no javascript, é no constructor
  constructor(parametro1,parametro2){
    this._atributo1 = parametro1;
    this.atributo2 = parametro2;
  }
  metodo1(){
    console.log("Classes são legais")
  }
  metodo2(parametro1){
    console.log('Isso é um parametro: '+parametro1+' como em funções convencionais!');
  }
  metodoSoma(a,b){
    return a+b;
  }
  // encapsulamento 
  get atributo1(){
    return this._atributo1;
  }
  set atributo1(oi){
    this._atributo1 = oi
  }
}
// instânciando
// passando parametros          \/
var victor = new Pessoa("valor parametro1", "valor do parametro2");
var Lima = new Pessoa(20, "valor qualquer");

console.log(victor.atributo1)
console.log(victor.atributo2)
victor.metodo1();
victor.metodo2("Foo");
console.log(victor.metodoSoma(2,3))
console.log()

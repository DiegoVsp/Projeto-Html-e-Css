"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  var _super = _createSuper(TodoList);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _super.call(this);
    _this.usuario = 'Diego';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo Todo');
};

MinhaLista.mostraUsuario();

var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2)); // CONST e LET
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

var nome = 'Diego';
var idade = 23;
var usuario = {
  nome: nome,
  idade: idade,
  empresa: 'Rocketseat'
};
console.log(usuario);

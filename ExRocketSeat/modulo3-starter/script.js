var ul = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var button = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('lista_todos'))||[];

function mostrar(){
  ul.innerHTML = '';
  for(let todo of todos){
    var li = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href','#');

    var posicao = todos.indexOf(todo);   
    
    linkElement.setAttribute('onclick','deleteTodo('+posicao+')')

    // colocando um texto dentro de a
    var linkText = document.createTextNode(' Excluir');
    linkElement.appendChild(linkText);
    
    li.appendChild(todoText);
    li.appendChild(linkElement);
    ul.appendChild(li);
  }
}
mostrar()

function adicionar(){
  var inputValor = inputElement.value;
  todos.push(inputValor);
  inputElement.value ='';
  mostrar();
  salvarStorage();
}

button.onclick = adicionar;

function deleteTodo(posicao){
  // a partir da posicao remova o proximo item
  todos.splice(posicao, 1);
  mostrar();
  salvarStorage();
}

function salvarStorage() {
  localStorage.setItem('lista_todos', JSON.stringify(todos));
}
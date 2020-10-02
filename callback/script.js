// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   alert('Botão Clicado!')
// })


// const body = document.querySelector('body')
// const div = document.querySelector('div')
// let button = document.createElement('button')
// let texto = document.createTextNode('Login')

// button.appendChild(texto)
// div.appendChild(button)
// body.insertAdjacentElement('beforeend',button)

function newButton(nome, callback) {
  const body = document.querySelector('body')
  let button = document.createElement('button')
  let texto = document.createTextNode(`${nome}`)
  
  // Executando o callback que passamos como segundo parametro da função newButton no momento que a executamos
  // passando o button para dentro do callback
  callback(button)

  button.appendChild(texto)
  body.insertAdjacentElement('beforeend',button)

  return button;
}

newButton('Login', (button) => {
  button.style.cssText = `
  font-size: 40px;
  background-color:blue;
  color:#fff;`;

  button.addEventListener('click', () => {
    alert('Olá')
  })
})
newButton('Logout', (button) => {
  button.style.cssText = `
  font-size: 40px;
  background-color: yellow;
  color:#333;
  `;
})


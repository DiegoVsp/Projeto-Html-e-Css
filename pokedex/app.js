const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
// usando underline pois não vai ser usado esse parametro    \/
// construtor Array                    \/
const generatePokemonPromises = () => Array(150).fill().map((_, index) =>
  //começa no zero entao \/  + \/                   
  fetch(getPokemonUrl(index + 1)).then(response => response.json()))

// gerando 
const generateHTML = pokemons => pokemons.reduce((acumulador, { name, id, types }) => {
  const elementTypes = types.map(typeInfo => typeInfo.type.name)
  acumulador += `
    <li class="card ${elementTypes[0]}">
    <img class="card-image" alt="${name}" src="https://pokeres.bastionbot.org/images/pokemon/${id}.png"/>
      <h2 class="card-title">${id}. ${name}</h2>
      <p class="card-subtitle">${elementTypes.join(' | ')}</p>
    </li>`
  return acumulador
}, '')

// inserindo
const insertPokemonsIntoPage = pokemons => {
  const ul = document.querySelector('[data-js="pokedex"]')
  ul.innerHTML = pokemons
}

const pokemonPromises = generatePokemonPromises()

Promise.all(pokemonPromises)
  .then(generateHTML)
  .then(insertPokemonsIntoPage)

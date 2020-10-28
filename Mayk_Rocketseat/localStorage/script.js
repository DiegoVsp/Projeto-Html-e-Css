let favorites = JSON.parse(localStorage.getItem('favorites')) || []
const imageContainer = document.querySelector('.image')
const button = document.querySelector('button')
let allImages = document.querySelector('.all-images')
// Eventos
button.onclick = () => updateImage()
  

// clicar no container da imagem
imageContainer.onclick = () => updateAll()


// Methods
function getState() {
  const imageSource = document.querySelector('.image img').src
  
  const index = favorites.indexOf(imageSource);
  const existisInLocalStorage = index != -1

  return {imageSource, index, existisInLocalStorage }
}

function updateAll() {
  updateFavorites()
  updateClasses()
}

function updateFavorites() {
  const { existisInLocalStorage, index, imageSource } = getState()
  // existisInLocalStorage ? favorites.splice(index, 1) : favorites.push(imageSource)
  if (existisInLocalStorage) {
    favorites.splice(index, 1)
  } else { // salvar localStorage 
    favorites.push(imageSource)
  }
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

function updateClasses() {
  const { existisInLocalStorage } = getState()

  imageContainer.classList.remove('fav')

  if (existisInLocalStorage) {
    imageContainer.classList.add('fav')
  }

}
async function updateImage() {
  await getExternalImage()
  updateClasses()
}

// function imgeHa() {
//     let allImg = JSON.parse(localStorage.getItem('favorites'))
//     console.log(allImg)
//     allImg.forEach(item => {
//       allImages.innerHTML+=`<img src="${item}">`

//     })
// }
// imgeHa()


// pegar imagem externa
async function getExternalImage() {
  const response = await fetch('https://source.unsplash.com/random')
  imageContainer
    .innerHTML = `<img src="${response.url}">`

}
getExternalImage()






// var xhr = new XMLHttpRequest();

// // buscar uma informação o metodo é GET
// xhr.open('GET','https://api.github.com/users/diegovsp');
// xhr.send(null);

// xhr.onreadystatechange = function() {
//   if(xhr.readyState === 4) {
//     console.log(JSON.parse(xhr.responseText))
//   }
// }

// var minhaPromise = function() {
//   return new Promise((resolve,reject) => {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET','https://api.github.com/users/diegovsp')
//     xhr.send(null);

//     xhr.onreadystatechange = function(){
//       if(xhr.readyState ===4){
//         if(xhr.status === 200){
//           resolve(JSON.parse(xhr.responseText));
//         }else{
//           reject('Erro na requisição')
//         }
//       }
//     }
//   });
// }
// minhaPromise()
//   .then(function(response){
//     console.log(response)
//   })
//   .catch(function(error) {
//     console.warn(error)
//   })

// utilizando axios
axios.get('https://api.github.com/users/diegovsp')
  .then(function(response){
    console.log(response)
  })
  .catch(function(error){
    console.warn(error)
  })
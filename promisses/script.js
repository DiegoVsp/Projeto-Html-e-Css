// function sumNumbers() {
//   let result = 1+1
//   if(result ==2) {
//     successCallBack()
//   }else{
//     errorCallBack()
//   }
// }
// function successCallBack() {
//   console.log('Yeah! Number 2')
// }
// function errorCallBack() {
//   console.log('Oops! something wrong.')
// }
// sumNumbers()

// Example 1
// let p= new Promise((resolve,reject) => {
//    let result = 1+1
//    if(result == 2) {
//      resolve('success')
//    }else{
//      reject('Failed')
//    }
// })

// p.then((message) => {
//   console.log('This is in the then ' + message)
// }).catch((err) => {
//   console.log('This is in the Catch ' + err)
// })


const betterDeveloper = 'Diego'
// Example 2
// function whoIsBetterCallback(callback, errorCallBack) {

//   if(betterDeveloper != 'Diego' && betterDeveloper != 'Tiago') {
//     errorCallBack({
//       name: 'This is wrong',
//       message: betterDeveloper + '? Really'
//     })
//   }else{
//     callback({
//       name: betterDeveloper,
//       message: 'CDFs are the beast!'
//     })
//   }
// }
// whoIsBetterCallback((result) => {
//   console.log(result.name + '? Yeah! ' + result.message)
// }, (error) => {
//   console.log(error.name + ' ' + error.message)
// })

// COM UMA PROMISE
// function whoIsBetterCallback(callback, errorCallBack) {

//   return new Promise((resolve, reject) => {
//     if (betterDeveloper != 'Diego' && betterDeveloper != 'Tiago') {
//       reject({
//         name: 'This is wrong',
//         message: betterDeveloper + '? Really'
//       })
//     } else {
//       resolve({
//         name: betterDeveloper,
//         message: 'CDFs are the beast!'
//       })
//     }
//   })
// }

// whoIsBetterCallback()
// .then((result) => {
//   console.log(result.name + '? Yeah! ' + result.message)
// }).catch((error) => {
//   console.log(error.name + ' ' + error.message)
// })
const ul = document.getElementById('users')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then((resp) => resp.json())
.then(function (data){
  console.log(data)
  return data.map(function(users){
    let li = document.createElement('li')
    li.innerHTML = `${users.name} (${users.username})`
    ul.appendChild(li)
  })
})
.catch((error) => {
  console.log('Oops!'+ error)
})

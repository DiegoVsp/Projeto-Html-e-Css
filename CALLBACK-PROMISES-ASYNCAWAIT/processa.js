// callback > promise > async/await

const fs = require('fs')

console.log(1)

// callback
// fs.readFile('./in1.txt', (err, contents) => {
//   fs.readFile('./in2.txt', (err2, contents2) => {
//     console.log(err, contents)
//     console.log(err2, contents2)
//   })
// })

// Promise
// const readFile = file => new Promise((resolve, reject) => {
//   fs.readFile(file, (err, contents) => {
//     if (err) {
//       reject(err)
//     } else {
//       resolve(contents)
//     }
//   })
// })
// readFile('./in1.txt').then(contents => {
//   console.log(String(contents))
//   return readFile('./in2.txt')
// })
// .then(contents => {
//   console.log(String(contents))
// })

// async / await 
const init = async() => {
  try{
    const contents = await readFile('./in1.txt')
    console.log(contents)
  }catch(err){
    console.log(err)
  }
}
init().then(contents => console.log(contents))
console.log(2)

console.log(3)

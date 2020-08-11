
function getIdade(idade) {
  return new Promise(function(resolve,reject){
    setTimeout(() => {
     if(idade>=18){
       resolve()
     }else{
       reject()
     }
    }, 2000);
  })
}

getIdade(17)
  .then(()=>{
    console.log('é de MAIOR')
  })
  .catch(()=>{
    console.log('Não é de maior')
  })
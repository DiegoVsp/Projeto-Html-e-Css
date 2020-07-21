let n1=0;
let n2=1;
let numero = 4;

for(let i =0;i<numero;i++){
  let resultado = n1+n2;
  console.log(`${n1} + ${n2} = ${resultado}`)
  n2=n1
  n1=resultado
}
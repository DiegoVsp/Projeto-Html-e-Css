  let numero = 222;
  let n = 0;


  if (numero <= 100) {
    for (let i = 0; i <= 100; i++) {
      if (numero % i == 0) {
        n++
      }
    }
    if (n == 2) {
      console.log("É primo")
    } else {
      console.log("não é primo")
    }
  }else {
    console.log("número deve ser menor que 100")
  }




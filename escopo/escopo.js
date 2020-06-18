// escopo léxico

const external = () => {
  const book = 'Sapiens: Uma breve história da humanidade'
  const internal = () => {
    console.log(book.toUpperCase())
  }
  internal()
}

external()
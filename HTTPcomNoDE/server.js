const http = require('http');

// criar servidor
// const server = http.createServer()
const server = http.createServer((req,res)=>{
  // console.log('URL', req,url)
  // if(req.url == '/'){
  //   res.end('<h1>Home</h1>')
  // }
  // if(req.url =='/contato'){
  //   res.end('<h1>Contato</h1>')
  // }
  // res.end('<h1>Sem Resposta pra essa URL</h1>')

  // maneira mais enxuta
  const resp = []
  resp['/'] = ('<h1>Home</h1>')
  resp['/contato'] = ('<h1>Contato</h1>')
  resp['Sem Resposta'] = ('<h1>Sem Resposta pra essa URL</h1>')

  res.end(resp[req.url] || resp['Sem Resposta'])
})

// subir o servidor
server.listen(3001, 'localhost', () => {
  console.log('Servidor de Pé em: http://localhost:3001')
  console.log('Pra desligar o servidor o nosso servidor: CTRL+C')
})

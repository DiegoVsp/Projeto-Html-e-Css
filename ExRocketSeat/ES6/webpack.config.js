module.exports = {
  entry: './main.js', //arquivo js principal
  output: {
    path: __dirname,  //enviar arquivo convertido
    filename: 'bundle.js'
  },
  module: {
    rules: [ // como deve se comportar ao tentar importar arquivos .js
      {
        test: /\.js$/, //expressão regular
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
};
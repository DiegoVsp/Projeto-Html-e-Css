module.exports = {
  entry: ['@babel/polyfill', './src/main.js'], //arquivo js principal
  output: {
    path: __dirname + '/public', //enviar arquivo convertido
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/public'
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
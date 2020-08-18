// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//  res.send('Oláaa')
// })

// app.listen(3001);


const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


// iniciando o app
const app = express();

// iniciando o database
// mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true})
mongoose.connect('mongodb://localhost:27017/nodeapi');
requireDir('./src/models');

const Product = mongoose.model('Product');


// primeira rota
app.get('/', (req, res) => {
 Product.create({
   title: 'React Native', 
   description: 'Build native apps with React', 
   url: 'hhtps://github.com/facebook/react-native'
  });
  
 return res.send('Oláaa')
})

app.listen(3001);
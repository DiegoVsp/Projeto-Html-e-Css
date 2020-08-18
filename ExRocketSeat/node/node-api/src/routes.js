const express = require('express');
const routes = express.Router();


// primeira rota
routes.get('/', (req, res) => {
  // Product.create({
  //   title: 'React Native', 
  //   description: 'Build native apps with React', 
  //   url: 'hhtps://github.com/facebook/react-native'
  //  });
   
  return res.send('Oláaa')
 })

 modules.exports = routes
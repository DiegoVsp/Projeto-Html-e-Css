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
mongoose.set('useUnifiedTopology', true);
// iniciando o database
// mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true})
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');


// Rotas

app.use('/api', require('./src/routes'));

app.listen(3001);
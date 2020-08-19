const mongoose = require('mongoose');

const Product = mongoose.model('Product')

module.exports = {
  // buscar
  async index(req,res){
    const products = await Product.find()

    // retornar em uma estrutura json
    return res.json(products);
  },
  async store(req,res){
    const products = await Product.create(req.body);
    return res.json(products)
  }
};

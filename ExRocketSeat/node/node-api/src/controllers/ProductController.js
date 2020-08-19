const mongoose = require('mongoose');

const Product = mongoose.model('Product')

module.exports = {
  async index(req,res){
    const products = await Product.find()

    // retornar em uma estrutura json
    return res.json(products)
  }
}

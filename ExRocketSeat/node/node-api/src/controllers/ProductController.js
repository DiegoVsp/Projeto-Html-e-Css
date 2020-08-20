const mongoose = require('mongoose');

const Product = mongoose.model('Product')

module.exports = {
  // buscar
  async index(req, res) {
    // para paginacao
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 5 })

    // retornar em uma estrutura json
    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id)
    return res.json(product)

  },

  async store(req, res) {
    const products = await Product.create(req.body);
    return res.json(products)
  },
  async update(req, res) {
    //  retorna atualizado utilizando o                                          \/
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.json(products)
  },
  async destroy(req, res) {
    await Product.findByIdAndDelete(req.params.id)
    return res.json()
  }
};

import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';

export default class Product extends Component{
  state = {
    product: {},
  }
  // carregar infos do Produto
  async componentDidMount(){
    // desestruturação
    const {id} = this.props.match.params;

    //chamando a api e pegando o produto com base na id passada
    const response = await api.get(`/products/${id}`)

    // preenchendo os dados do produto com os dados que vem do response.data
    this.setState({product:response.data})
  }

  render() {
    const {product} = this.state;

    return (
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <p>
    URL: <a href={product.url}>{product.url}</a>
        </p>
      </div>
      )
  }
}
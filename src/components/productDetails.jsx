import React, { Component } from 'react';
import { getProduct } from '../services/productService';
import ProductDetailCard from './productDetailCard';

class ProductPage extends Component {
    state = { product: {} }

    async componentDidMount() {
        const { data } = await getProduct(this.props.match.params.id);
        this.setState({ product : data });
    }

    render() { 
        return (  
            < ProductDetailCard product={this.state.product}/>
         );
    }
}
 
export default ProductPage;
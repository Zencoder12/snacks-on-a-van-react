import React, { Component } from 'react';
import { getProducts } from '../services/productService';
import MenuRow from './menuRow';

class Menu extends Component {
    state = {
        products: []
     };

    async componentDidMount() {
        const { data } = await getProducts();
        this.setState({ products : data });
        console.log(data);
    }

    render() { 
        const { products } = this.state;
        return ( 
            <React.Fragment>
                <MenuRow category={'coffee'} products={products}/>
                <MenuRow category={'dessert'} products={products}/>
            </React.Fragment>
        );
    }
}
 
export default Menu;
import React, { Component } from 'react';
import { getProducts } from '../services/productService';

class Menu extends Component {
    state = { 
        products: []
     };

    async componentDidMount() {
        const productsData = await getProducts();
        console.log(productsData);

        this.setState({ products : productsData  });
    }

    render() { 
        return (  
            <h1>Menu</h1>
        );
    }
}
 
export default Menu;
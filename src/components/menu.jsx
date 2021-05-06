import React, { Component } from 'react';
import { getProducts } from '../services/productService';
import MenuRow from './menuRow';
import OrderSummarySide from './orderSummarySide';

class Menu extends Component {
    state = {
        products: []
     };

    async componentDidMount() {
        const { data } = await getProducts();
        this.setState({ products : data });
    }

    render() { 
        const { products } = this.state;
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-10">
                            <MenuRow category={'coffee'} products={products}/>
                            <MenuRow category={'dessert'} products={products}/>
                        </div>
                        <div className="col-sm-6 col-md-2">
                            <OrderSummarySide />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Menu;
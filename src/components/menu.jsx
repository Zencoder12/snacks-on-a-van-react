import React, { Component } from 'react';
import { getProducts } from '../services/productService';
import MenuRow from './menuRow';
import Cart from './cart';

class Menu extends Component {
    state = {
        products: [],
        cartItems: []
     };

    async componentDidMount() {
        const { data } = await getProducts();
        this.setState({ products : data });
    }

    handleAdd = (productName, img, price) => {
        console.log(productName);
        const orderItemId = productName + price
        const exist = this.state.cartItems.find((x) => x.id === orderItemId);
        console.log("this", exist);
        if (exist) {
            const updatedCartItems = this.state.cartItems.filter((x) => x.id !== orderItemId);
            this.setState({cartItems : [...updatedCartItems, {...exist, qty : exist.qty + 1}]});
        } 
        else {
            this.setState({cartItems :
                [...this.state.cartItems, 
                {id: orderItemId, 
                productName: productName,
                img: img, 
                price: price, qty: 1}]})
        }
    };

    handleReset = () => {
        this.setState({ cartItems: [] });
    }

    render() {
        
        const { products } = this.state;
        return ( 
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-md-9">
                            <MenuRow onAdd={this.handleAdd} category={'coffee'} products={products}/>
                            <MenuRow onAdd={this.handleAdd} category={'dessert'} products={products}/>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <Cart cartItems={this.state.cartItems} 
                            onReset={this.handleReset} 
                            onCheckOut={() => this.props.onCheckOut(this.state.cartItems)} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Menu;
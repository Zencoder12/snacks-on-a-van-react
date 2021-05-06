import React from 'react';

const Cart = ({cartItems, onReset}) => {

    const totalPrice = cartItems.reduce((a, item) => a + item.price * item.qty,0);

    return(
        <React.Fragment>
            {cartItems.length === 0 && <div className="border border-secondary rounded text-center empty-cart-container">
                <h2 className="mt-2">The cart is empty</h2>
                </div>}

            {cartItems.length > 0 &&
            <div class="container text-center cart-container">     
            <h2>ORDER SUMMARY</h2>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>PRODUCT</th>
                    <th>QTY</th>
                    <th>PRICE</th>
                </tr>
                </thead>
                <tbody>
                {cartItems.map(item => <tr>
                    <td>{item.productName}</td>
                    <td>{item.qty}</td>
                    <td>${item.price}</td>
                </tr> )}    
                </tbody>
            </table>
            <hr></hr>
            <h3><strong>{`TOTAL PRICE $${totalPrice}`}</strong></h3>
            <button onClick={onReset} type="button" class="btn btn-warning btn-block">RESET</button>
            <a href="/" type="button" class="btn btn-secondary btn-block">PROCEED TO CHECKOUT</a>
            </div>}
        </React.Fragment>
)};
 
export default Cart;
import React, { Component } from 'react';
import OrderSumaryTable from './orderSummaryTable';

class Orders extends Component {
    state = {  }
    
    render() { 
        const cartItems = JSON.parse(localStorage.getItem('cart'));
        return (  
            <div className="container">
                <div className="row">
                    <div className="col-9 border border-secondary">
                        <OrderSumaryTable cartItems={cartItems} />
                    </div>
                    <div className="col-3 border border-secondary">
                        <h2>Summary</h2>
                    </div>
                </div>
            </div>

        );
    }
}
 
export default Orders;
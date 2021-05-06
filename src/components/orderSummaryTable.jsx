import React, { Component } from 'react';
import MinusPlusButton from './common/minusPlusButton';
import MediaComponent from './mediaComponent';

class OrderSummaryTable extends Component {
    state = {  }
    render() { 

        const {cartItems} = this.props;

        return (  
            <React.Fragment>
                <div className="container">          
                    <table className="table table-condensed media-table">
                        <thead>
                        <tr>
                            <th>PRODUCT DETAILS</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>SUBTOTAL</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cartItems.map(cartItem => 
                         <tr key={cartItem.id}>
                         <MediaComponent cartItem={cartItem} />
                         <td>{cartItem.price}</td>
                         <MinusPlusButton cartItem={cartItem} />
                         <td>${cartItem.price * cartItem.qty}</td>
                        </tr>)}   
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}
 
export default OrderSummaryTable;
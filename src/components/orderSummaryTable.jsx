import React, { Component } from 'react';
import MinusPlusButton from './minusPlusButton';
import MediaComponent from './mediaComponent';

class OrderSummaryTable extends Component {
    state = {  }
    render() { 
        return (  
            <table class="table">
            <thead>
                <tr>
                    <th>PRODUCT DETAILS</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>SUBTOTAL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><MediaComponent /></td>
                    <td>Clark</td>
                    <td><MinusPlusButton /></td>
                    <td>clarkkent@mail.com</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>John</td>
                    <td><MinusPlusButton /></td>
                    <td>johncarter@mail.com</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Peter</td>
                    <td><MinusPlusButton /></td>
                    <td>peterparker@mail.com</td>
                </tr>            
            </tbody>
        </table>
        );
    }
}
 
export default OrderSummaryTable;
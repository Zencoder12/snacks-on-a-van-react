import React, { Component } from 'react';
import OrderSumaryTable from './orderSummaryTable';

class Orders extends Component {
    state = {  }
    
    render() { 
        return (  
            <div className="container">
                <div className="row">
                    <div className="col-9 border border-secondary">
                        <OrderSumaryTable />
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
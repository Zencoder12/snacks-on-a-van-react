import React, { Component } from "react";
import OrderSumaryTable from "./orderSummaryTable";

class Checkout extends Component {
  state = {};

  render() {
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    console.log(cartItems);

    return (
      <div className="container">
        <div className="row">
          <div className="border border-secondary col-sm-12">
            <OrderSumaryTable onAdd={this.props.onAdd} cartItems={cartItems} />
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;

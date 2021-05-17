import React, { Component } from "react";
import SummaryTable from "./summaryTable";

class CheckoutPage extends Component {
  state = {};

  render() {
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    return (
      <div className="checkout-container">
        <div className="sumtable-container">
          <SummaryTable onAdd={this.props.onAdd} cartItems={cartItems} />
        </div>
        <div className="side-summary-container"></div>
      </div>
    );
  }
}

export default CheckoutPage;

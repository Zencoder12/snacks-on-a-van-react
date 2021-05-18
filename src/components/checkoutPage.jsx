import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import SummaryTable from "./summaryTable";
import SummaryTableHeader from "./summaryTableHeader";
import SideSumTable from "./sideSumTable";

class CheckoutPage extends Component {
  state = {};

  render() {
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    return (
      <React.Fragment>
        <PageHeader />
        <div className="checkout-container">
          <div className="sumtable-container default-card-bg">
            <SummaryTable onAdd={this.props.onAdd} cartItems={cartItems} />
            <hr className="secondary-underline" />
            <SummaryTable onAdd={this.props.onAdd} cartItems={cartItems} />
          </div>
          <div className="side-summary-container default-card-bg">
            <SideSumTable />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CheckoutPage;

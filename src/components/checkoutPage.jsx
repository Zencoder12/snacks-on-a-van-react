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
        <PageHeader title={"ORDER SUMMARY"} />
        <div className="checkout-container">
          <div className="sumtable-container default-card-bg">
            <SummaryTableHeader />
            {cartItems.map((cartItem) => (
              <React.Fragment>
                <SummaryTable
                  onAdd={this.props.onAdd}
                  history={this.props.history}
                  key={cartItem.id}
                  cartItem={cartItem}
                />
                <hr className="secondary-underline" />
              </React.Fragment>
            ))}
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

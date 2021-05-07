import React, { Component } from "react";
import { createOrder } from "../services/orderService";
import MinusPlusButton from "./common/minusPlusButton";
import MediaComponent from "./mediaComponent";

class OrderSummaryTable extends Component {
  state = {};

  handleSubmit = async () => {
    try {
      const vendorId = "608018b9f388c7314bdb0484";
      const orderItems = JSON.parse(localStorage.getItem("cart"));
      await createOrder(vendorId, orderItems);
      window.location = "/order-confirmation";
    } catch (ex) {
      if (ex) {
        window.location = "/error";
      }
    }
  };

  handleReset = async () => {
    window.location = "/menu";
  };

  render() {
    const { cartItems, onAdd } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <table className="table table-condensed table-summary">
            <thead>
              <tr>
                <th>PRODUCT DETAILS</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td>
                    <MediaComponent cartItem={cartItem} />
                  </td>
                  <td className="mt-1">${cartItem.price}</td>
                  <td>
                    <MinusPlusButton onAdd={onAdd} cartItem={cartItem} />
                  </td>
                  <td>${cartItem.price * cartItem.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={this.handleReset}
            className="btn btn-warning btn-block font-weight-bold p-3"
          >
            RESTART ORDER
          </button>
          <button
            onClick={this.handleSubmit}
            className="btn btn-danger btn-block font-weight-bold p-3"
          >
            CONFIRM ORDER
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default OrderSummaryTable;

import React, { Component } from "react";
import { createOrder } from "../services/orderService";
import MinusPlusButton from "./common/minusPlusButton";
import MediaComponent from "./mediaComponent";

class OrderSummaryTable extends Component {
  state = {};

  handleSubmit = async () => {
    try {
      const vendorId = "607fc27e0321d9f7f3c2294f";
      const orderItems = JSON.parse(localStorage.getItem("cart"));
      await createOrder(vendorId, orderItems);
      window.location = "/order-confirmation";
    } catch (ex) {
      if (ex) {
        window.location = "/error";
      }
    }
  };

  render() {
    const { cartItems, onAdd } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <table className="table table-condensed summary-table">
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
                  <MediaComponent cartItem={cartItem} />
                  <td className="mt-1">{cartItem.price}</td>
                  <MinusPlusButton onAdd={onAdd} cartItem={cartItem} />
                  <td>${cartItem.price * cartItem.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={this.handleSubmit}
            className="btn btn-primary btn-block"
          >
            CONFIRM ORDER
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default OrderSummaryTable;

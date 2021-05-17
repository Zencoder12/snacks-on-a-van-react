import React, { Component } from "react";
import { createOrder } from "../services/orderService";
import MinusPlusButton from "./common/minusPlusButton";
import MediaComponent from "../components/common/mediaComponent";

class OrderSummaryTable extends Component {
  state = {};

  handleSubmit = async () => {
    try {
      /*
      const vendorId = "608018b9f388c7314bdb0484"; -> vendor registered in Heroku
      */
      const vendorId = "607fc27e0321d9f7f3c2294f";
      const orderItems = JSON.parse(localStorage.getItem("cart"));
      await createOrder(vendorId, orderItems);
      window.location = "/customer/order-confirmation";
    } catch (ex) {
      if (ex) {
        window.location = "/error";
      }
    }
  };

  handleReset = async () => {
    window.location = "/customer/menu";
  };

  render() {
    const { cartItems, onAdd } = this.props;

    return (
      <div className="sum-table-header">
        <div className="container">
          <dl className="d-inline-flex">
            <dd className="col-sm-9">PRODUCT DETAILS</dd>
            <dd className="col-sm-9">PRICE</dd>
            <dd className="col-sm-9">QUANTITY</dd>
            <dd className="col-sm-9">SUBTOTAL</dd>
          </dl>
        </div>
        <hr></hr>
        <div className="container sum-table-body">
          <div className="sum-table-cell">
            <MediaComponent />
          </div>
          <div className="sum-table-cell">
            <p>$ 4.5</p>
          </div>
          <div className="sum-table-cell">
            <MinusPlusButton />
          </div>
          <div className="sum-table-cell">
            <p>Subtotal</p>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderSummaryTable;

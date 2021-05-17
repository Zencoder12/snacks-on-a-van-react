import React, { Component } from "react";
import { createOrder } from "../services/orderService";
import MinusPlusButton from "./common/minusPlusButton";
import MediaComponent from "./common/mediaComponent";

class SummaryTable extends Component {
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
      <div className="container sumtable">
        <div className="sumtable__header">
          <div className="sumtable__fields">
            <h2>PRODUCT DETAILS</h2>
          </div>
          <div className="sumtable__fields sumtable__fields__price">
            <h2>PRICE</h2>
          </div>
          <div className="sumtable__fields">
            <h2>QUANTITY</h2>
          </div>
          <div className="sumtable__fields">
            <h2>SUBTOTAL</h2>
          </div>
        </div>
        <hr></hr>
        <div className="sumtable__body">
          <div className="media--sumtable">
            <MediaComponent />
          </div>
          <div className="sumtable__data">
            <div className="sumtable__price">
              <p>
                <strong>$ 4.5</strong>
              </p>
            </div>
            <div className="sumtable__minusplus__btn">
              <MinusPlusButton />
            </div>
            <div className="sumtable__subtotal">
              <p>
                <strong>$ 9.0</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SummaryTable;

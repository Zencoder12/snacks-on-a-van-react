import React, { Component } from "react";
import { getOrders } from "../services/orderService";
import OrderDetails from "./orderDetails";

class Orders extends Component {
  state = { orders: [] };

  async componentDidMount() {
    const { data } = await getOrders();
    this.setState({ orders: data });
  }

  render() {
    console.log("state", this.state.orders);

    const { orders } = this.state;

    return (
      <div id="content">
        <h1 class="text-uppercase">orders</h1>
        <div class="bg" id="bg2">
          <div class="bg" id="orderbg">
            <dl class="row" id="order_info">
              <dt class="col-sm-4">6:18PM May 7, 2021</dt>
              <dt class="col-sm-4">Order ID</dt>
              <dt class="col-sm-4 text-end">Outstanding/Fulfilled</dt>
              <dt class="col-sm-4 text-start">Outstanding/Fulfilled</dt>
            </dl>
            <table class="table table-sm" id="orders_tab">
              {/* {orders.map((order) => (
                <OrderDetails order={order} />
              ))} */}
            </table>
            <dl class="row" id="total">
              <dt class="col-sm-6">
                <span>number of</span> Items
              </dt>
              <dt class="col-sm-6 text-end">
                Total: $ <span>18.5</span>
              </dt>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;

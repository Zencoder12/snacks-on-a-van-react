import React, { Component } from "react";
import { getOrders } from "../services/orderService";
import OrderTable from "./orderTable";

class OrdersPage extends Component {
  state = { orders: [] };

  async componentDidMount() {
    const { data } = await getOrders();
    this.setState({ orders: data });
  }

  render() {
    return (
      <div className="orders-container" id="content">
        <h1 className="text-uppercase">orders</h1>
        {this.state.orders.map((order) => (
          <OrderTable key={order._id} order={order} />
        ))}
      </div>
    );
  }
}

export default OrdersPage;

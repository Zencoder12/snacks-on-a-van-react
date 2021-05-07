import React, { Component } from "react";
import { getOrders } from "../services/orderService";

class Orders extends Component {
  state = { orders: [] };

  async componentDidMount() {
    const { data } = await getOrders();
    this.setState({ orders: data });
  }

  render() {
    console.log(this.state.orders);
    return <h1>OUTSTADING ORDERS</h1>;
  }
}

export default Orders;

import React, { Component } from "react";
import NavBar from "./navBar";
import { getPastOrders } from "../services/orderService";
import OrderDetailCard from "./common/orderDetailCard";

class PastOrdersPage extends Component {
  state = { orders: [] };

  async componentDidMount() {
    const { data } = await getPastOrders();
    this.setState({ orders: data });
  }

  render() {
    const { orders } = this.state;
    console.log(this.state.orders);
    return (
      <main className="mb-5 px-2 px-md-5 pb-5 pb-lg-0">
        <NavBar user={this.props.user} />
        <h1 className="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
          Previous Orders
        </h1>
        <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center d-lg-none">
          Previous Orders
        </h1>
        <div className="px-2 row g-3">
          <div className="container p-3 rounded">
            <div className="row">
              <div className="col">
                {orders.map((order) => (
                  <OrderDetailCard key={order._id} order={order} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default PastOrdersPage;

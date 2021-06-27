import React, { Component } from "react";
import NavBar from "../common/navBar";
import { getActiveOrders } from "../../services/orderService";
import ActiveOrderDetailCard from "../activeOrderDetailCard";

class ActiveOrdersPage extends Component {
  state = { orders: [] };

  async componentDidMount() {
    try {
      const { data } = await getActiveOrders();
      this.setState({ orders: data });
    } catch (ex) {
      window.location = "/400";
    }
  }

  render() {
    const { orders } = this.state;
    return (
      <React.Fragment>
        <NavBar />
        <main className="mb-5 px-2 px-md-5 pb-5 pb-lg-0">
          {/* heading for size screen > 920px (align-left) */}
          <h1 className="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
            Active Orders
          </h1>
          {/* heading for size screen < 920px (align-left) */}
          <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center d-lg-none">
            Active Orders
          </h1>
          <div className="px-2 row g-3">
            <div className="container pb-3 px-3 rounded">
              <div className="row">
                <div className="col">
                  {orders.map((order) => (
                    <div className="col">
                      <ActiveOrderDetailCard key={order._id} order={order} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default ActiveOrdersPage;

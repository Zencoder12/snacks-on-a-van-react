import React, { Component } from "react";
import { getPastOrders } from "../../services/orderService";
import PreviousOrderDetailCard from "../previousOrderDetailCard";
import NavBar from "../common/navBar";

class PreviousOrdersPage extends Component {
  state = { orders: [] };

  async componentDidMount() {
    try {
      const { data } = await getPastOrders();
      console.log(data);
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
                    <div className="col pt-3">
                      <PreviousOrderDetailCard key={order._id} order={order} />
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

export default PreviousOrdersPage;

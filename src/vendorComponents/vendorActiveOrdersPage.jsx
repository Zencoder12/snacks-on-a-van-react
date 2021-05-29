import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VendorNavBar from "./vendorNavBar";
import ActiveOrdersCard from "./common/activeOrdersCard";
import { getVendorActiveOrders } from "../services/orderService";

const VendorActiveOrdersPage = () => {
  const [activeOrders, setActiveOrders] = useState([]);

  useEffect(async () => {
    try {
      const { data: activeOrders } = await getVendorActiveOrders();
      setActiveOrders(activeOrders);
    } catch (ex) {
      console.log(ex);
    }
  }, []);

  return (
    <React.Fragment>
      <VendorNavBar />
      <main className="mb-5 px-2 px-md-5 row g-3">
        <div className="col-md-7 col-lg-8">
          <h1 className="pt-3 pb-1 text-uppercase fw-bold d-none d-md-block">
            Active orders
          </h1>
          <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center d-md-none">
            Active orders
          </h1>
          <div className="container p-3 rounded col-lg-12">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-3">
              {activeOrders.map((order) => (
                <ActiveOrdersCard key={order._id} order={order} />
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-5 col-lg-4 d-none d-md-block">
          <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center">
            AWAITING PICK UP
          </h1>
          <div className="container pt-3 rounded">
            <div className="row">
              <div className="col">
                <div className="mb-3 card shadow-sm">
                  <div className="card-header border-0 d-flex justify-content-between text-uppercase fw-bold text-secondary py-3">
                    <p className="mb-0">No.1</p>
                    <p className="mb-0">Time</p>
                  </div>
                  <div className="card-body text-secondary text-uppercase text-center">
                    <h5 className="fw-bold py-1">3 Items</h5>
                    <h5 className="fw-bold">customer name</h5>
                    <a href="#" className="w-100 btn btn-primary fs-5 fw-bold">
                      Finished
                    </a>
                  </div>
                  <div className="card-footer border-0">
                    <h5 className="py-2 m-0 text-uppercase text-center text-danger fw-bold">
                      20% discount applied
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="fixed-bottom p-2 d-md-none">
        <div className="px-2 row">
          <a
            href="#"
            className="col btn btn-primary me-1 text-uppercase fw-bold fs-4"
            type="button"
          >
            Active Orders
          </a>
          <a
            href="#"
            className="col btn btn-primary ms-1 text-uppercase fw-bold fs-4 active"
            type="button"
          >
            Await Pickup
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default VendorActiveOrdersPage;

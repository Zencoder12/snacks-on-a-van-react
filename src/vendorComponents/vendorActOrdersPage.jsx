import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ActiveOrdersCard from "./common/activeOrdersCard";
import PickUpOrdersCard from "./common/pickUpOrdersCard";
import VendorNavBar from "./vendorNavBar";
import {
  getVendorActiveOrders,
  getReadyOrders,
} from "../services/orderService";
import { setOrderReady } from "../services/vendorService";

const VendorActOrdersPage = () => {
  const [activeOrders, setActiveOrders] = useState([]);
  const [pickUpOrders, setPickUpOrders] = useState([]);

  useEffect(async () => {
    try {
      const { data: activeOrders } = await getVendorActiveOrders();
      setActiveOrders(activeOrders);
    } catch (ex) {
      console.log(ex);
    }
  }, []);

  useEffect(async () => {
    try {
      const { data: pickUpOrders } = await getReadyOrders();
      setPickUpOrders(pickUpOrders);
    } catch (ex) {
      console.log(ex);
    }
  }, []);

  const handleOrderReady = async (readyOrder) => {
    try {
      // update active orders state
      const updatedActiveOrders = activeOrders.filter(
        (order) => order._id !== readyOrder._id
      );
      setActiveOrders(updatedActiveOrders);

      // update awaiting orders state
      const updatedPickUpOrders = [...pickUpOrders, { ...readyOrder }];
      setPickUpOrders(updatedPickUpOrders);

      await setOrderReady(readyOrder._id);
    } catch (ex) {
      console.log(ex);
    }
  };

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
                <ActiveOrdersCard
                  key={order._id}
                  order={order}
                  onOrderReady={handleOrderReady}
                />
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
              {pickUpOrders.map((order) => (
                <PickUpOrdersCard key={order._id} order={order} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed-bottom p-2 d-md-none">
        <div className="px-2 row">
          <Link
            to="#"
            className="col btn btn-primary me-1 text-uppercase fw-bold fs-4"
            type="button"
          >
            Active Orders
          </Link>
          <Link
            to="/vendor/await-orders"
            className="col btn btn-primary ms-1 text-uppercase fw-bold fs-4 active"
            type="button"
          >
            Await Pickup
          </Link>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default VendorActOrdersPage;

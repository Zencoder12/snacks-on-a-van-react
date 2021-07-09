import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ActiveOrdersCard from "../ordersCard/activeOrdersCard";
import PickUpOrdersCard from "../ordersCard/pickUpOrdersCard";
import VendorNavBar from "../common/vendorNavBar";
import {
  getVendorActiveOrders,
  getReadyOrders,
} from "../../services/orderService";
import { setOrderFulfill, setOrderReady } from "../../services/vendorService";

const VendorActOrdersPage = () => {
  const [activeOrders, setActiveOrders] = useState([]);
  const [pickUpOrders, setPickUpOrders] = useState([]);
  const activeCurrentOrdersLink = true;

  useEffect(() => {
    try {
      async function fetchActiveOrders() {
        const { data: activeOrders } = await getVendorActiveOrders();
        setActiveOrders(activeOrders);
      }
      fetchActiveOrders();
    } catch (ex) {
      window.location = "/400";
    }
  }, []);

  useEffect(() => {
    try {
      async function fetchReadyOrders() {
        const { data: pickUpOrders } = await getReadyOrders();
        setPickUpOrders(pickUpOrders);
      }

      fetchReadyOrders();
    } catch (ex) {
      window.location = "/400";
    }
  }, []);

  const handleOrderReady = async (readyOrder) => {
    try {
      /* make a safe copy to revert to the original state
      in case an error occurs while contacting the server */
      var activeOrdersCopy = activeOrders;
      var pickUpOrdersCopy = pickUpOrders;

      // update active orders state
      const updatedActiveOrders = activeOrders.filter(
        (order) => order._id !== readyOrder._id
      );
      setActiveOrders(updatedActiveOrders);

      // check whether the order is discounted or not
      const isDiscounted = calcTime(new Date(readyOrder.orderTime), new Date());

      await setOrderReady(readyOrder._id, isDiscounted);

      // fetch the ready orders again so we can get the order with the updated discounted property
      const { data: updatePickUpOrders } = await getReadyOrders();
      setPickUpOrders(updatePickUpOrders);
    } catch (ex) {
      toast.warning("The operation failed. Please try again.");
      setActiveOrders(activeOrdersCopy);
      setPickUpOrders(pickUpOrdersCopy);
    }
  };

  const handleFinishOrder = async (finishedOrder) => {
    try {
      var pickUpOrdersCopy2 = pickUpOrders;

      // update active orders state
      const updatedPickUpOrders = pickUpOrders.filter(
        (order) => order._id !== finishedOrder._id
      );
      setPickUpOrders(updatedPickUpOrders);

      await setOrderFulfill(finishedOrder._id);
    } catch (ex) {
      toast.warning("The operation failed. Please try again.");
      setPickUpOrders(pickUpOrdersCopy2);
    }
  };

  const calcTime = (orderTime, currentTime) => {
    return currentTime - orderTime > 900000;
  };

  return (
    <React.Fragment>
      <VendorNavBar activeCurrentOrdersLink={activeCurrentOrdersLink} />
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
        {/* Hide await pick-up for small devices */}
        <div className="col-md-5 col-lg-4 d-none d-md-block">
          <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center">
            AWAITING PICK UP
          </h1>
          <div className="container pt-3 rounded">
            <div className="row">
              {pickUpOrders.map((order) => (
                <PickUpOrdersCard
                  key={order._id}
                  order={order}
                  onFinishOrder={handleFinishOrder}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      {/* Show footer only for small devices */}
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useInterval from "../common/useInterval";
import { cancelOrder, getOneOrder } from "../../services/orderService";
import Countdown from "../common/countdown";
import ProgressBar from "../common/progressBar";
import NavBar from "../common/navBar";
import ProgressBarStatic from "../common/progressBarStatic";

const TrackOrderPage = (props) => {
  const [isReady, setIsReady] = useState(false);
  const notClickable = true;
  const currentOrder = JSON.parse(sessionStorage.getItem("currentOrder"));

  {
    /* check every 15 seconds whether the order is ready for pick-up */
  }
  useInterval(async () => {
    const { data: order } = await getOneOrder(currentOrder._id);
    setIsReady(order.isReady);
  }, 15000);

  const handleChangeOrder = () => {
    // check whether the order is ready
    if (isReady)
      return toast.warning(
        "The order is already ready for pick-up, cannot change the order."
      );

    // check whether within 10 minutes
    if (!isWithinTimeLimit(new Date(currentOrder.orderTime), new Date()))
      return toast.warning(
        "It has already been already more than 10 minutes, cannot change the order. "
      );

    props.history.push("/customer/menu");
  };

  const handleCancelOrder = async () => {
    try {
      // check whether the order is ready
      if (isReady)
        return toast.warning(
          "The order is already ready for pick-up, cannot change the order."
        );

      // check whether within 10 minutes
      if (!isWithinTimeLimit(new Date(currentOrder.orderTime), new Date()))
        return toast.warning(
          "It has already been already more than 10 minutes, cannot change the order. "
        );

      await cancelOrder(currentOrder._id);

      sessionStorage.removeItem("currentOrder");
      sessionStorage.removeItem("cart");
      window.location = "/customer/menu";
    } catch (ex) {
      window.location = "/400";
    }
  };

  const handleConfirmOrder = () => {
    sessionStorage.removeItem("currentOrder");
    sessionStorage.removeItem("cart");
    window.location = "/customer/menu";
  };

  const isWithinTimeLimit = (orderTime, currentTime) => {
    return currentTime - orderTime < 600000;
  };

  return (
    <React.Fragment>
      <NavBar notClickable={notClickable} />
      <main className="mb-5 px-2 px-md-5 pb-lg-0">
        <h1 className="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
          Track your order
        </h1>
        <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center d-lg-none">
          Track your order
        </h1>
        <div className="px-2 row g-3">
          <div className="container p-3 rounded">
            <div className="row">
              <div className="col">
                {!isReady && (
                  <div className="p-3 p-lg-5 card shadow-sm text-center">
                    <h3 className="fw-bold text-secondary d-none d-lg-block text-uppercase">
                      Changed your mind? You can change or cancel your order
                      within:
                    </h3>
                    <div className="text-secondary d-none d-md-block d-lg-none">
                      <h4 className="fw-bold pe-2">Change your mind?</h4>
                      <h4 className="fw-bold">
                        You can change or cancel your order within:
                      </h4>
                    </div>
                    <div className="text-secondary d-md-none">
                      <h5 className="fw-bold pe-2">Change your mind?</h5>
                      <h5 className="fw-bold">
                        Change or cancel your order within:
                      </h5>
                    </div>
                    <h1
                      className="py-3 py-lg-5 fw-bold display-1"
                      id="count-down"
                    >
                      <Countdown
                        orderTime={currentOrder.orderTime}
                        minutes={10}
                      />
                    </h1>
                    <div className="mt-3 d-grid gap-3 d-lg-flex justify-content-lg-center">
                      <button
                        className="btn btn-lg btn-primary px-lg-5 fs-3 fw-bold"
                        type="button"
                        onClick={handleChangeOrder}
                      >
                        CHANGE ORDER
                      </button>
                      <Link to="/customer/menu">
                        <button
                          className="btn btn-lg btn-primary px-lg-5 fs-3 fw-bold"
                          type="button"
                          onClick={handleCancelOrder}
                        >
                          CANCEL ORDER
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
                {isReady && (
                  <div className="p-3 p-lg-5 card shadow-sm text-center">
                    <h3 className="fw-bold text-secondary d-none d-lg-block text-uppercase">
                      Your order is ready for collection! Please
                    </h3>
                    <h3 className="fw-bold text-secondary d-none d-lg-block text-uppercase">
                      pick up your order and click confirm to finalize it.
                    </h3>
                    <div className="text-secondary d-none d-md-block d-lg-none">
                      <h4 className="fw-bold pe-2">
                        Your order is ready for collection!
                      </h4>
                      <h4 className="fw-bold">
                        Click confirm order to finalize.
                      </h4>
                    </div>
                    <div className="text-secondary d-md-none">
                      <h5 className="fw-bold pe-2">Your order is ready!</h5>
                      <h5 className="fw-bold">Click confirm to finalize.</h5>
                    </div>
                    <div className="mt-3 d-grid gap-3 d-lg-flex justify-content-lg-center">
                      <button
                        className="btn btn-lg btn-primary px-lg-5 fs-3 fw-bold mt-3"
                        type="button"
                        onClick={handleConfirmOrder}
                      >
                        CONFIRM ORDER
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="row gap-lg-3 mt-3">
              <div className="col-12 col-lg">
                <div className="pt-3 card border-0" id="finish"></div>
                <div className="text-center">
                  <h2 className="pt-3 text-uppercase text-secondary">
                    <i className="fas fa-check-double pe-3"></i>Order Placed
                  </h2>
                  <h2 className="d-lg-none">
                    <i className="fas fa-angle-double-down"></i>
                  </h2>
                </div>
              </div>
              <div className="col-12 col-lg">
                <div className="pt-3 card border-0" id="finish"></div>
                <div className="text-center">
                  <h2 className="pt-3 text-uppercase text-secondary">
                    <i className="fas fa-concierge-bell fa-lg pe-3"></i>Making
                    Order
                  </h2>
                  <h2 className="d-lg-none text-secondary">
                    <i className="fas fa-angle-double-down"></i>
                  </h2>
                </div>
              </div>
              <div className="col-12 col-lg">
                {isReady && (
                  <div className="pt-3 card border-0" id="finish"></div>
                )}
                {!isReady && <div className="pt-3 card border-0"></div>}
                <div className="text-center">
                  <h2 className="pt-3 text-uppercase text-secondary">
                    <i className="fas fa-store pe-3"></i>Ready In Store
                  </h2>
                </div>
              </div>
            </div>
            {!isReady && <ProgressBar orderTime={currentOrder.orderTime} />}
            {isReady && (
              <ProgressBarStatic orderTime={currentOrder.orderTime} />
            )}
            <div className="row mt-3 text-center text-secondary">
              <h4 className="d-none d-md-block">
                Note: If order is not ready within 15 mins, you will receive a
                20% discount for the next order. Please don't close this tab
                until the order is completed.
              </h4>
              <h5 className="d-md-none">
                Note: If order is not ready within 15 mins, you will receive a
                20% discount for this order. Please don't close this tab until
                the order is completed.
              </h5>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default TrackOrderPage;

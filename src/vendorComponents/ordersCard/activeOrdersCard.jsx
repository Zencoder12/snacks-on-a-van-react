import React from "react";
import ActiveOrdersCardItem from "./activeOrdersCardItem";
import ProgressBar from "../../customerComponents/common/progressBar";

const ActiveOrdersCard = ({ onOrderReady, order }) => {
  const progressBarSmall = true;
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div className="card-header border-0 d-flex justify-content-between text-uppercase fw-bold text-secondary py-3">
          <p className="mb-0">{order._id}</p>
          <p className="mb-0">{order.customerName}</p>
        </div>
        <div className="card-body mb-1">
          {order.orderItems.map((item) => (
            <ActiveOrdersCardItem key={item.productName} item={item} />
          ))}
        </div>
        <div className="card-footer p-0 border-0" id="card">
          <div className="mx-3 mb-3">
            <button
              className="w-100 btn btn-primary fs-5 fw-bold"
              onClick={() => onOrderReady(order)}
            >
              READY FOR PICK UP
            </button>
          </div>
          <ProgressBar
            orderTime={order.orderTime}
            progressBarSmall={progressBarSmall}
          />
        </div>
      </div>
    </div>
  );
};

export default ActiveOrdersCard;

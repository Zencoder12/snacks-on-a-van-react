import React from "react";

import ActiveOrdersCardItem from "./activeOrdersCardItem";

const ActiveOrdersCard = ({ onOrderReady, order }) => {
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
          <div className="progress position-relative" id="van-progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <h5
                className="mb-0 position-absolute top-25 w-100 text-center fw-bold"
                id="prg-time"
              >
                14:59
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveOrdersCard;

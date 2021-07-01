import React from "react";

const OrderDetailHeader = ({ order }) => {
  const date = new Date(order.orderTime).toDateString();
  return (
    <React.Fragment>
      <div className="pb-xl-3 d-flex justify-content-between" id="cart-heading">
        <h4 className="fw-bold">Order ID: {order._id} </h4>
        <h4 className="fw-bold">{date}</h4>
      </div>
      {/* table header for screen sizes > 768px */}
      <div
        className="row pb-3 fs-4 fw-bold text-uppercase border-bottom d-none d-md-flex"
        id="cart-heading"
      >
        <div className="col-6 col-lg-5">product details</div>
        <div className="col-3 d-none d-lg-block text-center">Unit price</div>
        <div className="col-3 col-lg-2 text-center">quantity</div>
        <div className="col-3 col-lg-2 text-end">subtotal</div>
      </div>
      {/* table header for screen sizes <= 768px */}
      <div
        className="row pb-3 fs-5 fw-bold text-uppercase border-bottom d-md-none"
        id="cart-heading"
      >
        <div className="col-6">product</div>
        <div className="col-3 col-xl-2 text-center">qty</div>
        <div className="col-3 col-xl-2 text-end">sub</div>
      </div>
    </React.Fragment>
  );
};

export default OrderDetailHeader;

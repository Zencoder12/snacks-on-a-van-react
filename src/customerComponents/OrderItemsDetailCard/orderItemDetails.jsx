import React from "react";

const OrderItemDetails = ({ item }) => {
  return (
    <div className="row py-3 fs-4 cart-prd border-bottom">
      <div className="col-6 col-lg-5 d-flex flex-row justify-content-start">
        <div>
          <img
            src={"https://i.ibb.co" + item.img100}
            className="img-fluid me-3 rounded d-none d-md-block"
            alt={item.productName}
          />
          <img
            src={"https://i.ibb.co" + item.img50}
            className="img-fluid me-1 rounded d-md-none"
            alt={item.productName}
          />
        </div>
        <div>
          <h4 className="highlight2 fw-bold text-uppercase">
            {item.productName}
          </h4>
          <h5 className="text-capitalize fst-italic">{item.size}</h5>
        </div>
      </div>
      {/* price displayed only for screen sizes > 920px */}
      <div className="col-3 d-none d-lg-block text-center">${item.price}</div>
      <div className="col-3 col-lg-2 text-center">{item.qty}</div>
      <div className="col-3 col-lg-2 text-end">${item.price * item.qty}</div>
    </div>
  );
};

export default OrderItemDetails;

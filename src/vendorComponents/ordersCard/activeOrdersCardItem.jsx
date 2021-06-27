import React from "react";

const ActiveOrdersCardItem = ({ item }) => {
  return (
    <div className="row text-uppercase pt-2">
      <div className="col-2 highlight1 fw-bold fs-5">{item.size[0]}</div>
      <div className="col-8 text-secondary fs-5">{item.productName}</div>
      <div className="col-2 highlight3 fw-bold text-end fs-5">{item.qty}</div>
    </div>
  );
};

export default ActiveOrdersCardItem;

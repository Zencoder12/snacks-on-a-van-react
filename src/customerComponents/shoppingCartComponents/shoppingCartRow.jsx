import React from "react";
import MinusPlusButton from "./minusPlusButton";

const ShoppingCartRow = ({ item, onAdd, onRemove }) => {
  return (
    <div className="row py-3 fs-4 cart-prd border-bottom">
      <div className="col-6 d-flex flex-row justify-content-start">
        <div>
          <img
            src={"https://i.ibb.co" + item.img100}
            className="rounded me-3 d-none d-md-block"
            alt={item.productName}
          />
          <img
            src={"https://i.ibb.co" + item.img50}
            className="rounded me-1 d-md-none"
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
      <div className="col-2 d-none d-xl-block text-center">${item.price}</div>
      <div className="col-3 col-xl-2 text-center p-0">
        <MinusPlusButton item={item} onAdd={onAdd} onRemove={onRemove} />
      </div>
      <div className="col-3 col-xl-2 text-end">${item.price * item.qty}</div>
    </div>
  );
};

export default ShoppingCartRow;

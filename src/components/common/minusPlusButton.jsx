import React from "react";

const MinusPlusButton = ({ cartItem, onAdd }) => {
  return (
    <React.Fragment>
      {/* <button className="btn btn-outline-secondary btn-sm border border-0">-</button> */}
      <span className="control-label d-inline mx-2 px-4 py-1">
        {cartItem.qty}
      </span>
      {/* <button onClick={() => onAdd(cartItem.productName, cartItem.img, cartItem.price)} className="btn btn-outline-secondary btn-sm border border-0">+</button> */}
    </React.Fragment>
  );
};

export default MinusPlusButton;

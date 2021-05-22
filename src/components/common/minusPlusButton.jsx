import React from "react";

const MinusPlusButton = ({ cartItem, onAdd }) => {
  return (
    <React.Fragment>
      <div className="minus-plus-container">
        <button className="btn btn-outline-secondary btn-sm border border-0 mt-0">
          -
        </button>
        <span className="count__label">{cartItem.qty}</span>
        <button
          className="btn btn-outline-secondary btn-sm border border-0 mt-0"
          onClick={() =>
            onAdd(cartItem.productName, cartItem.img, cartItem.price)
          }
        >
          +
        </button>
      </div>
    </React.Fragment>
  );
};

export default MinusPlusButton;

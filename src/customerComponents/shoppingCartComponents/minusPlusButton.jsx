import React from "react";

const MinusPlusButton = ({ item, onAdd, onRemove }) => {
  return (
    <React.Fragment>
      <div className="minus-plus-container">
        <button
          className="btn btn-outline-secondary btn-sm border border-0 mt-0 btn-left"
          onClick={() => onRemove(item.productName, item.price)}
        >
          -
        </button>
        <span className="count__label">{item.qty}</span>
        <button
          className="btn btn-outline-secondary btn-sm border border-0 mt-0 btn-right"
          onClick={() => onAdd(item.productName, item.price)}
        >
          +
        </button>
      </div>
    </React.Fragment>
  );
};

export default MinusPlusButton;

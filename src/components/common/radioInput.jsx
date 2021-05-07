import React from "react";

const RadioInput = ({ prices, onChange, selectedPrice, product }) => {
  return (
    <div>
      {prices.map((price) => (
        <div className="radio border border-light mb-2 pt-2" key={price}>
          <input
            className="mx-2"
            type="radio"
            name="prices"
            value={price}
            onChange={(e) => onChange(e.target.value)}
          />
          <label>${price}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioInput;

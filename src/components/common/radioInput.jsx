import React from "react";

const RadioInput = ({ prices, onChange, sizes }) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="radio-group flex-fill">
        {prices.map((price) => (
          <div className="radio mb-2 pt-2" key={price}>
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
      <div className="size-group flex-fill">
        {sizes.map((size) => (
          <div className="size-box mb-2 pt-2 pr-2">
            <p className="mb-2">{size}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioInput;

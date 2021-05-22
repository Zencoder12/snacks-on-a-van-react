import React from "react";

const RadioItem = ({ size, price }) => {
  return (
    <label className="btn border fs-5">
      <input
        className="form-check-input me-1"
        type="radio"
        name="price"
        value={price}
      />
      <span>
        ${price} {size}
      </span>
    </label>
  );
};

export default RadioItem;

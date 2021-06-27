import React from "react";
import RadioItem from "./radioItem";

const RadioGroup = ({ prices, onChange, selectedPrice }) => {
  const rows = [];

  for (const [key, value] of Object.entries(prices))
    rows.push(
      <RadioItem
        key={key}
        size={key}
        price={value}
        onChange={onChange}
        selectedPrice={selectedPrice}
      />
    );

  return <div className="d-grid gap-1 radio-group">{rows}</div>;
};

export default RadioGroup;

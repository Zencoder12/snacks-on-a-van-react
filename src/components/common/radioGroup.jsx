import React from "react";
import RadioItem from "./radioItem";

const RadioGroup = ({ prices }) => {
  const rows = [];

  for (const [key, value] of Object.entries(prices))
    rows.push(<RadioItem size={key} price={value} />);

  return <div className="d-grid gap-1 radio-group">{rows}</div>;
};

export default RadioGroup;

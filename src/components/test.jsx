import React from "react";

const Test = ({ product }) => {
  console.log(product.prices);

  for (const [key, value] of Object.entries(product.prices)) {
    console.log(key);
    console.log(value);
  }

  return <h2>product</h2>;
};

export default Test;

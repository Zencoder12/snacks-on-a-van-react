import React from "react";

const CartRow = ({ item }) => {
  return (
    <tr>
      <td scope="row">{item.productName}</td>
      <td className="text-center">{item.size}</td>
      <td className="text-center">x {item.qty}</td>
      <td className="text-end">${item.price * item.qty}</td>
    </tr>
  );
};

export default CartRow;

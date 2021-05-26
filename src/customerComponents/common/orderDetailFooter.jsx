import React from "react";

const OrderDetailFooter = ({ order }) => {
  const orderItems = order.orderItems;
  const totalQty = orderItems.reduce((a, item) => a + item.qty, 0);
  const total = orderItems.reduce((a, item) => a + item.qty * item.price, 0);

  return (
    <div className="pt-3 d-flex justify-content-between" id="cart-heading">
      <h4 className="fw-bold">{totalQty} Items</h4>
      <h4 className="fw-bold">
        Total: <span>${total}</span>
      </h4>
    </div>
  );
};

export default OrderDetailFooter;

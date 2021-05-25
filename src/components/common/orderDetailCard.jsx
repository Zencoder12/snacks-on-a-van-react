import React from "react";
import OrderDetailHeader from "./orderDetailHeader";
import OrderDetailItem from "./orderDetailItem";
import OrderDetailFooter from "./orderDetailFooter";

const OrderDetailCard = ({ order }) => {
  return (
    <div className="p-3 p-xxl-5 card shadow-sm h-100">
      <OrderDetailHeader key={order._id} order={order} />
      {order.orderItems.map((item) => (
        <OrderDetailItem key={item.id} item={item} />
      ))}
      <OrderDetailFooter key={order._id} order={order} />
    </div>
  );
};

export default OrderDetailCard;

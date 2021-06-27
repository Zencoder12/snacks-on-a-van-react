import React from "react";
import OrderDetailHeader from "./OrderItemsDetailCard/orderDetailHeader";
import OrderItemDetails from "./OrderItemsDetailCard/orderItemDetails";
import OrderDetailFooter from "./OrderItemsDetailCard/orderDetailFooter";

const PreviousOrderDetailCard = ({ order }) => {
  return (
    <div className="p-3 p-xxl-5 card shadow-sm h-100">
      <OrderDetailHeader key={order._id} order={order} />
      {order.orderItems.map((item) => (
        <OrderItemDetails key={item.id} item={item} />
      ))}
      <OrderDetailFooter key={order._id} order={order} />
    </div>
  );
};

export default PreviousOrderDetailCard;

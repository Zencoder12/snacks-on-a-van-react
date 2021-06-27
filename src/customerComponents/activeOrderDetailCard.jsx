import React from "react";
import { Link } from "react-router-dom";
import OrderDetailHeader from "./OrderItemsDetailCard/orderDetailHeader";
import OrderItemDetails from "./OrderItemsDetailCard/orderItemDetails";
import OrderDetailFooter from "./OrderItemsDetailCard/orderDetailFooter";

const ActiveOrderDetailCard = ({ order }) => {
  return (
    <div className="mt-3 p-3 p-xxl-5 card shadow-sm h-100">
      <OrderDetailHeader key={order._id} order={order} />
      {order.orderItems.map((item) => (
        <OrderItemDetails key={item.id} item={item} />
      ))}
      <OrderDetailFooter key={order._id} order={order} />
      <Link
        to="./track order.html"
        className="w-100 btn btn-primary mt-3 fs-4 fw-bold text-uppercase"
      >
        view details
      </Link>
    </div>
  );
};

export default ActiveOrderDetailCard;

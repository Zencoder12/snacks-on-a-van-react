import React from "react";
import PreviousOrdersDetailsFooter from "./previousOrdersDetailFooter";
import PreviousOrdersDetailHeader from "./previousOrdersDetailHeader";
import PreviousOrdersDetailItem from "./previousOrdersDetailItem";

const PreviousOrdersDetailCard = ({ order }) => {
  return (
    <div className="p-3 p-xxl-5 card shadow-sm h-100">
      <PreviousOrdersDetailHeader order={order} />
      {order.orderItems.map((orderItem) => (
        <PreviousOrdersDetailItem item={orderItem} />
      ))}
      <PreviousOrdersDetailsFooter order={order} />
    </div>
  );
};

export default PreviousOrdersDetailCard;

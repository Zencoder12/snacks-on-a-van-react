import React from "react";
import OrderItem from "./orderItem";

const OrderTable = ({ order }) => {
  const orderItems = order.orderItems;

  const totalPerItem = [];
  orderItems.forEach(function (orderItem) {
    const itemTotal = orderItem.price * orderItem.qty;
    totalPerItem.push(itemTotal);
  });

  const orderTotal = totalPerItem.reduce((a, b) => a + b);

  return (
    <div className="bg" id="bg2">
      <div className="bg" id="orderbg">
        <dl className="row" id="order_info">
          <dt className="col-sm-4">ORDER ID:{order._id}</dt>
          <dt className="col-sm-4">TIME:{order.orderTime}</dt>
        </dl>
        <table className="table table-sm" id="orders_tab">
          <thead>
            <tr>
              <th scope="col">Order Details</th>
              <th scope="col" className="text-center">
                Price
              </th>
              <th scope="col" className="text-center">
                Quantity
              </th>
              <th scope="col" className="text-center">
                Subtotal
              </th>
            </tr>
          </thead>
          {orderItems.map((orderItem) => (
            <OrderItem key={orderItem.id} orderItem={orderItem} />
          ))}
        </table>
        <dl className="row" id="total">
          <dt className="col-sm-6 text-right">
            <span></span>
          </dt>
          <dt className="col-sm-6 text-right">
            Total: $ <span className="mr-5">{orderTotal}</span>
          </dt>
        </dl>
      </div>
    </div>
  );
};

export default OrderTable;

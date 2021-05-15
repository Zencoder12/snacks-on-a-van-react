import React from "react";

const OrderItem = ({ orderItem }) => {
  return (
    <tbody>
      <tr>
        <th scope="row">
          <div className="order-details-img-box">
            <img
              src={"https://i.pinimg.com/originals/" + orderItem.img}
              className="order-details-img rounded float-start"
              alt=""
            />
          </div>
          <span>{orderItem.productName}</span>
        </th>
        <td className="text-center" style={{ verticalAlign: "middle" }}>
          ${orderItem.price}
        </td>
        <td className="text-center" style={{ verticalAlign: "middle" }}>
          x{orderItem.qty}
        </td>
        <td className="text-center" style={{ verticalAlign: "middle" }}>
          ${orderItem.price * orderItem.qty}
        </td>
      </tr>
    </tbody>
  );
};

export default OrderItem;

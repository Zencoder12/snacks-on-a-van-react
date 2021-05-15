import React from "react";

const OrderDetails = ({ orderItem }) => {
  return (
    <React.Fragment>
      <thead>
        <tr>
          <th scope="col">Order Details</th>
          <th scope="col">Price</th>
          <th scope="col" className="text-center">
            Quantity
          </th>
          <th scope="col" className="text-end">
            Subtotal
          </th>
        </tr>
      </thead>
      <tbody>
        {orderItem.map((orderItem) => (
          <tr>
            <th scope="row">
              <div className="order-details-img-box">
                <img
                  src={"https://i.pinimg.com/originals/" + orderItem.img}
                  className="order-details-img rounded float-start"
                  alt={orderItem.productName}
                />
              </div>
              <span>{orderItem.productName}</span>
            </th>
            <td>${orderItem.price}</td>
            <td className="text-center">x{orderItem.qty}</td>
            <td className="text-end">${orderItem.price * orderItem.qty}</td>
          </tr>
        ))}
      </tbody>
    </React.Fragment>
  );
};

export default OrderDetails;

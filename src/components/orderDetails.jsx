import React from "react";

const OrderDetails = ({ order }) => {
  console.log("order details are:", order);

  return (
    <React.Fragment>
      <thead>
        <tr>
          <th scope="col">Product Details</th>
          <th scope="col">Price</th>
          <th scope="col" class="text-center">
            Quantity
          </th>
          <th scope="col" class="text-end">
            Subtotal
          </th>
        </tr>
      </thead>
      <tbody>
        {order.map((orderItem) => (
          <tr>
            <th scope="row">
              <img
                src="./images/7.jpeg"
                class="rounded float-start"
                alt="Hot Chocolate"
              />
              <span>{orderItem.productName}</span>
            </th>
            <td>${orderItem.price}</td>
            <td class="text-center">x1</td>
            <td class="text-end">$ 4.5</td>
          </tr>
        ))}
      </tbody>
    </React.Fragment>
  );
};

export default OrderDetails;

import React from "react";

const CartRow = ({ item }) => {
  console.log("item in cart row:", item);

  return (
    <div class="row py-3 fs-4 cart-prd border-bottom">
      <div class="col-6 d-flex flex-row justify-content-start">
        <div>
          <img
            src={"https://i.ibb.co" + item.img100}
            class="rounded me-3 d-none d-md-block"
            alt="Cappuccino"
          />
          <img
            src={"https://i.ibb.co" + item.img50}
            class="rounded me-1 d-md-none"
            alt="Cappuccino"
          />
        </div>
        <div>
          <h4 class="highlight2 fw-bold text-uppercase">{item.productName}</h4>
          <h5 class="text-capitalize fst-italic">{item.size}</h5>
        </div>
      </div>
      <div class="col-2 d-none d-xl-block text-center">${item.price}</div>
      <div class="col-3 col-xl-2 text-center">{item.qty}</div>
      <div class="col-3 col-xl-2 text-end">${item.price}</div>
    </div>
  );
};

export default CartRow;

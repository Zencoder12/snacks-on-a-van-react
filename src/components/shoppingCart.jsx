import React from "react";

const ShoppingCart = () => {
  return (
    <div class="col-md-4 d-none d-lg-block">
      <h1 class="pt-3 pb-1 text-uppercase fw-bold text-center">
        order summary
      </h1>
      <div class="pt-3 table-responsive container rounded fs-5">
        <table class="table align-middle">
          <thead>
            <tr>
              <tr>
                <th scope="col">Product</th>
                <th scope="col" class="text-center">
                  Size
                </th>
                <th scope="col" class="text-center">
                  Qty
                </th>
                <th scope="col" class="text-end">
                  Sub
                </th>
              </tr>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">Latte</td>
              <td class="text-center">Small</td>
              <td class="text-center">x1</td>
              <td class="text-end">$4.0</td>
            </tr>
            <tr>
              <td scope="row">Cappuccino</td>
              <td class="text-center">Medium</td>
              <td class="text-center">x1</td>
              <td class="text-end">$4.5</td>
            </tr>
          </tbody>
          <tfoot class="fs-4">
            <th class="text-uppercase">Total:</th>
            <th colspan="3" class="text-end">
              $8.5
            </th>
          </tfoot>
        </table>
        <a
          href="./cart.html"
          class="w-100 btn btn-primary my-3 text-uppercase fs-5 fw-bold"
        >
          proceed to checkout
        </a>
      </div>
    </div>
  );
};

export default ShoppingCart;

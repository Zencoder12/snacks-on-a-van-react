import React, { Component } from "react";
import NavBar from "./navBar";
import CartRow from "./cartRow";
import { Link } from "react-router-dom";

class Cart2 extends Component {
  state = {};

  render() {
    const { cartItems, user } = this.props;

    const totalQty = cartItems.reduce((a, item) => a + item.qty, 0);

    const total = cartItems.reduce((a, item) => a + item.price * item.qty, 0);

    return (
      <main class="px-2 px-md-5 pb-5 pb-lg-0">
        <NavBar user={user} />
        <h1 class="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
          Shopping Cart
        </h1>
        <h1 class="pt-3 pb-1 text-uppe rcase fw-bold text-center d-lg-none">
          Shopping Cart
        </h1>
        <div class="px-2 row g-3">
          <div class="container p-3 rounded">
            <div class="row row-cols-1 row-cols-lg-2 g-3">
              <div class="col-lg-8">
                <div class="container p-3 p-xl-5 card shadow-sm">
                  <div
                    class="row pb-3 fs-4 fw-bold text-uppercase border-bottom d-none d-md-flex"
                    id="cart-heading"
                  >
                    <div class="col-6">product details</div>
                    <div class="col-2 d-none d-xl-block text-center">price</div>
                    <div class="col-3 col-xl-2 text-center">quantity</div>
                    <div class="col-3 col-xl-2 text-end">subtotal</div>
                  </div>
                  <div
                    class="row pb-3 fs-5 fw-bold text-uppercase border-bottom d-md-none"
                    id="cart-heading"
                  >
                    <div class="col-6">product</div>
                    <div class="col-3 col-xl-2 text-center">qty</div>
                    <div class="col-3 col-xl-2 text-end">sub</div>
                  </div>
                  {cartItems.map((item) => (
                    <CartRow item={item} />
                  ))}
                </div>
              </div>
              <div class="col-lg-4">
                <div class="p-3 p-xl-5 card shadow-sm">
                  <h2 class="pb-3 text-uppercase fw-bold text-center border-bottom">
                    order summary
                  </h2>
                  <div class="pt-3 d-flex flex-row justify-content-between fw-bold">
                    <div class="text-uppercase text-secondary fs-4">
                      Number of items
                    </div>
                    <div class="fs-4 highlight1">{totalQty}</div>
                  </div>
                  <div class="pb-3 d-flex flex-row justify-content-between border-bottom fw-bold">
                    <div class="text-uppercase text-secondary fs-4">Total</div>
                    <div class="fs-4 highlight1">${total}</div>
                  </div>

                  <h4 class="pt-3 fw-bold text-secondary text-uppercase">
                    Pickup Vendor:
                  </h4>
                  <h4 class="text-uppercase fw-bold highlight1">
                    866 koelpin pass, VIC
                  </h4>
                  <Link
                    href="./location.html"
                    class="pb-3 fs-5 border-bottom highlight2"
                  >
                    change vendor
                  </Link>
                  <Link
                    href="./cart.html"
                    class="w-100 btn btn-primary mt-3 py-3 text-uppercase fs-4 fw-bold"
                  >
                    proceed to checkout
                  </Link>
                </div>
                <div class="mt-3 p-3 card shadow-sm text-center">
                  <Link
                    href="./menu.html"
                    class="text-uppercase fw-bold fs-4 text-decoration-none highlight2"
                  >
                    <i class="fas fa-chevron-left pe-3"></i>continue shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Cart2;

import React, { Component } from "react";
import NavBar from "./navBar";
import ShoppingCartRow from "./shoppingCartRow";
import { Link } from "react-router-dom";

class ShoppingCart extends Component {
  state = {};

  render() {
    const { cartItems, onAdd, onRemove, user } = this.props;

    const totalQty = cartItems.reduce((a, item) => a + item.qty, 0);

    const total = cartItems.reduce((a, item) => a + item.price * item.qty, 0);

    return (
      <main className="px-2 px-md-5 pb-5 pb-lg-0">
        <NavBar user={user} />
        <h1 className="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
          Shopping Cart
        </h1>
        <h1 className="pt-3 pb-1 text-uppe rcase fw-bold text-center d-lg-none">
          Shopping Cart
        </h1>
        <div className="px-2 row g-3">
          <div className="container p-3 rounded">
            <div className="row row-cols-1 row-cols-lg-2 g-3">
              <div className="col-lg-8">
                <div className="p-3 p-xl-5 card shadow-sm">
                  <div
                    className="row pb-3 fs-4 fw-bold text-uppercase border-bottom d-none d-md-flex"
                    id="cart-heading"
                  >
                    <div className="col-6">product details</div>
                    <div className="col-2 d-none d-xl-block text-center">
                      price
                    </div>
                    <div className="col-3 col-xl-2 text-center">quantity</div>
                    <div className="col-3 col-xl-2 text-end">subtotal</div>
                  </div>
                  <div
                    className="row pb-3 fs-5 fw-bold text-uppercase border-bottom d-md-none"
                    id="cart-heading"
                  >
                    <div className="col-6">product</div>
                    <div className="col-3 col-xl-2 text-center">qty</div>
                    <div className="col-3 col-xl-2 text-center">sub</div>
                  </div>
                  {cartItems.map((item) => (
                    <ShoppingCartRow
                      item={item}
                      onAdd={onAdd}
                      onRemove={onRemove}
                    />
                  ))}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="p-3 p-xl-5 card shadow-sm">
                  <h2 className="pb-3 text-uppercase fw-bold text-center border-bottom">
                    order summary
                  </h2>
                  <div className="pt-3 d-flex flex-row justify-content-between fw-bold">
                    <div className="text-uppercase text-secondary fs-4">
                      Number of items
                    </div>
                    <div className="fs-4 highlight1">{totalQty}</div>
                  </div>
                  <div className="pb-3 d-flex flex-row justify-content-between border-bottom fw-bold">
                    <div className="text-uppercase text-secondary fs-4">
                      Total
                    </div>
                    <div className="fs-4 highlight1">${total}</div>
                  </div>

                  <h4 className="pt-3 fw-bold text-secondary text-uppercase">
                    Pickup Vendor:
                  </h4>
                  <h4 className="text-uppercase fw-bold highlight1">
                    866 koelpin pass, VIC
                  </h4>
                  <Link
                    to="./location.html"
                    className="pb-3 fs-5 border-bottom highlight2"
                  >
                    change vendor
                  </Link>
                  <Link
                    to="./cart.html"
                    className="w-100 btn btn-primary mt-3 py-3 text-uppercase fs-4 fw-bold"
                  >
                    proceed to checkout
                  </Link>
                </div>
                <div className="mt-3 p-3 card shadow-sm text-center">
                  <Link
                    to="./menu.html"
                    className="text-uppercase fw-bold fs-4 text-decoration-none highlight2"
                  >
                    <i className="fas fa-chevron-left pe-3"></i>continue
                    shopping
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

export default ShoppingCart;

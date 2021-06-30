import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createOrder, changeOrder } from "../../services/orderService";
import { getCurrentVendor } from "../../services/vendorService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartRow from "../shoppingCartComponents/shoppingCartRow";
import NavBar from "../common/navBar";

class ShoppingCartPage extends Component {
  state = {};

  handleSubmitOrder = async () => {
    try {
      const orderItems = JSON.parse(localStorage.getItem("cart"));
      const currentOrder = JSON.parse(localStorage.getItem("currentOrder"));

      if (currentOrder) {
        // first check if there is already a order in the local storage
        const { data: updatedOrder } = await changeOrder(
          currentOrder._id,
          orderItems
        );

        localStorage.setItem("currentOrder", JSON.stringify(updatedOrder));
        // if there isn't a current order create a new one
      } else {
        const vendor = getCurrentVendor();
        const { data: order } = await createOrder(
          vendor.vendorName,
          orderItems
        );
        localStorage.setItem("currentOrder", JSON.stringify(order));
      }

      this.props.history.push("/customer/tracking-order");
    } catch (ex) {
      if (ex) {
        window.location = "/400";
      }
    }
  };

  render() {
    const { onAdd, onRemove } = this.props;

    const vendor = getCurrentVendor();

    const location = vendor.address;

    const cartItems = JSON.parse(localStorage.getItem("cart"));

    const sortedCart = cartItems.sort((a, b) => (a.id > b.id ? 1 : -1));

    const totalQty = cartItems.reduce((a, item) => a + item.qty, 0);

    const total = cartItems.reduce((a, item) => a + item.price * item.qty, 0);

    return (
      <React.Fragment>
        <NavBar />
        <main className="px-2 px-md-5 pb-5 pb-lg-0">
          {/* heading for screens sizes > 920px (aligned-left) */}
          <h1 className="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
            Shopping Cart
          </h1>
          {/* heading for screens sizes < 920px (aligned-center) */}
          <h1 className="pt-3 pb-1 text-uppe rcase fw-bold text-center d-lg-none">
            Shopping Cart
          </h1>
          <div className="px-2 row g-3">
            <div className="container p-3 rounded">
              <div className="row row-cols-1 row-cols-lg-2 g-3">
                {/* items summary table container. stacked for screens size < 920px */}
                <div className="col-lg-8">
                  <div className="p-3 p-xl-5 card shadow-sm">
                    {/* table header */}
                    <div
                      className="row pb-3 fs-4 fw-bold text-uppercase border-bottom d-none d-md-flex"
                      id="cart-heading"
                    >
                      <div className="col-6">product details</div>
                      {/* price only available screen size > 1200px */}
                      <div className="col-2 d-none d-xl-block text-center">
                        price
                      </div>
                      <div className="col-3 col-xl-2 text-center">quantity</div>
                      <div className="col-3 col-xl-2 text-center">subtotal</div>
                    </div>
                    <div
                      className="row pb-3 fs-5 fw-bold text-uppercase border-bottom d-md-none"
                      id="cart-heading"
                    >
                      <div className="col-6">product</div>
                      <div className="col-3 col-xl-2 text-center">qty</div>
                      <div className="col-3 col-xl-2 text-end">sub</div>
                    </div>
                    {sortedCart.map((item) => (
                      <ShoppingCartRow
                        key={item.id}
                        item={item}
                        onAdd={onAdd}
                        onRemove={onRemove}
                      />
                    ))}
                  </div>
                </div>
                {/* order summary card container. stacked for screen size < 920px */}
                <div className="col-lg-4">
                  <div className="p-3 p-xl-5 card shadow-sm">
                    <h2 className="pb-3 text-uppercase fw-bold text-center border-bottom">
                      order summary
                    </h2>
                    {/* order summary number of items */}
                    <div className="pt-3 d-flex flex-row justify-content-between fw-bold">
                      <div className="text-uppercase text-secondary fs-4">
                        Number of items
                      </div>
                      <div className="fs-4 highlight1">{totalQty}</div>
                    </div>
                    {/* order summary total price */}
                    <div className="pb-3 d-flex flex-row justify-content-between border-bottom fw-bold">
                      <div className="text-uppercase text-secondary fs-4">
                        Total
                      </div>
                      <div className="fs-4 highlight1">${total}</div>
                    </div>
                    <h4 className="pt-3 fw-bold text-secondary text-uppercase">
                      Pickup Location:
                    </h4>
                    <h4 className="text-uppercase fw-bold highlight1">
                      {location}
                    </h4>
                    <Link
                      to="/customer/select-vendor"
                      className="pb-3 fs-5 border-bottom highlight2"
                    >
                      change vendor
                    </Link>
                    <button
                      className="w-100 btn btn-primary mt-3 py-3 text-uppercase fs-4 fw-bold"
                      onClick={this.handleSubmitOrder}
                    >
                      finalize order
                    </button>
                  </div>
                  {/* continue shopping button */}
                  <div className="mt-3 p-3 card shadow-sm text-center">
                    <Link
                      to="/customer/menu"
                      className="text-uppercase fw-bold fs-4 text-decoration-none highlight2"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} className="me-3" />
                      continue shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default ShoppingCartPage;

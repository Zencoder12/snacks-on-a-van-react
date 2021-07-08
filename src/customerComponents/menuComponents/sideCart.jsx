import React from "react";
import { toast } from "react-toastify";
import SideCartRow from "./sideCartRow";

const SideCart = ({ cartItems, props }) => {
  const total = cartItems.reduce((a, item) => a + item.price * item.qty, 0);

  sessionStorage.setItem("cart", JSON.stringify(cartItems));

  const handleCheckout = () => {
    const orderItems = JSON.parse(sessionStorage.getItem("cart"));

    if (!orderItems || orderItems.length == 0) {
      return toast.warning(
        "Please add at least 1 item before proceeding to checkout."
      );
    } else {
      props.history.push("/customer/checkout");
    }
  };

  return (
    <div className="col-md-4 d-none d-lg-block">
      <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center">
        order summary
      </h1>
      <div className="pt-3 table-responsive container rounded fs-5">
        <table className="table align-middle">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col" className="text-center">
                Size
              </th>
              <th scope="col" className="text-center">
                Qty
              </th>
              <th scope="col" className="text-end">
                Sub
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <SideCartRow key={item.id} item={item} />
            ))}
          </tbody>
          <tfoot className="fs-4">
            <th className="text-uppercase">Total:</th>
            <th colSpan="3" className="text-end">
              ${total}
            </th>
          </tfoot>
        </table>
        <button
          className="w-100 btn btn-primary my-3 text-uppercase fs-5 fw-bold"
          onClick={handleCheckout}
        >
          view order details
        </button>
      </div>
    </div>
  );
};

export default SideCart;

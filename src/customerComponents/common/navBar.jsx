import React from "react";
import { Link } from "react-router-dom";
import auth from "../../services/authService";
import { getCurrentVendor } from "../../services/vendorService";

{
  /* not clickable props allows to set the navbar as inactive */
}
const NavBar = ({ notClickable }) => {
  const vendor = getCurrentVendor();
  const user = auth.getCurrentUser();

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between p-3 px-md-5 fw-bold sticky-top">
      <Link
        to="/customer/select-vendor"
        className="d-flex align-items-center col-md-3 mb-md-2 mb-md-0 text-decoration-none text-start"
      >
        {vendor && (
          <span className="fs-5">
            Location: <u className="fw-normal">{vendor.address}</u>
          </span>
        )}
        {!vendor && (
          <span className="fs-5">
            Location: <u className="fw-normal"></u>
          </span>
        )}
      </Link>
      {notClickable && (
        <ul className="nav col-12 col-md-auto mb-md-2 justify-content-center mb-md-0">
          <li className="nav-item mt-2">
            <span className="px-4 fs-5 current">Menu</span>
          </li>
          <li className="nav-item mt-2">
            <span className="px-4 fs-5 current">Cart</span>
          </li>
          <li className="nav-item mt-2">
            <span className="px-4 fs-5 current">Orders</span>
          </li>
        </ul>
      )}

      {!notClickable && (
        <ul className="nav col-12 col-md-auto mb-md-2 justify-content-center mb-md-0">
          <li className="nav-item">
            <Link to="/customer/menu" className="nav-link px-4 fs-5 current">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/customer/checkout" className="nav-link px-4 fs-5">
              Cart
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="/customer/checkout"
              className="nav-link dropdown-toggle px-4 fs-5"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Orders
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item fs-5"
                  to="/customer/active-orders"
                >
                  Active Orders
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item fs-5"
                  to="/customer/previous-orders"
                >
                  Previous Orders
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      )}
      <div className="col-md-3 text-end">
        {!user && (
          <Link
            to="/customer/profile"
            className="text-uppercase text-decoration-none dropdown-toggle fs-5"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hi, <u>Customer</u>
          </Link>
        )}
        {user && (
          <Link
            to="/customer/profile"
            className="text-uppercase text-decoration-none dropdown-toggle fs-5"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hi, <u>{user.firstName}</u>
          </Link>
        )}
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item fs-5" to="/customer/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="dropdown-item fs-5" to="/customer/logout">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;

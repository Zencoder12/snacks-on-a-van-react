import React from "react";
import { Link } from "react-router-dom";

const MenuLinks = ({ activeCartLink, activeOrdersLink, notClickable }) => {
  return (
    <React.Fragment>
      {/* tracking page rendering */}
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
      {/* menu page rendering */}
      {!notClickable && !activeCartLink && !activeOrdersLink && (
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
                  Active Order
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

      {/* cart page rendering */}
      {!notClickable && activeCartLink && (
        <ul className="nav col-12 col-md-auto mb-md-2 justify-content-center mb-md-0">
          <li className="nav-item">
            <Link to="/customer/menu" className="nav-link px-4 fs-5">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/customer/checkout"
              className="nav-link px-4 fs-5 current"
            >
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

      {/* orders page rendering */}
      {!notClickable && activeOrdersLink && (
        <ul className="nav col-12 col-md-auto mb-md-2 justify-content-center mb-md-0">
          <li className="nav-item">
            <Link to="/customer/menu" className="nav-link px-4 fs-5">
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
              className="nav-link dropdown-toggle px-4 fs-5 current"
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
    </React.Fragment>
  );
};

export default MenuLinks;

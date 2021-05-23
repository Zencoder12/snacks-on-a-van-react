import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between p-3 px-md-5 fw-bold sticky-top">
      <Link
        to="./location.html"
        className="d-flex align-items-center col-md-3 mb-md-2 mb-md-0 text-decoration-none text-start"
      >
        <span className="fs-5">
          Location:{" "}
          <u className="fw-normal">866 Koelpin Pass, New Aidenmouth</u>
        </span>
      </Link>

      <ul className="nav col-12 col-md-auto mb-md-2 justify-content-center mb-md-0">
        <li className="nav-item">
          <Link to="/customer/menu" className="nav-link px-4 fs-5 current">
            Menu
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/customer/shopping-cart-mobile"
            className="nav-link px-4 fs-5"
          >
            Cart
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            to="/customer/orders"
            className="nav-link dropdown-toggle px-4 fs-5"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Orders
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item fs-5" to="./upcoming orders.html">
                Upcoming Orders
              </Link>
            </li>
            <li>
              <Link className="dropdown-item fs-5" to="./previous orders.html">
                Previous Orders
              </Link>
            </li>
          </ul>
        </li>
      </ul>

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
            <Link className="dropdown-item fs-5" to="./profile.html">
              Profile
            </Link>
          </li>
          <li>
            <Link className="dropdown-item fs-5" to="./guest menu.html">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;

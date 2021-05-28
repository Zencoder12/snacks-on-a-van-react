import React from "react";
import { Link } from "react-router-dom";
import { getCurrentLocation } from "../services/vendorService";

const VendorNavBar = () => {
  const vendorLocation = getCurrentLocation();

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between p-3 px-md-5 fw-bold sticky-top">
      <Link
        className="d-flex align-items-center col-md-3 mb-md-2 mb-md-0 text-decoration-none text-start current"
        href="./vendor past order.html"
      >
        <span className="fs-5 text-uppercase">previous orders</span>
      </Link>

      <Link
        className="nav col-12 col-md-auto mb-md-2 justify-content-center mb-md-0 text-decoration-none"
        href="./vendor current order.html"
      >
        <span className="fs-5 text-uppercase">Current Orders</span>
      </Link>

      <div className="col-md-3 text-end">
        {vendorLocation && (
          <Link
            className="text-uppercase text-decoration-none dropdown-toggle fs-5"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hi, <u>{vendorLocation.vendorName}</u>
          </Link>
        )}
        {!vendorLocation && (
          <Link
            className="text-uppercase text-decoration-none dropdown-toggle fs-5"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hi, <u>Vendor</u>
          </Link>
        )}
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item fs-5" to="/vendor/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="dropdown-item fs-5" href="./vendor home.html">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default VendorNavBar;

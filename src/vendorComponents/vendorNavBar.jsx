import React from "react";
import { Link } from "react-router-dom";
import { getCurrentLocation } from "../services/vendorService";

const VendorNavBar = () => {
  const vendorLocation = getCurrentLocation();

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between p-3 px-md-5 fw-bold sticky-top">
      <Link
        className="py-1 col-6 col-md-3 text-center text-md-start text-decoration-none current"
        to="/vendor/active-orders"
      >
        <span className="fs-5 text-uppercase">Current Orders</span>
      </Link>
      <Link
        className="py-1 col-6 col-md-auto text-center text-md-start text-decoration-none"
        to="/vendor/previous-orders"
      >
        <span className="fs-5 text-uppercase">Previous Orders</span>
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
            <Link className="dropdown-item fs-5" to="/vendor/logout">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default VendorNavBar;

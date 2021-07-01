import React from "react";
import { Link } from "react-router-dom";
import auth from "../../services/authService";
import MenuLinks from "../vendorNavBarComponents/menuLinks";

const VendorNavBar = ({
  activeCurrentOrdersLink,
  activePreviousOrdersLink,
}) => {
  const vendor = auth.getCurrentUser();

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between p-3 px-md-5 fw-bold sticky-top">
      <MenuLinks
        activeCurrentOrdersLink={activeCurrentOrdersLink}
        activePreviousOrdersLink={activePreviousOrdersLink}
      />

      <div className="col-md-3 text-end">
        {vendor && (
          <Link
            className="text-uppercase text-decoration-none dropdown-toggle fs-5"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hi, <u>{vendor.vendorName}</u>
          </Link>
        )}
        {!vendor && (
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

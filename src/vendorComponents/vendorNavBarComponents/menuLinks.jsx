import React from "react";
import { Link } from "react-router-dom";

const MenuLinks = ({ activeCurrentOrdersLink, activePreviousOrdersLink }) => {
  return (
    <React.Fragment>
      {activeCurrentOrdersLink && (
        <React.Fragment>
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
        </React.Fragment>
      )}
      {activePreviousOrdersLink && (
        <React.Fragment>
          <Link
            className="py-1 col-6 col-md-3 text-center text-md-start text-decoration-none"
            to="/vendor/active-orders"
          >
            <span className="fs-5 text-uppercase">Current Orders</span>
          </Link>
          <Link
            className="py-1 col-6 col-md-auto text-center text-md-start text-decoration-none current"
            to="/vendor/previous-orders"
          >
            <span className="fs-5 text-uppercase">Previous Orders</span>
          </Link>
        </React.Fragment>
      )}
      {!activeCurrentOrdersLink && !activePreviousOrdersLink && (
        <React.Fragment>
          <Link
            className="py-1 col-6 col-md-3 text-center text-md-start text-decoration-none"
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
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default MenuLinks;

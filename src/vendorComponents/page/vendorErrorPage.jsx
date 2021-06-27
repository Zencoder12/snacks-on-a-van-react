import React from "react";
import { Link } from "react-router-dom";
import VendorNavBar from "../common/vendorNavBar";

const vendorErrorPage = () => {
  return (
    <React.Fragment>
      <VendorNavBar />
      <main class="row p-3 p-md-5 h-100">
        <div class="col d-lg-none d-xl-block"></div>
        <div class="col-12 col-md-5 col-lg-5">
          <img
            src="https://i.ibb.co/PWWPVSn/log.png"
            class="img-fluid my-auto"
            id="error-logo"
          />
        </div>
        <div class="col d-lg-none d-xl-block"></div>
        <div class="col-12 col-lg-7 col-xl-6 my-auto">
          <div class="text-center text-lg-start py-5 gap-3">
            <h1 class="display-1 text-uppercase fw-bold">
              Oops! Something went wrong :(
            </h1>
            <h2>
              Looks like your are not logged in as a vendor. Please go to the
              homepage and select login as vendor.
            </h2>
            <Link to="/" class="btn btn-primary mt-3 fs-5 fw-bold">
              Back to home
            </Link>
          </div>
        </div>
        <div class="col d-lg-none d-xl-block"></div>
      </main>
    </React.Fragment>
  );
};

export default vendorErrorPage;

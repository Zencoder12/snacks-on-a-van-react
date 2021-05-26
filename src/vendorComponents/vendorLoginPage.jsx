import React from "react";
import { Link } from "react-router-dom";
import VendorLoginForm from "./vendorLoginForm";

const VendorLoginPage = () => {
  return (
    <main id="index-page">
      <div className="vertical-center">
        <div className="col-12">
          <div className="row justify-content-center align-items-center g-5 px-3">
            <div className="col-8 col-lg-3 px-1 py-3 me-md-5">
              <img
                src="https://i.ibb.co/PWWPVSn/log.png"
                className="img-fluid"
                alt="brand-logo"
              />
            </div>
            <div className="col-10 col-lg-4 px-1 mt-1 ms-md-4">
              <div className="card border-0 shadow-sm">
                <div className="p-4 px-4">
                  <h2 className="py-3 text-uppercase fw-bold text-center">
                    Vendor login
                  </h2>
                  <VendorLoginForm />
                  <div className="text-center">
                    <Link
                      to="/vendor/register"
                      className="text-decoration-none"
                    >
                      <span className="text-secondary ">
                        Not yet a vendor? Join now!
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VendorLoginPage;

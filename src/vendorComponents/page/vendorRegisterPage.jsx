import React from "react";
import VendorRegisterForm from "../formComponents/vendorRegisterForm";

const VendorRegisterPage = () => {
  return (
    <main id="index-page">
      {/* center elements and allow real state to take 100% height */}
      <div className="vertical-center">
        {/* container takes viewport 100% width */}
        <div className="col-12">
          {/* LOGO -> stack vertical and after lg becomes horizontal */}
          <div className="row justify-content-center align-items-center g-5 px-3">
            <div className="col-8 col-lg-3 px-1 py-3 me-md-5">
              <img
                src="https://i.ibb.co/PWWPVSn/log.png"
                className="img-fluid"
                alt="brand-logo"
              />
            </div>
            {/* FORM -> stack vertical and after lg becomes horizontal */}
            <div className="col-10 col-lg-6 px-1 mt-1 ms-md-4 px-4">
              <div className="card border-0 shadow-sm">
                <div className="p-4 px-xxl-5">
                  <h2 className="py-3 text-center text-uppercase fw-bold">
                    Vendor register
                  </h2>
                  <VendorRegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VendorRegisterPage;

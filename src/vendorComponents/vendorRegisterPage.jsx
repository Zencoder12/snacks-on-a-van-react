import React from "react";

const VendorRegisterPage = () => {
  return (
    <main id="index-page">
      <div className="vertical-center">
        <div className="col-12">
          <div className="row justify-content-center align-items-center g-5 px-3">
            <div className="col-8 col-lg-3 px-1 py-3">
              <img
                src="https://i.ibb.co/PWWPVSn/log.png"
                className="img-fluid"
                alt="brand-logo"
              />
            </div>
            <div className="col-10 col-lg-6 px-1 mt-1">
              <div className="card border-0 shadow-sm">
                <div className="p-4 px-xxl-5">
                  <h2 className="py-3 text-center text-uppercase fw-bold">
                    Vendor register
                  </h2>

                  <div className="mb-3 row">
                    <label
                      htmlFor="reg-first-name"
                      className="col-12 col-md-4 col-xl-3 col-form-label fs-5"
                    >
                      First Name:
                    </label>
                    <div className="col-12 col-md-8 col-xl-9">
                      <input
                        type="text"
                        className="form-control fs-5"
                        id="reg-first-name"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="reg-last-name"
                      className="col-12 col-md-4 col-xl-3 col-form-label fs-5"
                    >
                      Last Name:
                    </label>
                    <div className="col-12 col-md-8 col-xl-9">
                      <input
                        type="text"
                        className="form-control fs-5"
                        id="reg-family-name"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="reg-vendor-name"
                      className="col-12 col-md-4 col-xl-3 col-form-label fs-5"
                    >
                      Vendor Name:
                    </label>
                    <div className="col-12 col-md-8 col-xl-9">
                      <input
                        type="text"
                        className="form-control fs-5"
                        id="reg-vendor-name"
                        placeholder="Vendor name"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="reg-email"
                      className="col-12 col-md-4 col-xl-3 col-form-label fs-5"
                    >
                      Email:
                    </label>
                    <div className="col-12 col-md-8 col-xl-9">
                      <input
                        type="email"
                        className="form-control fs-5"
                        id="reg-email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="reg-contact"
                      className="col-12 col-md-4 col-xl-3 col-form-label fs-5"
                    >
                      Contact Details:
                    </label>
                    <div className="col-12 col-md-8 col-xl-9">
                      <input
                        type="text"
                        className="form-control fs-5"
                        id="reg-contact"
                        placeholder="Contact Details"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="reg-psw"
                      className="col-12 col-md-4 col-xl-3 col-form-label fs-5"
                    >
                      Password:
                    </label>
                    <div className="col-12 col-md-8 col-xl-9">
                      <input
                        type="password"
                        className="form-control fs-5"
                        id="reg-psw"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="reg-psw2"
                      className="col-12 col-md-4 col-xl-3 col-form-label fs-5"
                    >
                      Confirm password:
                    </label>
                    <div className="col-12 col-md-8 col-xl-9">
                      <input
                        type="password"
                        className="form-control fs-5"
                        id="reg-psw2"
                        placeholder="Confirm password"
                      />
                    </div>
                  </div>

                  <a
                    href="./vendor register.html"
                    className="w-100 btn btn-primary btn-lg my-3 my-md-4 text-uppercase fs-4 fw-bold"
                  >
                    register
                  </a>
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

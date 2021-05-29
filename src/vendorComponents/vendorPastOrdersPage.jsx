import React from "react";
import VendorNavBar from "./vendorNavBar";

const VendorPastOrdersPage = () => {
  return (
    <React.Fragment>
      <VendorNavBar />
      <main className="mb-5 px-2 px-md-5 pb-5 pb-lg-0">
        <h1 className="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
          Past Orders
        </h1>
        <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center d-lg-none">
          Past Orders
        </h1>
        <div className="px-2 row g-3">
          <div className="container p-3 rounded">
            <div className="p-3 mb-3 p-xxl-5 card shadow-sm h-30">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control text-uppercase"
                  placeholder="Search order number"
                  aria-label="order number"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="p-3 p-xxl-5 card shadow-sm h-100">
                  <div
                    className="pb-xl-3 d-flex justify-content-between"
                    id="cart-heading"
                  >
                    <h4 className="fw-bold">Order ID</h4>
                    <h4 className="fw-bold">18:18 May 7, 2021</h4>
                  </div>
                  <div
                    className="row pb-3 fs-4 fw-bold text-uppercase border-bottom d-none d-md-flex"
                    id="cart-heading"
                  >
                    <div className="col-6 col-lg-5">product details</div>
                    <div className="col-3 d-none d-lg-block text-center">
                      Unit price
                    </div>
                    <div className="col-3 col-lg-2 text-center">quantity</div>
                    <div className="col-3 col-lg-2 text-end">subtotal</div>
                  </div>
                  <div
                    className="row pb-3 fs-5 fw-bold text-uppercase border-bottom d-md-none"
                    id="cart-heading"
                  >
                    <div className="col-6">product</div>
                    <div className="col-3 col-xl-2 text-center">qty</div>
                    <div className="col-3 col-xl-2 text-end">sub</div>
                  </div>
                  <div className="row py-3 fs-4 cart-prd border-bottom">
                    <div className="col-6 col-lg-5 d-flex flex-row justify-content-start">
                      <div>
                        <img
                          src="./images/sqr latte.jpg"
                          className="img-fluid me-3 rounded d-none d-md-block"
                          alt="Latte"
                        />
                        <img
                          src="./images/sm sqr latte.png"
                          className="img-fluid me-1 rounded d-md-none"
                          alt="Latte"
                        />
                      </div>
                      <div>
                        <h4 className="highlight2 fw-bold text-uppercase">
                          Latte
                        </h4>
                        <h5 className="text-capitalize fst-italic">Small</h5>
                      </div>
                    </div>
                    <div className="col-3 d-none d-lg-block text-center">
                      $4.0
                    </div>
                    <div className="col-3 col-lg-2 text-center">1</div>
                    <div className="col-3 col-lg-2 text-end">$4.0</div>
                  </div>
                  <div className="row py-3 fs-4 cart-prd border-bottom">
                    <div className="col-6 col-lg-5 d-flex flex-row justify-content-start">
                      <div>
                        <img
                          src="./images/sqr cappuccino.jpeg"
                          className="rounded me-3 d-none d-md-block"
                          alt="Cappuccino"
                        />
                        <img
                          src="./images/sm sqr cappucino.png"
                          className="rounded me-1 d-md-none"
                          alt="Cappuccino"
                        />
                      </div>
                      <div>
                        <h4 className="highlight2 fw-bold text-uppercase">
                          Cappuccino
                        </h4>
                        <h5 className="text-capitalize fst-italic">medium</h5>
                      </div>
                    </div>
                    <div className="col-3 d-none d-lg-block text-center">
                      $4.5
                    </div>
                    <div className="col-3 col-lg-2 text-center">1</div>
                    <div className="col-3 col-lg-2 text-end">$4.5</div>
                  </div>
                  <div
                    className="pt-3 d-flex justify-content-between"
                    id="cart-heading"
                  >
                    <h4 className="fw-bold">2 Items</h4>
                    <h4 className="fw-bold">
                      Total: <span>$8.5</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col">
                <div className="p-3 p-xxl-5 card shadow-sm h-100">
                  <div
                    className="pb-xl-3 d-flex justify-content-between"
                    id="cart-heading"
                  >
                    <h4 className="fw-bold">Order ID</h4>
                    <h4 className="fw-bold">18:18 May 7, 2021</h4>
                  </div>
                  <div
                    className="row pb-3 fs-4 fw-bold text-uppercase border-bottom d-none d-md-flex"
                    id="cart-heading"
                  >
                    <div className="col-6 col-lg-5">product details</div>
                    <div className="col-3 d-none d-lg-block text-center">
                      Unit price
                    </div>
                    <div className="col-3 col-lg-2 text-center">quantity</div>
                    <div className="col-3 col-lg-2 text-end">subtotal</div>
                  </div>
                  <div
                    className="row pb-3 fs-5 fw-bold text-uppercase border-bottom d-md-none"
                    id="cart-heading"
                  >
                    <div className="col-6">product</div>
                    <div className="col-3 col-xl-2 text-center">qty</div>
                    <div className="col-3 col-xl-2 text-end">sub</div>
                  </div>
                  <div className="row py-3 fs-4 cart-prd border-bottom">
                    <div className="col-6 col-lg-5 d-flex flex-row justify-content-start">
                      <div>
                        <img
                          src="./images/sqr latte.jpg"
                          className="img-fluid me-3 rounded d-none d-md-block"
                          alt="Latte"
                        />
                        <img
                          src="./images/sm sqr latte.png"
                          className="img-fluid me-1 rounded d-md-none"
                          alt="Latte"
                        />
                      </div>
                      <div>
                        <h4 className="highlight2 fw-bold text-uppercase">
                          Latte
                        </h4>
                        <h5 className="text-capitalize fst-italic">Small</h5>
                      </div>
                    </div>
                    <div className="col-3 d-none d-lg-block text-center">
                      $4.0
                    </div>
                    <div className="col-3 col-lg-2 text-center">1</div>
                    <div className="col-3 col-lg-2 text-end">$4.0</div>
                  </div>
                  <div className="row py-3 fs-4 cart-prd border-bottom">
                    <div className="col-6 col-lg-5 d-flex flex-row justify-content-start">
                      <div>
                        <img
                          src="./images/sqr cappuccino.jpeg"
                          className="rounded me-3 d-none d-md-block"
                          alt="Cappuccino"
                        />
                        <img
                          src="./images/sm sqr cappucino.png"
                          className="rounded me-1 d-md-none"
                          alt="Cappuccino"
                        />
                      </div>
                      <div>
                        <h4 className="highlight2 fw-bold text-uppercase">
                          Cappuccino
                        </h4>
                        <h5 className="text-capitalize fst-italic">medium</h5>
                      </div>
                    </div>
                    <div className="col-3 d-none d-lg-block text-center">
                      $4.5
                    </div>
                    <div className="col-3 col-lg-2 text-center">1</div>
                    <div className="col-3 col-lg-2 text-end">$4.5</div>
                  </div>
                  <div
                    className="pt-3 d-flex justify-content-between"
                    id="cart-heading"
                  >
                    <h4 className="fw-bold">2 Items</h4>
                    <h4 className="fw-bold">
                      Total: <span>$8.5</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default VendorPastOrdersPage;

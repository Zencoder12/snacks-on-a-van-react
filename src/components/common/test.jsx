import React, { Component } from "react";

const Test = () => {
  return (
    <main class="mb-5 px-2 px-md-5 pb-5 pb-lg-0">
      <h1 class="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
        Upcoming Orders
      </h1>
      <h1 class="pt-3 pb-1 text-uppercase fw-bold text-center d-lg-none">
        Upcoming Orders
      </h1>
      <div class="px-2 row g-3">
        <div class="container p-3 rounded">
          <div class="row">
            <div class="col">
              <div class="p-3 p-xxl-5 card shadow-sm h-100">
                <div
                  class="pb-xl-3 d-flex justify-content-between"
                  id="cart-heading"
                >
                  <h4 class="fw-bold">Order ID</h4>
                  <h4 class="fw-bold">18:18 May 7, 2021</h4>
                </div>
                <div
                  class="row pb-3 fs-4 fw-bold text-uppercase border-bottom d-none d-md-flex"
                  id="cart-heading"
                >
                  <div class="col-6 col-lg-5">product details</div>
                  <div class="col-3 d-none d-lg-block text-center">
                    Unit price
                  </div>
                  <div class="col-3 col-lg-2 text-center">quantity</div>
                  <div class="col-3 col-lg-2 text-end">subtotal</div>
                </div>
                <div
                  class="row pb-3 fs-5 fw-bold text-uppercase border-bottom d-md-none"
                  id="cart-heading"
                >
                  <div class="col-6">product</div>
                  <div class="col-3 col-xl-2 text-center">qty</div>
                  <div class="col-3 col-xl-2 text-end">sub</div>
                </div>

                <div class="row py-3 fs-4 cart-prd border-bottom">
                  <div class="col-6 col-lg-5 d-flex flex-row justify-content-start">
                    <div>
                      <img
                        src="./images/sqr latte.jpg"
                        class="img-fluid me-3 rounded d-none d-md-block"
                        alt="Latte"
                      />
                      <img
                        src="./images/sm sqr latte.png"
                        class="img-fluid me-1 rounded d-md-none"
                        alt="Latte"
                      />
                    </div>
                    <div>
                      <h4 class="highlight2 fw-bold text-uppercase">Latte</h4>
                      <h5 class="text-capitalize fst-italic">Small</h5>
                    </div>
                  </div>
                  <div class="col-3 d-none d-lg-block text-center">$4.0</div>
                  <div class="col-3 col-lg-2 text-center">1</div>
                  <div class="col-3 col-lg-2 text-end">$4.0</div>
                </div>

                <div class="row py-3 fs-4 cart-prd border-bottom">
                  <div class="col-6 col-lg-5 d-flex flex-row justify-content-start">
                    <div>
                      <img
                        src="./images/sqr cappuccino.jpeg"
                        class="rounded me-3 d-none d-md-block"
                        alt="Cappuccino"
                      />
                      <img
                        src="./images/sm sqr cappucino.png"
                        class="rounded me-1 d-md-none"
                        alt="Cappuccino"
                      />
                    </div>
                    <div>
                      <h4 class="highlight2 fw-bold text-uppercase">
                        Cappuccino
                      </h4>
                      <h5 class="text-capitalize fst-italic">medium</h5>
                    </div>
                  </div>
                  <div class="col-3 d-none d-lg-block text-center">$4.5</div>
                  <div class="col-3 col-lg-2 text-center">1</div>
                  <div class="col-3 col-lg-2 text-end">$4.5</div>
                </div>

                <div
                  class="pt-3 d-flex justify-content-between"
                  id="cart-heading"
                >
                  <h4 class="fw-bold">2 Items</h4>
                  <h4 class="fw-bold">
                    Total: <span>$8.5</span>
                  </h4>
                </div>

                <a
                  href="./track order.html"
                  class="w-100 btn btn-primary mt-3 fs-4 fw-bold text-uppercase"
                >
                  view details
                </a>
              </div>
            </div>
          </div>
          <div class="row pt-3">
            <div class="col">
              <div class="p-3 p-xxl-5 card shadow-sm h-100">
                <div
                  class="pb-xl-3 d-flex justify-content-between"
                  id="cart-heading"
                >
                  <h4 class="fw-bold">Order ID</h4>
                  <h4 class="fw-bold">18:18 May 7, 2021</h4>
                </div>

                <div
                  class="row pb-3 fs-4 fw-bold text-uppercase border-bottom d-none d-md-flex"
                  id="cart-heading"
                >
                  <div class="col-6 col-lg-5">product details</div>
                  <div class="col-3 d-none d-lg-block text-center">
                    Unit price
                  </div>
                  <div class="col-3 col-lg-2 text-center">quantity</div>
                  <div class="col-3 col-lg-2 text-end">subtotal</div>
                </div>
                <div
                  class="row pb-3 fs-5 fw-bold text-uppercase border-bottom d-md-none"
                  id="cart-heading"
                >
                  <div class="col-6">product</div>
                  <div class="col-3 col-xl-2 text-center">qty</div>
                  <div class="col-3 col-xl-2 text-end">sub</div>
                </div>

                <div class="row py-3 fs-4 cart-prd border-bottom">
                  <div class="col-6 col-lg-5 d-flex flex-row justify-content-start">
                    <div>
                      <img
                        src="./images/sqr latte.jpg"
                        class="img-fluid me-3 rounded d-none d-md-block"
                        alt="Latte"
                      />
                      <img
                        src="./images/sm sqr latte.png"
                        class="img-fluid me-1 rounded d-md-none"
                        alt="Latte"
                      />
                    </div>
                    <div>
                      <h4 class="highlight2 fw-bold text-uppercase">Latte</h4>
                      <h5 class="text-capitalize fst-italic">Small</h5>
                    </div>
                  </div>
                  <div class="col-3 d-none d-lg-block text-center">$4.0</div>
                  <div class="col-3 col-lg-2 text-center">1</div>
                  <div class="col-3 col-lg-2 text-end">$4.0</div>
                </div>

                <div class="row py-3 fs-4 cart-prd border-bottom">
                  <div class="col-6 col-lg-5 d-flex flex-row justify-content-start">
                    <div>
                      <img
                        src="./images/sqr cappuccino.jpeg"
                        class="rounded me-3 d-none d-md-block"
                        alt="Cappuccino"
                      />
                      <img
                        src="./images/sm sqr cappucino.png"
                        class="rounded me-1 d-md-none"
                        alt="Cappuccino"
                      />
                    </div>
                    <div>
                      <h4 class="highlight2 fw-bold text-uppercase">
                        Cappuccino
                      </h4>
                      <h5 class="text-capitalize fst-italic">medium</h5>
                    </div>
                  </div>
                  <div class="col-3 d-none d-lg-block text-center">$4.5</div>
                  <div class="col-3 col-lg-2 text-center">1</div>
                  <div class="col-3 col-lg-2 text-end">$4.5</div>
                </div>

                <div
                  class="pt-3 d-flex justify-content-between"
                  id="cart-heading"
                >
                  <h4 class="fw-bold">2 Items</h4>
                  <h4 class="fw-bold">
                    Total: <span>$8.5</span>
                  </h4>
                </div>

                <a
                  href="./track order.html"
                  class="w-100 btn btn-primary mt-3 fs-4 fw-bold text-uppercase"
                >
                  view details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Test;

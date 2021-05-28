import React from "react";
import NavBar from "./navBar";

const TrackOrderPage = ({ user }) => {
  return (
    <React.Fragment>
      <NavBar user={user} />
      <main class="mb-5 px-2 px-md-5 pb-lg-0">
        <h1 class="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
          Track your order
        </h1>
        <h1 class="pt-3 pb-1 text-uppercase fw-bold text-center d-lg-none">
          Track your order
        </h1>
        <div class="px-2 row g-3">
          <div class="container p-3 rounded">
            <div class="row">
              <div class="col">
                <div class="p-3 p-lg-5 card shadow-sm text-center">
                  <h3 class="fw-bold text-secondary d-none d-lg-block text-uppercase">
                    Change your mind? You can change or cancel your order
                    within:
                  </h3>
                  <div class="text-secondary d-none d-md-block d-lg-none">
                    <h4 class="fw-bold pe-2">Change your mind?</h4>
                    <h4 class="fw-bold">
                      You can change or cancel your order within:
                    </h4>
                  </div>
                  <div class="text-secondary d-md-none">
                    <h5 class="fw-bold pe-2">Change your mind?</h5>
                    <h5 class="fw-bold">Change or cancel your order within:</h5>
                  </div>
                  <h1 class="py-3 py-lg-5 fw-bold display-1" id="count-down">
                    09:59
                  </h1>
                  <div class="mt-3 d-grid gap-3 d-lg-flex justify-content-lg-center">
                    <button
                      class="btn btn-lg btn-primary px-lg-5 fs-3 fw-bold"
                      type="button"
                    >
                      CHANGE ORDER
                    </button>
                    <button
                      class="btn btn-lg btn-primary px-lg-5 fs-3 fw-bold"
                      type="button"
                    >
                      CANCEL ORDER
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row gap-lg-3 mt-3">
              <div class="col-12 col-lg">
                <div class="pt-3 card border-0" id="finish"></div>
                <div class="text-center">
                  <h2 class="pt-3 text-uppercase">
                    <i class="fas fa-check-double pe-3"></i>Order Placed
                  </h2>
                  <h2 class="d-lg-none">
                    <i class="fas fa-angle-double-down"></i>
                  </h2>
                </div>
              </div>
              <div class="col-12 col-lg">
                <div class="pt-3 card border-0"></div>
                <div class="text-center">
                  <h2 class="pt-3 text-uppercase text-secondary">
                    <i class="fas fa-concierge-bell fa-lg pe-3"></i>Making Order
                  </h2>
                  <h2 class="d-lg-none text-secondary">
                    <i class="fas fa-angle-double-down"></i>
                  </h2>
                </div>
              </div>
              <div class="col-12 col-lg">
                <div class="pt-3 card border-0"></div>
                <div class="text-center">
                  <h2 class="pt-3 text-uppercase text-secondary">
                    <i class="fas fa-store pe-3"></i>Ready In Store
                  </h2>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col">
                <div class="progress position-relative">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <h2
                      class="mb-0 position-absolute top-25 w-100 text-center fw-bold"
                      id="prg-time"
                    >
                      14:59
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3 text-center text-secondary">
              <h4 class="d-none d-md-block">
                Note: If order is not ready within 15 mins, you will receive a
                20% discount for the next order.
              </h4>
              <h5 class="d-md-none">
                Note: If order is not ready within 15 mins, you will receive a
                20% discount for the next order.
              </h5>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default TrackOrderPage;

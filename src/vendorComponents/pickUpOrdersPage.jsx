import React from "react";
import VendorNavBar from "./vendorNavBar";
import { Link } from "react-router-dom";

const PickUpOrdersPage = () => {
  return (
    <React.Fragment>
      <VendorNavBar />
      <main className="mb-5 px-2 px-md-5 pb-5 pb-lg-0">
        <h2 className="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
          Waiting for pick up
        </h2>
        <div className="px-2 row g-3 pt-3 pt-md-0">
          <div className="container p-3 rounded col-lg-12">
            <div className="row row-cols-1 row-cols-lg-4 g-2">
              <div className="col-lg-3">
                <div className="card shadow-sm px-0">
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between mt-2">
                      <p className="text-uppercase fw-bold mb-1 highlight3">
                        No.1
                      </p>
                      <p className="text-uppercase fw-bold mb-1 highlight3">
                        time
                      </p>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="text-uppercase fw-bold d-flex justify-content-center highlight3 mt-3">
                      customer name
                    </p>
                    <p className="text-uppercase fw-bold d-flex justify-content-center highlight3 mt-3">
                      number of items
                    </p>
                    <p className="text-uppercase fw-bold d-flex justify-content-center text-warning mt-3">
                      20% DISCOUNT APPLIED
                    </p>
                  </div>
                  <button
                    href="#"
                    className="btn btn-primary mt-3 fs-5 fw-bold m-3 text-uppercase"
                  >
                    finish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed-bottom p-2 px-md-5">
        <div className="px-2 row g-3">
          <Link
            to="./vendor current order.html"
            className="col btn btn-primary me-1 text-uppercase fw-bold fs-4"
            type="button"
          >
            Active orders
          </Link>
          <Link
            to="./vendor await pickup.html"
            className="col btn btn-primary ms-1 text-uppercase fw-bold fs-4 active"
            type="button"
          >
            Await pickup
          </Link>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default PickUpOrdersPage;

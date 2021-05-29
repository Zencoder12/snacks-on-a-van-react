import React from "react";
import { Link } from "react-router-dom";
import VendorNavBar from "./vendorNavBar";

const VendorActiveOrdersPage = () => {
  return (
    <React.Fragment>
      <VendorNavBar />
      <main classname="mb-5 px-2 px-md-5 pb-5 pb-lg-0">
        <h2 classname="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
          Active orders
        </h2>

        <div classname="px-2 row g-3 pt-3 pt-md-0">
          <div classname="container p-3 rounded col-lg-12">
            <div classname="row row-cols-1 row-cols-lg-3 g-2">
              <div classname="col-lg-4">
                <div classname="card h-100 shadow-sm px-0">
                  <div classname="card-header border-0">
                    <div classname="d-flex justify-content-between mt-2">
                      <p classname="text-uppercase fw-bold mb-1 highlight3">
                        No.1
                      </p>
                      <p classname="text-uppercase fw-bold mb-1 highlight3">
                        customer name
                      </p>
                    </div>
                  </div>
                  <div classname="card-body p-0">
                    <table classname="table table-borderless m-2">
                      <tbody>
                        <tr>
                          <td
                            scope="row"
                            classname="highlight1 text-uppercase fw-bold"
                          >
                            s
                          </td>
                          <td classname="highlight3 text-uppercase">
                            Hot chocolate
                          </td>
                          <td classname="highlight4 text-uppercase fw-bold">
                            1
                          </td>
                        </tr>
                        <tr>
                          <td
                            scope="row"
                            classname="highlight1 text-uppercase fw-bold"
                          >
                            L
                          </td>
                          <td classname="highlight3 text-uppercase">
                            Long black
                          </td>
                          <td classname="highlight4 text-uppercase fw-bold">
                            1
                          </td>
                        </tr>
                        <tr>
                          <td scope="row"></td>
                          <td classname="highlight3 text-uppercase">
                            berry cheesecake
                          </td>
                          <td classname="highlight4 text-uppercase fw-bold">
                            2
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <button classname="btn btn-primary mt-3 fs-5 fw-bold m-3 text-uppercase">
                    Ready for pickup
                  </button>
                  <div classname="row mt-0 align-bottom">
                    <div classname="col">
                      <div
                        classname="progress position-relative"
                        id="van-progress"
                      >
                        <div
                          classname="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <p
                            classname="mb-0 position-absolute top-25 w-100 text-center fw-bold"
                            id="prg-time"
                          >
                            14:59
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer classname="fixed-bottom p-2 px-md-5">
        <div classname="px-2 row g-3">
          <Link
            to="./vendor current order.html"
            classname="col btn btn-primary me-1 text-uppercase fw-bold fs-4 active"
            type="button"
          >
            Active orders
          </Link>
          <Link
            to="./vendor await pickup.html"
            classname="col btn btn-primary ms-1 text-uppercase fw-bold fs-4"
            type="button"
          >
            Await pickup
          </Link>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default VendorActiveOrdersPage;

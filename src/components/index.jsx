import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main id="index-page">
      <div className="vertical-center">
        <div className="col-12">
          <div className="row justify-content-center align-items-center g-5 px-5">
            <div className="col-10 px-1 py-3 d-flex d-md-none">
              <img
                src="https://i.ibb.co/PWWPVSn/log.png"
                className="img-fluid"
                alt="brand-logo"
              />
            </div>
            <div className="col-12 col-md-4 mt-3">
              <div className="card card-bg h-100 border-0 rounded text-center py-5 px-3">
                <h1 className="text-uppercase fw-bold mb-5 mt-3">customer</h1>
                <Link
                  to="#location"
                  className="btn btn-primary mx-3 mb-3 text-uppercase fw-bold"
                >
                  LOCATE THE NEAREST STORE
                </Link>
              </div>
            </div>
            <div className="col-3 px-1 d-none d-lg-flex mt-2">
              <img
                src="https://i.ibb.co/PWWPVSn/log.png"
                className="img-fluid"
                alt="brand-logo"
              />
            </div>
            <div className="col-12 col-md-4 mt-3">
              <div className="card card-bg h-100 border-0 rounded text-center py-5 px-3">
                <h1 className="text-uppercase fw-bold mb-5 mt-3">vendor</h1>
                <Link
                  to="#"
                  className="btn btn-primary mx-3 mb-3 text-uppercase fw-bold"
                >
                  login / register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;

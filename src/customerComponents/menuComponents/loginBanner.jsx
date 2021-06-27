import React from "react";
import { Link } from "react-router-dom";

const LoginBanner = () => {
  return (
    <div className="col-md-4 d-none d-lg-block">
      <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center">
        order summary
      </h1>
      <div className="pt-3 table-responsive container rounded fs-5">
        <h1 className="my-5 text-center display-4 text-uppercase fw-bold text-black-50">
          login to begin order
        </h1>
        <Link
          to="/customer/login"
          className="w-100 btn btn-primary my-3 text-uppercase fs-5 fw-bold"
          id="btn-log"
        >
          Login / Register
        </Link>
      </div>
    </div>
  );
};

export default LoginBanner;

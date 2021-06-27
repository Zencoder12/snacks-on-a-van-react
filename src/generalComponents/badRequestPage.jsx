import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../customerComponents/navBar";

const BadRequest = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main class="row p-3 p-md-5 h-100">
        <div class="col d-lg-none d-xl-block"></div>
        <div class="col-12 col-md-5 col-lg-5">
          <img
            src="https://i.ibb.co/PWWPVSn/log.png"
            class="img-fluid my-auto"
            id="error-logo"
            alt="bad request image"
          />
        </div>
        <div class="col d-lg-none d-xl-block"></div>
        <div class="col-12 col-lg-7 col-xl-6 my-auto">
          <div class="text-center text-lg-start py-5 gap-3">
            <h1 class="display-1 text-uppercase fw-bold">
              Oops! Something went wrong :(
            </h1>
            <h2>Please go back to the home page, login and try again.</h2>
            <Link to="/" class="btn btn-primary mt-3 fs-5 fw-bold">
              Back to home
            </Link>
          </div>
        </div>
        <div class="col d-lg-none d-xl-block"></div>
      </main>
    </React.Fragment>
  );
};

export default BadRequest;

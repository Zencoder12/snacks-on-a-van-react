import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./loginForm";
import NavBar from "./navBar";
import RegisterForm from "./registerForm";

const LoginPage = ({ user }) => {
  return (
    <React.Fragment>
      <main className="mb-5 px-2 px-md-5 pb-5 pb-lg-0">
        <NavBar user={user} />
        <h1 className="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
          Login/register
        </h1>
        <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center d-lg-none">
          login
        </h1>
        <div className="px-2 row g-3">
          <div className="container p-3 rounded">
            <div className="row row-cols-1 row-cols-lg-2 g-3">
              <div className="col-lg-4">
                <div className="p-3 px-xxl-5 card shadow-sm h-100">
                  <h2 className="py-3 text-center text-uppercase fw-bold">
                    existing customer
                  </h2>
                  <h2 className="pb-5 text-center text-uppercase fw-bold d-none d-lg-block">
                    login
                  </h2>
                  <LoginForm />
                </div>
              </div>

              {/* -- REGISTER FORM -- */}

              <div className="col-lg-8 d-none d-lg-block">
                <div className="p-3 px-xxl-5 card shadow-sm">
                  <h2 className="py-3 text-center text-uppercase fw-bold">
                    new customer
                  </h2>
                  <h2 className="pb-5 text-center text-uppercase fw-bold d-none d-lg-block">
                    register
                  </h2>
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="fixed-bottom p-2 px-md-5 d-lg-none">
        <div className="px-2 row g-3">
          <Link
            to="#"
            className="col btn btn-primary me-1 text-uppercase fw-bold fs-4 active"
            type="button"
          >
            Login
          </Link>
          <Link
            to="/customer/register"
            className="col btn btn-primary ms-1 text-uppercase fw-bold fs-4"
            type="button"
          >
            Register
          </Link>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default LoginPage;

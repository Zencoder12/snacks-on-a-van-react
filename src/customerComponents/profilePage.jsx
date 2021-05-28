import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./navBar";

const ProfilePage = ({ user }) => {
  return (
    <React.Fragment>
      <NavBar user={user} />
      <main className="px-2 px-md-5 pb-5 pb-lg-0">
        <h1 className="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
          My Profile
        </h1>
        <h1 className="pt-3 pb-1 text-uppe rcase fw-bold text-center d-lg-none">
          My Profile
        </h1>
        <div className="px-2 row g-3">
          <div className="container p-3 rounded">
            <div className="row row-cols-1 row-cols-lg-2 g-3">
              <div className="col-lg-4">
                <div className="py-5 px-5 px-lg-3 px-xl-5 card shadow-sm h-100 text-center">
                  <img
                    src={"https://i.ibb.co/kGty6MS/profile.png"}
                    className="rounded-circle mb-5 mx-md-5 mx-lg-0 mx-xl-5"
                  />
                  <h3>James Smith</h3>
                  <h3 className="pt-3 mb-5">james.smith@gmail.com</h3>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="mb-3 p-5 card shadow-sm">
                  <h2 className="pb-3 text-uppercase fw-bold">change name</h2>
                  <div className="mb-3 row">
                    <label
                      htmlFor="upd-first-name"
                      className="col-12 col-md-4 col-xl-3 col-form-label align-middle fs-4"
                    >
                      First Name:
                    </label>
                    <div className="col-12 col-md-8 col-xl-9">
                      <input
                        type="text"
                        className="form-control fs-5"
                        id="upd-first-name"
                        placeholder="first name"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="upd-family-name"
                      className="col-12 col-md-4 col-xl-3 col-form-label align-middle fs-4"
                    >
                      Family Name:
                    </label>
                    <div className="col-12 col-md-8 col-xl-9">
                      <input
                        type="text"
                        className="form-control fs-5"
                        id="upd-family-name"
                        placeholder="family name"
                      />
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="w-100 btn btn-primary btn-lg text-uppercase fs-4 fw-bold"
                  >
                    update Name
                  </Link>
                </div>
                <div className="p-5 card shadow-sm">
                  <h2 className="pb-3 text-uppercase fw-bold">
                    change password
                  </h2>
                  <div className="mb-3 row">
                    <label
                      htmlFor="upd-psw"
                      className="col-12 col-md-4 col-xl-3 col-form-label fs-4"
                    >
                      Password:
                    </label>
                    <div className="col-12 col-md-8 col-xl-9">
                      <input
                        type="password"
                        className="form-control fs-5"
                        id="upd-psw"
                        placeholder="password"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="upd-psw2"
                      className="col-12 col-md-4 col-xl-3 col-form-label fs-4"
                    >
                      Confirm Password:
                    </label>
                    <div className="col-12 col-md-8 col-xl-9">
                      <input
                        type="password"
                        className="form-control fs-5"
                        id="reg-psw2"
                        placeholder="confirm password"
                      />
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="w-100 btn btn-primary btn-lg text-uppercase fs-4 fw-bold"
                  >
                    update password
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ProfilePage;

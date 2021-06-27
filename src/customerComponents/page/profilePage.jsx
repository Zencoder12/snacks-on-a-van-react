import React, { Component } from "react";
import auth from "../../services/authService";
import UpdateForm from "../formComponents/updateForm";
import NavBar from "../navBar";

class ProfilePage extends Component {
  state = {
    account: {
      firstName: "",
      familyName: "",
      password: "",
    },
  };

  render() {
    const user = auth.getCurrentUser();
    return (
      <React.Fragment>
        <NavBar />
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
                {/* logo card container */}
                <div className="col-lg-4">
                  <div className="py-5 px-5 px-lg-3 px-xl-5 card shadow-sm h-100 text-center">
                    <img
                      src={"https://i.ibb.co/kGty6MS/profile.png"}
                      className="rounded-circle mb-5 mx-md-5 mx-lg-0 mx-xl-5"
                    />
                    <h3>{user.firstName}</h3>
                    <h3 className="pt-3 mb-5">{user.email}</h3>
                  </div>
                </div>
                {/* change information card container */}
                <div className="col-lg-8">
                  <div className="mb-3 h-100 p-5 card shadow-sm">
                    <h2 className="pb-3 text-uppercase fw-bold">
                      change information{" "}
                    </h2>
                    <UpdateForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default ProfilePage;

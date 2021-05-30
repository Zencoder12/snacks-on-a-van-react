import React from "react";
import VendorNavBar from "./vendorNavBar";
import { getCurrentLocation, closeLocation } from "../services/vendorService";
import auth from "../services/authService";
import { toast } from "react-toastify";

const VendorProfilePage = () => {
  const vendor = auth.getCurrentUser();
  const vendorLocation = getCurrentLocation();

  const handleCloseLocation = async () => {
    try {
      await closeLocation(vendorLocation.vendorName);
      localStorage.removeItem("location");
      toast.warning(
        "Your location has been removed. To set it again please login and set a new address."
      );
    } catch (ex) {
      window.location = "/400";
    }
  };

  return (
    <React.Fragment>
      <VendorNavBar />
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
                    src="https://i.ibb.co/PWWPVSn/log.png"
                    className="rounded-circle mb-5 mx-md-5 mx-lg-0 mx-xl-5"
                  />
                  <h3 className="text-uppercase">{vendor.vendorName}</h3>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="mb-3 p-5 h-100 card shadow-sm">
                  <h2 className="pb-5 mx-md-5 text-uppercase fw-bold">
                    status
                  </h2>
                  <div className="mb-5 mx-md-5 row">
                    <h3 className="col-12 col-md-3 col-xl-3 align-middle ps-md-0 fs-4 text-uppercase">
                      open at:
                    </h3>
                    {vendorLocation && (
                      <h4 className="col-12 col-md-9 col-xl-9 highlight2">
                        {vendorLocation.address}
                      </h4>
                    )}
                    {!vendorLocation && (
                      <h4 className="col-12 col-md-9 col-xl-9 highlight2">
                        NO LOCATION HAS BEEN SET YET
                      </h4>
                    )}
                  </div>
                  <button
                    className="mx-md-5 btn btn-primary btn-lg text-uppercase fs-4 fw-bold"
                    onClick={handleCloseLocation}
                  >
                    end business today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default VendorProfilePage;

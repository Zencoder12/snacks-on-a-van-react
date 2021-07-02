import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getCurrentLocation,
  closeLocation,
} from "../../services/vendorService";
import auth from "../../services/authService";
import VendorNavBar from "../common/vendorNavBar";

const VendorProfilePage = (props) => {
  const [vendor, setVendor] = useState("");
  const [vendorLocation, setVendorLocation] = useState("");

  useEffect(() => {
    setVendor(auth.getCurrentUser);

    try {
      const fetchLocation = async () => {
        const { data } = await getCurrentLocation();
        setVendorLocation(data.address);
      };

      fetchLocation();
    } catch (ex) {
      toast.warning("Something went wrong. Please try again.");
    }
  }, []);

  const handleCloseLocation = async () => {
    try {
      if (!vendorLocation) return toast.warning("No location is set");

      await closeLocation(vendorLocation.vendorName);
      window.location = "/vendor/profile";
    } catch (ex) {
      window.location = "/400";
    }
  };

  const handleRedirectSetLocation = () => {
    if (vendorLocation)
      return toast.warning("Please cancel the current location first.");

    props.history.push("/vendor/set-location");
  };

  return (
    <React.Fragment>
      <VendorNavBar />
      <main className="px-2 px-md-5 pb-5 pb-lg-0">
        {/* text aligned to the left for > lg screens */}
        <h1 className="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
          My Profile
        </h1>
        <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center d-lg-none">
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
                {/* h-100 so white background extends to the full height of the container */}
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
                        {vendorLocation}
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
                    cancel current location
                  </button>
                  <Link
                    className="pt-3 text-center text-decoration-none"
                    onClick={handleRedirectSetLocation}
                  >
                    <span className="text-secondary">
                      Want to set a location? Click here!
                    </span>
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

export default VendorProfilePage;

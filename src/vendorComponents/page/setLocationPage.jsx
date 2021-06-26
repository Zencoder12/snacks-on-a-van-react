import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { toast } from "react-toastify";
import auth from "../../services/authService";
import { setVendorLocation } from "../../services/vendorService";
import VendorNavBar from "../vendorNavBar";

const SetLocationPage = (props) => {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    let: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const coordinates = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(coordinates);
  };

  const setLocation = async () => {
    try {
      if (!address || !coordinates)
        return toast.warning("Location cannot be empty.");

      const vendor = auth.getCurrentUser();
      const { data: location } = await setVendorLocation(
        vendor.vendorName,
        coordinates,
        address
      );
      localStorage.setItem("location", JSON.stringify(location));
      props.history.push("/vendor/active-orders");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.warning(
          "Your location has already been set. Please remove current location on profile page."
        );
      }
    }
  };

  return (
    <React.Fragment>
      <VendorNavBar />
      <main id="index-page">
        <div className="vertical-center">
          <div className="col-12">
            <div className="row justify-content-center align-items-center g-5 px-3">
              <div className="col-8 col-lg-3 px-1 py-3 me-md-5">
                <img
                  src="https://i.ibb.co/PWWPVSn/log.png"
                  className="img-fluid"
                  alt="brand-logo"
                />
              </div>
              <div className="col-10 col-lg-4 px-1 mt-1 ms-md-4 card border-0">
                <div className="p-4">
                  <h2 className="py-3 text-uppercase fw-bold text-center">
                    select location
                  </h2>
                  <PlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                    onSelect={handleSelect}
                  >
                    {({
                      getInputProps,
                      suggestions,
                      getSuggestionItemProps,
                      loading,
                    }) => (
                      <div>
                        <input
                          className="form-control text-uppercase mt-4"
                          id="vendor location"
                          {...getInputProps({ placeholder: "Enter location" })}
                        />
                        <div>
                          {loading ? <div>...loading</div> : null}
                          {suggestions.map((suggestion) => {
                            const style = {
                              backgroundColor: suggestion.active
                                ? "#fdc4b6"
                                : "#fff",
                            };
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  style,
                                })}
                              >
                                {suggestion.description}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                  <button
                    className="w-100 btn btn-primary btn-lg mt-5 mb-4 mt-md-5 text-uppercase fs-4 fw-bold"
                    onClick={setLocation}
                  >
                    open business here
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

export default SetLocationPage;

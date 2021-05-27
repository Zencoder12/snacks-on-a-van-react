import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const SetLocationPage = () => {
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

  return (
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
                        // list="datalistOptions"
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
                              {...getSuggestionItemProps(suggestion, { style })}
                            >
                              {suggestion.description}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
                {/* <datalist id="datalistOptions">
                  <option value="866 Koelpin Pass, New Aidenmouth" />
                  <option value="91006 Jacobs Parkway, Monahanmouth" />
                  <option value="9499 David Road, Greenfeldermouth" />
                </datalist> */}
                <button className="w-100 btn btn-primary btn-lg mt-5 mb-4 mt-md-5 text-uppercase fs-4 fw-bold">
                  open business here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SetLocationPage;

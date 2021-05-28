import React, { Component } from "react";
import { Link } from "react-router-dom";
import Map from "./map";

class SelectVendorPage extends Component {
  state = { selectedVendor: "" };

  handleSelect = (vendor) => {
    this.setState({ selectedVendor: vendor });
  };

  handleClosePopUp = () => {
    this.setState({ selectedVendor: "" });
  };

  render() {
    return (
      <main className="row mx-0 vertical-center">
        <div className="col-12 col-md-4 px-0 mx-0 row justify-content-center">
          <div className="col-8 col-md-6 mt-3 mt-md-0">
            <img
              src="https://i.ibb.co/PWWPVSn/log.png"
              className="img-fluid"
              alt="brand-logo"
            />
          </div>
          <div className="p-4 px-xxl-5">
            <h2 className="py-3 text-uppercase fw-bold text-center">
              nearest locations
            </h2>
            <input
              className="form-control text-uppercase mt-3 mb-4 mt-md-5 mb-md-5"
              list="datalistOptions"
              id="vendor location"
              placeholder="click on a van to select the location"
              value={this.state.selectedVendor.address}
            />
            <button className="w-100 btn btn-primary btn-lg mt-3 mb-4 mt-md-4 text-uppercase fs-4 fw-bold">
              Select vendor
            </button>
          </div>
          <div className="text-center mb-3">
            <Link to="/vendor/login" className="text-decoration-none">
              <span className="text-secondary ">
                NOT CUSTOMER? VENDER LOGIN
              </span>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-8 px-0">
          <Map
            selectedVendor={this.state.selectedVendor}
            onClosePopUp={this.handleClosePopUp}
            onSelect={this.handleSelect}
          />
        </div>
      </main>
    );
  }
}

export default SelectVendorPage;

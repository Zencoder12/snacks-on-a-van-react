import React from "react";
import Joi from "joi-browser";
import VendorForm from "./common/vendorForm";
import auth from "../services/authService";

class VendorLoginForm extends VendorForm {
  state = {
    data: { vendorName: "", password: "" },
    errors: {},
  };

  schema = {
    vendorName: Joi.string().min(5).max(255).required().label("Van Name"),
    password: Joi.string().min(5).max(255).required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.loginVendor(data.vendorName, data.password);
      window.location = "/vendor/set-location";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("vendorName", "Van Name:", "text", "van name")}
        {this.renderInput(
          "password",
          "Password:",
          "password",
          "enter password"
        )}
        {this.renderButton("Login")}
      </form>
    );
  }
}

export default VendorLoginForm;

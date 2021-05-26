import React from "react";
import Joi from "joi-browser";
import VendorForm from "./common/vendorForm";
import auth from "../services/authService";

class VendorRegisterForm extends VendorForm {
  state = {
    data: {
      email: "",
      password: "",
      vendorName: "",
      phone: "",
      contactName: "",
    },
    errors: {},
  };

  schema = {
    vendorName: Joi.string().min(5).max(255).required(),
    contactName: Joi.string().min(5).max(255).required(),
    phone: Joi.string().min(5).max(25).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const response = await auth.signUp(data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/customer/menu";
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
        {this.renderInput("vendorName", "Vendor Name:", "text", "vendor name")}
        {this.renderInput(
          "contactName",
          "Contact Name:",
          "text",
          "contact name"
        )}
        {this.renderInput("phone", "Phone Number:", "text", "phone number")}
        {this.renderInput(
          "email",
          "Email address:",
          "text",
          "name@example.com"
        )}
        {this.renderInput(
          "password",
          "Password:",
          "password",
          "enter password"
        )}
        {this.renderButton("Register")}
      </form>
    );
  }
}

export default VendorRegisterForm;

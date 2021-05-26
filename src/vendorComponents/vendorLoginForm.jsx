import React from "react";
import Joi from "joi-browser";
import Form from "../customerComponents/common/form";
import auth from "../services/authService";

class VendorLoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().min(5).max(255).required().label("Email"),
    password: Joi.string().min(5).max(255).required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);
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
        {this.renderButton("Login")}
      </form>
    );
  }
}

export default VendorLoginForm;

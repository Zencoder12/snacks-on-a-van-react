import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", firstName: "", lastName: "" },
    errors: {},
  };

  schema = {
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const response = await auth.signUp(data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/customer/select-vendor";
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
        {this.renderInput("firstName", "First Name:", "text", "first name")}
        {this.renderInput("lastName", "Last Name:", "text", "last name")}
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

export default RegisterForm;

import React, { Component } from "react";
import Joi from "joi-browser";
import Form2 from "./common/form2";

class LoginForm2 extends Form2 {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().min(5).max(255).required().label("Email"),
    password: Joi.string().min(5).max(255).required().label("Password"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted!");
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

export default LoginForm2;

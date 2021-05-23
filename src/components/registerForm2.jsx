import React, { Component } from "react";
import Joi from "joi-browser";
import Form2 from "./common/form2";

class RegisterForm2 extends Form2 {
  state = {
    data: { email: "", password: "", firstName: "", familyName: "" },
    errors: {},
  };

  schema = {
    firstName: Joi.string().min(3).max(50).required(),
    familyName: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted!");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("firstName", "First Name:", "text", "first name")}
        {this.renderInput("familyName", "Family Name:", "text", "family name")}
        {this.renderInput(
          "password",
          "Password:",
          "password",
          "enter password"
        )}
        {this.renderInput(
          "email",
          "Email address:",
          "text",
          "name@example.com"
        )}
        {this.renderButton("Register")}
      </form>
    );
  }
}

export default RegisterForm2;

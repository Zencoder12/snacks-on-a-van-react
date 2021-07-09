import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import auth from "../../services/authService";
import { updateProfile } from "../../services/customerService";
import { toast } from "react-toastify";

class UpdateForm extends Form {
  state = {
    data: { firstName: "", lastName: "", password: "" },
    errors: {},
  };

  schema = {
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(5).max(1024).required(),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const response = await updateProfile(data);
      auth.loginWithJwt(response.data.token);
      toast.warning("The information has been sucesfully updated.");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.firstName = ex.response.data;
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
          "password",
          "Password:",
          "password",
          "enter password"
        )}
        {this.renderButton("Update Information")}
      </form>
    );
  }
}

export default UpdateForm;

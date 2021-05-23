import React, { Component } from "react";
import Joi from "joi-browser";
import Input2 from "./input2";

class Form2 extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  // create an individual error object for individual input field
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  // e.currentTarget => get the input field
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        to="#"
        className="w-100 btn btn-primary btn-lg 
        my-3 my-md-5 text-uppercase fs-4 fw-bold"
      >
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text", placeholder) {
    const { data, errors } = this.state;

    return (
      <Input2
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        placeholder={placeholder}
        error={errors[name]}
      />
    );
  }
}

export default Form2;

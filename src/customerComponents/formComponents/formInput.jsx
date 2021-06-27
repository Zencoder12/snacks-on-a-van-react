import React from "react";

const FormInput = ({ name, label, error, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label fs-4">
        {label}
      </label>
      <input {...rest} className="form-control fs-5" id={name} name={name} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default FormInput;

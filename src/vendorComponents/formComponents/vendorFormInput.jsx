import React from "react";

const VendorFormInput = ({ name, label, error, ...rest }) => {
  return (
    <div className="mb-3 row">
      <label
        htmlFor={name}
        className="col-12 col-md-4 col-xl-3 col-form-label fs-5"
      >
        {label}
      </label>
      <div className="col-12 col-md-8 col-xl-9">
        <input {...rest} className="form-control fs-5" id={name} name={name} />
        {error && <div className="alert alert-danger mb-0 p-2">{error}</div>}
      </div>
    </div>
  );
};

export default VendorFormInput;

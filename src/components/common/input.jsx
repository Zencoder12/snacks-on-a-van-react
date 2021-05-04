import React from "react";

const Input = ( {name, label, error, ...rest} ) => {
    return (  
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
        { /* passing input control to the loginForm state */ }
        <input
        {...rest}
        id={name} 
        name={name}
        className="form-control"
        />
        { /* conditional rendering, only if there is an error */}
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
    );
}
 
export default Input;
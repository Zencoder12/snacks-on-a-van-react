import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

const VProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (!auth.isValidVendor()) return <Redirect to="/error-vendor" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default VProtectedRoute;

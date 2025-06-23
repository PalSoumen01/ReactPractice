import React from "react";
import { Link } from "react-router-dom";

function PrivateRoute({ userRole, children }) {
  const isAuthenticated = true;
  const isAuthorized = userRole === "admin";
  if (!isAuthenticated) {
    return (
      <>
        <p>Private Route: You are not authorized to view this page.</p>
        <p>
          Please <Link to="/login">Login</Link> to access this page.
        </p>
      </>
    );
  } else if (!isAuthorized) {
    return (
      <>
        <p>
          Private Route: You do not have the required permissions to view this
          page.
        </p>
        <p>Please contact your administrator for access.</p>
      </>
    );
  }
  return <div>{children}</div>;
}

export default PrivateRoute;

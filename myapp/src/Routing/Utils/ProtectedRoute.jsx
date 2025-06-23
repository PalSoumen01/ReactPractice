import React from "react";
import { Link } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return (
      <>
        <p>Protected Route: You are not authorized to view this page.</p>
        <p>
          Please <Link to="/login">login</Link> to access this page.
        </p>
      </>
    );
  } else {
    return <>{children}</>;
  }
}

export default ProtectedRoute;

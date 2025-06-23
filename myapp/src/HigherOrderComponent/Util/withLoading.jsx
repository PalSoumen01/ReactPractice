import React from "react";

function withLoading(Component) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    } else {
      return <Component {...props} />;
    }
  };
}

export default withLoading;

/*
    Higher Order Component (HOC) is a function that takes a component and returns 
    a new component.
    It is used to add additional functionality to a component without modifying the 
    original component.


*/

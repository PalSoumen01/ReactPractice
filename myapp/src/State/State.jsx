import React from "react";
/*
    The State is a build in object in React that is used to store and managed data about 
    the componenet.

    We can't change any variable value directly in the component.
    To change the value of a component variable, we need to use the State object.

    Every time we change the value of a state variable, the component re-renders.

    For the functional components, we use the useState hook to create a state variable.
    For the class components, we use the this.state object to create a state variable.

*/

function State() {
  var x = 10;

  const handleClick = () => {
    x++;
  };

  console.log("Value of x : ", x); // This will always log the initial value of x (10) because it is not reactive
  // and will not re-render the component when x changes.

  return (
    <div>
      <h1>State</h1>
      <p>Value of x : {x}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default State;

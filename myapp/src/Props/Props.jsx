import React from "react";
import ChildA from "./ChildA";
import PropsDrilling from "./PropsDrilling";

function Props() {
  const data = {
    name: "John Doe",
    age: 30,
    city: "New York",
    email: "john.Doe@example.info",
  };

  return (
    <div>
      <h2>Props</h2>
      {/* <ChildA data={data} /> */}
      <PropsDrilling data={data} />
    </div>
  );
}

export default Props;

/*
    Props (short for properties) are used to pass data from one component to another, 
    usually from parent to child. 
    
    They are read-only.Child components receive props as an object and can use them 
    to render dynamic content. But they cannot modify the props directly. Only the Parent
    component can change the props and pass new values down to the child components.
*/

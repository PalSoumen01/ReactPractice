import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentCompont() {
  const [data, setData] = useState("");

  const updateData = (newData) => {
    setData(newData);
    console.log("data in parent component : " + newData);
  };

  return (
    <div>
      <h2>Parent Componenet</h2>
      <p>Data from Child: {data}</p>
      <ChildComponent updateData={updateData} />
    </div>
  );
}

export default ParentCompont;

/*
    Lifting state up means moving the state to a common parent component so that multiple 
    child components can share and stay in sync using that state.
    
    How are multiple child components "in sync" when using lifted state?
    When you lift state up to the parent, that state becomes the single source of truth.
    
    Here's how sync happens:

      i. The parent holds the state.

      ii. All child components receive the same state as a prop (or receive functions to 
          update it).

      iii. If any child updates the state, the parent re-renders, and all children get the 
          updated value.

    What does "in sync" mean?
    It means:

    All child components see the latest value of the shared state.

    If one child changes the state, the change is reflected in all components using 
    that state.
*/

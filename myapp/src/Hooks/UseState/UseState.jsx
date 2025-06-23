import React, { useState } from "react";
/*
    The UseState hook is a built-in hook in React that allows functional components to have
    state.
    
    It is used to declare state variables in functional components and provides a way to 
    update them.

    The useState hook returns an array with two elements:
    1. The current state value.
    2. A function to update the state value.

    Example usage:
    const [count, setCount] = useState(0);
    Here, count is the current state value and setCount is the function to update it.
*/

function UseState() {
  const [num, setNum] = useState(0);
  const handleClick = () => {
    setNum(num + 1);
  };

  console.log("Value of num : ", num); // This will log the current value of num, which will change when the state is updated

  return (
    <div>
      <p>Details of UseState Hook</p>
      <p>Value:{num}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default UseState;

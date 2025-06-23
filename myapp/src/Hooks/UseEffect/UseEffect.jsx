import React, { use, useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Componenet Rendered");
  }); // This will run after every render

  useEffect(() => {
    console.log("useEffect called");
  }, []); // This will run only once after the initial render

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // This will run only when 'count' changes

  useEffect(() => {
    console.log("Count Value : ", count);
    return () => {
      console.log("Cleanup for count:", count);
    };
  }, [count]);

  return (
    <div>
      <h1>UseEffect</h1>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default UseEffect;

/*
    What is useEffect? Why do we need it?
    --> useEffect is a React hook that allows to perform side effects in function components.
    Side effects are operations that can affect other components and cannot be done during 
    rendering, such as data fetching, subscriptions, or manually changing the DOM.

    When does useEffect run?
    --> useEffect runs after the component has rendered. If their is no dependency array,
    it runs after every render. 
    If the dependency array is empty, it runs only once after the initial render.

    If the dependency array contains variables, it runs only when those variables change.

    How to clean up useEffect?
    --> To clean up useEffect, we can return a function from the useEffect callback.
    This cleanup function will be called before the component is unmounted or before 
    the effect runs again.

    How to use multiple useEffect in a component?
    --> We can use multiple useEffect hooks in a component. Each useEffect can have its own
    dependency array and will run independently of the others. This allows us to separate
    different side effects and manage them more easily.

    Can useEffect cause an infinite loop? How to fix it?
    --> Yes, useEffect can cause an infinite loop if the dependency array is not set 
    correctly.
    For example, if we set a state variable inside useEffect without including it in the
    dependency array, it will cause the effect to run again and again, leading to an infinite
    loop. To fix this, we should ensure that the dependency array includes all variables that
    are used inside the useEffect callback, and avoid setting state variables that are already
    in the dependency array.

    useEffect(() => {
      setCount(count + 1);
    }, [count]);

*/

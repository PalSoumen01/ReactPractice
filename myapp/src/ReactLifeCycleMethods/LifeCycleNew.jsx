import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LifeCycleNew() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component bind to dom");
  }, []);

  useEffect(() => {
    console.log("Component get updated");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("Component unmounted from dom");
    };
  }, []);

  return (
    <div>
      <span>{count}</span>
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <br />
      <Link to="/about-us">About</Link>
    </div>
  );
}

export default LifeCycleNew;

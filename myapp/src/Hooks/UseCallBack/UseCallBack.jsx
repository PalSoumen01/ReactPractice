import React, { useCallback, useState } from "react";
import Child from "./Child";

function UseCallBack() {
  const [count, setCount] = useState(0);
  const [multiply, setMultiply] = useState(1);

  // function handleMultiply() {
  //   setMultiply(multiply * 2);
  // }

  const handleMultiply = useCallback(() => {
    setMultiply(multiply * 2);
  }, [multiply]);

  return (
    <div>
      <h2>UseCallBack</h2>

      <p>{count}</p>
      <br />
      <p>{multiply}</p>
      <br />

      <button onClick={() => setCount(count + 1)}>Click</button>

      <Child setMultiply={handleMultiply} />
      <br />
    </div>
  );
}

export default UseCallBack;

/*
    The useCallback hook is used to memoize a function, preventing it from being 
    recreated on every render.
    When we call a component here <Child/>, every time click the button "Click", and the 
    child component also re-renders, even if the props haven't changed.

    By using React.memo(memoisation), we can prevent the child component from re-rendering
    unless its props change. This can improve performance in cases where the parent
    component re-renders frequently, but the child component's props remain the same.
    
    But, the problem will occur when we pass callback functions as props to child components.
    if we use React.memo the child component will still re-render every time the parent 
    component re-renders, even if the props haven't changed, because there is a concept 
    in react call "referential equality". According to this concept, every time the parent 
    component re-renders, the function passed as a prop to the child component is recreated,
    causing the child component to re-render as well.

    To solve this problem, we can use the useCallback hook to memoize the function passed 
    as a prop to the child component. Still we need to use React.memo with useCallback 
    to prevent the child component from re-rendering.

    If we leave empty the dependency array it willl run only once when the component mounts,
    but if we pass a variable in the dependency array, it will run every time that variable
    changes.

    So, the difference between useMemo and useCallback is that useMemo is used to memoize
    a value, while useCallback is used to memoize a function. Both hooks can help
    optimize performance by preventing unnecessary re-renders, but they are used in 
    different scenarios. Use useMemo when we need to cache a value, and use useCallback 
    when we need to cache a function.
    
    The useCallback hook is particularly useful when passing callback functions to
    child components, as it helps to avoid unnecessary re-renders of those components
    when the parent component re-renders.

    This is especially important in performance-sensitive applications where
    re-rendering child components can lead to performance issues or slow down the user interface.
    In summary, useCallback is a hook that allows us to memoize functions in React,
    preventing them from being recreated on every render, which can help optimize performance
    and avoid unnecessary re-renders of child components.

*/

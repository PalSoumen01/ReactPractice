import React, { memo } from "react";

function Child({ setMultiply }) {
  console.log("Child component rendered");
  return (
    <div>
      <h2>Child</h2>
      <button onClick={setMultiply}>DoubleCount</button>
    </div>
  );
}

export default memo(Child);

/*
    Without memo, the child component would re-render every time the parent component 
    re-renders, even if the props haven't changed.
    By using memo, the child component will only re-render if its props change,
    which can improve performance in cases where the parent component re-renders frequently.
*/

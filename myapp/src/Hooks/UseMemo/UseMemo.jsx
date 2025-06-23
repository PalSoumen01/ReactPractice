import React, { useMemo, useState } from "react";

function UseMemo() {
  const [addition, setAddition] = useState(0);
  const [subtraction, setSubtraction] = useState(100);

  function add() {
    setAddition(addition + 1);
  }
  function subtract() {
    setSubtraction(subtraction - 1);
  }

  /*
    useMemo is a React Hook that memoizes the result of a computation. It helps optimize
    performance by preventing expensive calculations from running on every render, unless 
    necessary.
    Now in this component, memoizedValue call addition so it should be called every
    time addition changes. But memoizedValue also called when subtraction changes.
    So, memoizedValue is called every time either addition or subtraction changes,
    which creates performance issues.
    To fix this, we can use useMemo to memoize the result of memoizedValue.
*/

  // function memoizedValue () {
  //   console.log("MemoizedValue function called");
  //   return addition * 10;
  // }

  // ---------------- Using useMemo ----------------
  const memoizedValue = useMemo(() => {
    console.log("MemoizedValue function called");
    return addition * 10;
  }, [addition]);

  return (
    <div>
      <h2>UseMemo</h2>
      {/* <p>Anonymous Function Result: {annonymousFunction()}</p> */}
      <p>Anonymous Function Result: {memoizedValue}</p>
      <p>Addition : {addition}</p>
      <p>Subtraction : {subtraction}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  );
}

export default UseMemo;

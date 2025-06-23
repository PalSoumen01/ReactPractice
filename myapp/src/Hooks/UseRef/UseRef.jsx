import React, { useRef, useState } from "react";

function UseRef() {
  const [name, setName] = useState("");

  const inputRef = useRef();

  function handleClick() {
    console.log(name);
    setName("");
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>UseRef</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Type something..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default UseRef;

/*
    The useRef hook is used to create a mutable object that persists for the lifetime of 
    the component.
    It can be used to access DOM elements directly, store values that do not trigger 
    re-renders, or keep any mutable value around similar to how you would use instance 
    fields in classes.

    In this example, we are using useRef to create a reference to the input element.
    When the button is clicked, it logs the current value of the name state and clears the 
    input field, then focuses back on the input element using inputRef.current.focus().

    This is useful for managing focus, text selection, or media playback without causing 
    re-renders.

    Purpose of useRef in React:
    The useRef hook in React is used to persist values between renders without causing 
    re-renders, and to directly access or manipulate DOM elements.

    Main Uses of useRef:
    i. Accessing DOM elements (like document.getElementById)

      const inputRef = useRef();

      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      inputRef.current gives you direct access to the DOM element.
      Great for focusing input fields, playing videos, or scrolling.

    ii. Storing mutable values (non-DOM)
      const countRef = useRef(0);
      countRef.current += 1;
      Can store values that survive re-renders but won’t trigger re-renders when changed.
      Useful for timeouts, previous values, caching, etc.

    iii. Tracking previous state values
      const prevCount = useRef();

      useEffect(() => {
        prevCount.current = count;
      }, [count]);
      useRef helps remember the previous value of a state or prop across renders.

    Important Notes:
    Changing ref.current does not cause a re-render.

    It’s different from useState, which triggers re-render when updated.

    In Simple Words:
    useRef is like a box you can use to store anything (a DOM node, a value, or even a 
    timer) and React won’t re-render your component when you update it.
*/

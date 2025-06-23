# 📌 What is a React Hook?

A **React Hook** is a specialized function that allows **functional components** to access core React features such as:

- **State management**
- **Lifecycle methods**
- **Side effects**
- **Context API**

---

## 🎯 Why Hooks?

Before Hooks, only **class components** could manage state or use lifecycle methods. Hooks changed this by making these capabilities available in **functional components**, which are simpler and more concise.

---

## ✅ Benefits of Using Hooks

- Write **cleaner** and **more reusable** code.
- Eliminate the need for boilerplate-heavy class components.
- Easily **share logic** across components using custom hooks.
- Make components easier to read, test, and maintain.

---

## 🧪 Examples of Common Hooks

| Hook          | Purpose                                   |
| ------------- | ----------------------------------------- |
| `useState`    | Manage component state                    |
| `useEffect`   | Handle side effects (e.g., fetch, timers) |
| `useContext`  | Access context (global state)             |
| `useRef`      | Access or persist values between renders  |
| `useMemo`     | Optimize performance with memoization     |
| `useCallback` | Memoize functions to avoid re-renders     |

---

## 🛠️ Example: `useState` Hook

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

import { createContext, useState } from "react";

const Context = createContext();

const data = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.info",
};

function ContextProvider({ children }) {
  const [contextData, setContextData] = useState(data);
  return (
    <Context.Provider value={{ contextData, setContextData }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
export default ContextProvider;

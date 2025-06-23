import React, { useContext } from "react";
import { Context } from "./Context";
import UserData from "./UserData";

function UseContext() {
  const { contextData, setContextData } = useContext(Context);

  console.log("contextData : " + JSON.stringify(contextData));

  function handleUpdate() {
    setContextData((prevData) => ({
      ...prevData,
      contactNo: "123-456-7890",
      address: "123 Main St",
    }));
  }

  return (
    <>
      <div>
        <h2>UseContext</h2>
        <div>
          <h3>User Details</h3>
          <p>Name: {contextData.name}</p>
          <p>Age: {contextData.age}</p>
          <p>Email: {contextData.email}</p>
          <p>
            <strong>Note:</strong> This data is provided by the Context API.
          </p>
        </div>
        <button onClick={handleUpdate}>Update</button>
      </div>
      <UserData />
    </>
  );
}

export default UseContext;

/*
  The useContext hook in React is a way to share data between components without having 
  to pass props down manually through every level of the component tree. It is used in 
  conjunction with the Context API.

  It helps to avoid "prop drilling," which is the process of passing data through many
  layers of components, especially when the data is needed by many components at different
  levels of the component tree. By using useContext, we can access the context value directly
  in any component that is a descendant of the Context Provider, making it easier to manage
  and access shared state or data across the application.
*/

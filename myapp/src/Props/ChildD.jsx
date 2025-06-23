import React from "react";
import { Context } from "./ContextAPI/Context";

function ChildD() {
  return (
    <div>
      <h2>ChildD</h2>
      <Context.Consumer>
        {({ contextData }) => {
          return (
            <div>
              <p>Name: {contextData.name}</p>
              <p>Age: {contextData.age}</p>
              <p>City: {contextData.city}</p>
              <p>Email: {contextData.email}</p>
            </div>
          );
        }}
      </Context.Consumer>
    </div>
  );
}

export default ChildD;

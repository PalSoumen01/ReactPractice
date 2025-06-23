import React, { useContext } from "react";
import { Context } from "./Context";

function UserData() {
  const { contextData } = useContext(Context);

  return (
    <div>
      <h2>UserData</h2>
      <div>
        <h3>User Details</h3>
        <p>Name: {contextData.name}</p>
        <p>Age: {contextData.age}</p>
        <p>Email: {contextData.email}</p>
        <p>Contact Number : {contextData.contactNo}</p>
        <p>Address : {contextData.address}</p>
      </div>
    </div>
  );
}

export default UserData;

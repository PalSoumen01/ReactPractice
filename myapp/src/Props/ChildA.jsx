import React from "react";
import ChildB from "./ChildB";

function ChildA({ data, bikeData }) {
  console.log("data in ChildA:", data);
  return (
    <>
      <div>
        <h2>ChildA</h2>
        <p>Name: {data?.name}</p>
        <p>Age: {data?.age}</p>
        <p>City: {data?.city}</p>
        <p>Email: {data?.email}</p>
      </div>
      <div>
        <h2>Bikedata Pass throug ChildA</h2>
        <ChildB bikeData={bikeData} />
      </div>
    </>
  );
}

export default ChildA;

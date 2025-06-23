import React from "react";
import ChildC from "./ChildC";

function ChildB({ bikeData }) {
  return (
    <div>
      <h2>ChildB</h2>
      <p>Bike Data Pass Through ChildB</p>
      <ChildC bikeData={bikeData} />
    </div>
  );
}

export default ChildB;

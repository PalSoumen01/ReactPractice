import React from "react";
import ChildD from "./ChildD";

function ChildC({ bikeData }) {
  console.log(bikeData);
  return (
    <>
      <div>
        <h2>ChildC</h2>
        <h3>Inside ChildC Component</h3>
        <p>Bike Model Name: {bikeData?.modelName}</p>
        <p>Bike Model Year: {bikeData?.modelYear}</p>
        <p>Bike Model Price: {bikeData?.modelPrice}</p>
        <p>Bike Model Color: {bikeData?.modelColor}</p>
        <p>Bike Model Type: {bikeData?.modelType}</p>
        <p>Bike Model Name: {bikeData?.brandName}</p>
      </div>
      <ChildD />
    </>
  );
}

export default ChildC;

import React from "react";
import ChildA from "./ChildA";

function PropsDrilling({ data }) {
  const bikeData = {
    modelName: "Kawasaki Ninja",
    modelYear: 2023,
    modelPrice: 1500000,
    modelColor: "Green",
    modelType: "Sport Bike",
    brandName: "Kawasaki",
  };

  return (
    <div>
      <h2>Concept of Props Drilling</h2>
      <ChildA data={data} bikeData={bikeData} />
    </div>
  );
}

export default PropsDrilling;

/*
    Props Drilling is a concept in React where data is passed from a parent component to 
    a deeply nested child component through multiple layers of intermediate components. 
    
    This can lead to a situation where components that do not need the data still receive 
    it, making the code less clean and harder to maintain.
    
    To avoid props drilling, we can use Context API or state management libraries like 
    Redux.

    Here, I need to the bike data to the ChildC component, but it is passed through
    ChildA and ChildB, which do not use it. This is an example of props drilling.
*/

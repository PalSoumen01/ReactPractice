import React, { useState } from "react";

function ChildComponent({ updateData }) {
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data in child component : " + data);
    updateData(data);
    setData("");
  };

  return (
    <div>
      <h2>Child Component</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ChildComponent;

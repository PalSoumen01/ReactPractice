/*
    useReducer is a React Hook used for managing complex state logic in functional components.
    It serves as an alternative to useState, particularly when state transitions involve 
    multiple sub-values or depend on the previous state.
*/
import React, { useReducer } from "react";

function reducerFunction(currentState, nextState) {
  return { ...currentState, ...nextState };
}
const initialState = {
  name: "",
  email: "",
};

function UseReducer() {
  const [formData, setFormData] = useReducer(reducerFunction, initialState);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted : " + JSON.stringify(formData));
  };

  return (
    <div>
      <h2>UseReducer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => console.log(formData)}>
          Log Data
        </button>
      </form>
    </div>
  );
}

export default UseReducer;

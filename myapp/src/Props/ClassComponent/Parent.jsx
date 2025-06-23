import { Component } from "react";
import Child from "./Child";
import ComponentA from "./ComponentA";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "John Doe",
        age: 30,
        city: "New York",
      },
    };
  }
  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        <p>Parent Component Call Child Componenet</p>
        {/* <Child name="John Doe" /> */}
        <Child user={this.state.user} />
        <ComponentA />
      </div>
    );
  }
}

export default Parent;

import React, { Component } from "react";
import ComponentB from "./ComponentB";

export default class ComponentA extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      setCount: (value) => {
        this.setState({ count: value + 1 });
      },
    };
  }
  render() {
    return (
      <>
        <div>ComponentA</div>
        <div>Count: {this.state.count}</div>
        <ComponentB count={this.state.count} setCount={this.state.setCount} />
      </>
    );
  }
}

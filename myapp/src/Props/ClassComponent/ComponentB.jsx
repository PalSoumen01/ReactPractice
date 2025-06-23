import React, { Component } from "react";

export default class ComponentB extends Component {
  render() {
    return (
      <div>
        <h2>ComponentB</h2>
        <p>Count in ComponenetB : {this.props.count}</p>
        <button onClick={() => this.props.setCount(this.props.count)}>
          Click
        </button>
      </div>
    );
  }
}

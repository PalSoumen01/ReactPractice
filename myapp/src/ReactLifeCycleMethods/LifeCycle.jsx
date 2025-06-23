import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("ComponentDidMount called");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount called");
  }

  render() {
    return (
      <div>
        <h2>LifeCycle</h2>
        <br />
        <span>Count : {this.state.count}</span>
        <br />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrement
        </button>
        <br />
        <Link to="/about-us">About</Link>
      </div>
    );
  }
}

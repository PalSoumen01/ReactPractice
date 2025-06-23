import React, { Component } from "react";

class Child extends Component {
  render() {
    console.log("Child Component Props:", this.props.user);
    return (
      <div>
        <h2>Child Component</h2>
        <p>Name : {this.props.user.name}</p>
        <p>Age : {this.props.user.age}</p>
        <p>City : {this.props.user.city}</p>
      </div>
    );
  }
}

export default Child;

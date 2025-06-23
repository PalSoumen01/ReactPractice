import React from "react";

function withCount(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      console.log("WrappedComponent Props:", props);
      super(props);
      this.state = {
        count: 0,
      };
    }

    increaseCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return (
        <WrappedComponent
          {...this.props} // pass the props which came from the parent component
          count={this.state.count}
          increaseCount={this.increaseCount}
        />
      );
    }
  };
}

export default withCount;

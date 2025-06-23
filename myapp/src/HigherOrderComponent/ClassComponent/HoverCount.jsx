import React from "react";
import withCount from "./Util/withCount";

class HoverCount extends React.Component {
  render() {
    console.log("Props in HoverCount:", this.props);
    return (
      <div className="flex flex-col items-center bg-white rounded-xl shadow p-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-700">
          {this.props.name}
        </h2>
        <span
          onMouseEnter={this.props.increaseCount}
          className="cursor-pointer px-8 py-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition text-2xl font-bold"
          style={{ display: "inline-block" }}
        >
          {this.props.count}
        </span>
        <p className="mt-2 text-gray-500 text-sm">
          Hover over the number to increase
        </p>
      </div>
    );
  }
}

export default withCount(HoverCount);

import React, { Component } from "react";
import ClickCount from "./ClickCount";
import HoverCount from "./HoverCount";

class HOC extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">
          Higher Order Component
        </h2>
        <div className="space-y-8 w-full max-w-md">
          <ClickCount name="Click Counter" />
          <HoverCount name="Hover Counter" />
        </div>
      </div>
    );
  }
}

export default HOC;

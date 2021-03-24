import React, { Component } from "react";

export default class StickMenu extends Component {
  render() {
    return (
      <div className="flex flex-col sticky top-5 ml-4 mr-24">
        <div className="bg-blue-400 w-16 h-16 text-white text-center">
          Digikala
          <br />
          MAG
        </div>
        <div className="bg-white w-16 h-16">Dick</div>
        <div className="bg-white w-16 h-16">Dick</div>
      </div>
    );
  }
}

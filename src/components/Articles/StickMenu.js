import React, { Component } from "react";

export default class StickMenu extends Component {
  render() {
    return (
      <div className="flex flex-col sticky top-5 mx-6">
        <div className="bg-blue-400 w-24 h-24 text-white text-center">
          Digikala
          <br />
          MAG
        </div>
        <div className="bg-white w-24 h-24">Dick</div>
        <div className="bg-white w-24 h-24">Dick</div>
      </div>
    );
  }
}

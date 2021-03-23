import React, { Component } from "react";
import SideMenu from "./SideMenu";

export default class SideMenus extends Component {
  render() {
    return (
      <div className="w-1/4">
        <SideMenu />
        <br></br>
        <SideMenu />
        <br></br>
        <SideMenu />
      </div>
    );
  }
}

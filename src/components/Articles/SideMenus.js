import React, { Component } from "react";
import SideMenu from "./SideMenu";

export default class SideMenus extends Component {
  render() {
    return (
      <div className="loptop:w-1/4 phone:w-44">
        <SideMenu />
        <br></br>
        <SideMenu />
      </div>
    );
  }
}

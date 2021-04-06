import React, { Component } from "react";
import Categories from "../HomePage/Categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default class Dropdown extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
      </div>
    );
  }
}

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class Search extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faSearch} className="text-4xl text-gray-400" />
      </div>
    );
  }
}

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class Search extends Component {
  render() {
    return (
      <div className="pl-6 border-l-2 text-white header:border-gray-200">
        <FontAwesomeIcon icon={faSearch} className="text-4xl text-gray-400" />
      </div>
    );
  }
}

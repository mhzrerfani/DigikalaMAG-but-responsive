import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

export default class StickMenu extends Component {
  render() {
    return (
      <div className="flex flex-col sticky top-5 mx-6">
        <div className=" flex bg-primary w-24 h-24 ">
          <h6 className="mx-auto self-center text-center text-white text-2xl">
            Digikala
            <br />
            MAG
          </h6>
        </div>
        <div className="bg-white w-24 h-24 flex items-center text-gray-400 text-5xl">
          <FontAwesomeIcon icon={faSearch} className="mx-auto" />
        </div>
        <div className="bg-white w-24 h-24 flex items-center text-gray-400 text-5xl">
          <FontAwesomeIcon icon={faUser} className="mx-auto" />
        </div>
      </div>
    );
  }
}

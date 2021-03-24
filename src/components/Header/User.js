import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import UserModal from "./UserModal";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false,
    };
  }
  toggleModal = () => {
    this.setState({ seen: !this.state.seen });
  };

  render() {
    return (
      <div className="flex  mr-6 text-gray-400  items-center  pr-6 border-r-2 border-gray-50">
        <div className=" pr-6 border-r-2 border-gray-50">
          <FontAwesomeIcon icon={faUser} className="text-4xl text-gray-400" />
        </div>

        <div onClick={this.toggleModal} className="mr-5">
          <button>ورود</button>
        </div>
        <span className="ml-2 mr-2">/</span>
        <h3>
          <a href="#">ثبت نام</a>
        </h3>
        {this.state.seen ? <UserModal toggle={this.toggleModal} /> : null}
      </div>
    );
  }
}

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
      <div className="flex border-r mr-4">
        <FontAwesomeIcon
          icon={faUser}
          className="text-4xl text-gray-400 mr-4"
        />
        <div onClick={this.toggleModal}>
          <button>ورود</button>
        </div>
        <span>/</span>
        <h3>
          <a href="#">ثبت نام</a>
        </h3>
        {this.state.seen ? <UserModal toggle={this.toggleModal} /> : null}
      </div>
    );
  }
}

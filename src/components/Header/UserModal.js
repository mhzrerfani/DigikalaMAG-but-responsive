import React, { Component } from "react";

class UserModal extends Component {
  handle = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="animate-modalShow	absolute bg-white bg-opacity-80 w-screen h-screen z-50 inset-0 -translate-x-full">
        <div
          className="flex h-20 inset-text-xl bg-white text-gray-500 text-2xl flex-row-reverse ml-8"
          onClick={this.handle}
        >
          <button className="mr-5 text-5xl">X</button>
          <button>بازگشت</button>
        </div>
      </div>
    );
  }
}

export default UserModal;

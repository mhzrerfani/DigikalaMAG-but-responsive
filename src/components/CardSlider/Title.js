import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <div className="flex">
        <div className="flex w-4/5 justify-between mx-auto p-6">
          <span>منتخب سردبیر</span>
          <span>مشاهده عناوین بیشتر</span>
        </div>
      </div>
    );
  }
}

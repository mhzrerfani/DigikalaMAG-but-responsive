import React, { Component } from "react";
import Hashtags from "./Hashtags";

export default class HashtagsList extends Component {
  render() {
    return (
      <div className="flex items-center">
        <h1 className="pr-5 ml-4">هشتگ های داغ:</h1>
        <Hashtags />
      </div>
    );
  }
}

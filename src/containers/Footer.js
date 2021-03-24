import React, { Component } from "react";
import Brands from "../components/Footer/Brands";
import Links from "../components/Footer/Links";
export default class Footer extends Component {
  render() {
    return (
      <div className="mt-36">
        <Brands />
        <Links />
      </div>
    );
  }
}

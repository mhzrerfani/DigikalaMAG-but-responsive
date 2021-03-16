import React, { Component } from "react";
import CategoryList from "../components/HomePage/CategoryList";
import Banner from "../components/HomePage/Banner";

export default class HomePage extends Component {
  render() {
    return (
      <div className="flex w-min-full justify-center">
        <div className="flex w-11/12 justify-self-center justify-between">
          <CategoryList />
          <Banner />
        </div>
      </div>
    );
  }
}

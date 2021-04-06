import React, { Component } from "react";
import Categories from "../HomePage/Categories";

export default class CategoryList extends Component {
  render() {
    return (
      <div className="bg-white shadow-xl header:hidden">
        <Categories />
      </div>
    );
  }
}

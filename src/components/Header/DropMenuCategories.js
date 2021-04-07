import React, { Component } from "react";
import Categories from "../HomePage/Categories";
import User from "../Header/User";
import Search from "../Header/Search";

export default class DropMenuCategories extends Component {
  render() {
    return (
      <div className="loptop:hidden flex flex-col">
        <Categories />
        <div className="flex border-t pt-4 mr-3">
          <Search />
          <User />
        </div>
      </div>
    );
  }
}

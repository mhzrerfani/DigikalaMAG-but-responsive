import React, { Component } from "react";
import Logo from "../components/Header/Logo";
import HashtagsList from "../components/Header/HashtagsList";
import Search from "../components/Header/Search";
import User from "../components/Header/User";
import Dropdown from "../components/Header/Dropdown";

export default class Header extends Component {
  render() {
    return (
      <div className="flex h-20 bg-white justify-center min-w-full">
        <div className="flex h-20 items-center justify-between w-full max-w-7xl ml-2 justify-self-center header:hidden">
          <div className="flex items-center">
            <Logo />
            <HashtagsList />
          </div>
          <div className="flex items-center divide-x-0 divide-gray-400">
            <Search />
            <User />
          </div>
        </div>
        <div className="loptop:hidden bg-primary w-full">
          <div className="flex justify-items-center justify-between items-center mx-3">
            <Dropdown />
            <Logo />
            <div className="flex items-center text-white">
              <Search />
              <User />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Title from "../components/Articles/Title";
import ArticlesList from "../components/Articles/ArticlesList";
import SideMenus from "../components/Articles/SideMenus";
import StickMenu from "../components/Articles/StickMenu";
export default class Articles extends Component {
  render() {
    return (
      <div className="mt-32 flex justify-start ml-2">
        <div>
          <StickMenu />
        </div>
        <div className="w-full max-w-6xl mx-a">
          <Title />
          <div className="flex items-start">
            <ArticlesList />
            <SideMenus />
          </div>
        </div>
      </div>
    );
  }
}

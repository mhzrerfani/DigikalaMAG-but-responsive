import React, { Component } from "react";
import Title from "../components/Articles/Title";
import ArticlesList from "../components/Articles/ArticlesList";
import SideMenus from "../components/Articles/SideMenus";
import StickMenu from "../components/Articles/StickMenu";
export default class Articles extends Component {
  render() {
    return (
      <div className="mt-32 flex justify-start">
        <div>
          <StickMenu />
        </div>
        <div className="w-3/4 mx-a">
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

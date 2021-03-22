import React, { Component } from "react";
import Title from "../components/Articles/Title";
import ArticlesList from "../components/Articles/ArticlesList";
import SideMenu from "../components/Articles/SideMenu";

export default class Articles extends Component {
  render() {
    return (
      <div className="mt-32">
        <div className="w-3/4 mx-auto">
          <Title />
          <div className="flex">
            <ArticlesList />
            <SideMenu />
          </div>
        </div>
      </div>
    );
  }
}

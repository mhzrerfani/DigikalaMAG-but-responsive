import React, { Component } from "react";
import CategoryList from "../components/HomePage/CategoryList";
import Banner from "../components/HomePage/Banner";
import Posts from "../components/HomePage/Posts";
import AdPost from "../components/HomePage/AdPost";

export default class HomePage extends Component {
  render() {
    return (
      <div className="flex w-min-full justify-center">
        <div className="flex w-11/12 justify-self-center justify-between">
          <div className="flex flex-col w-64 flex-shrink-0">
            <CategoryList />
            <AdPost />
          </div>
          <div className="flex flex-col mt-2 mr-2 ">
            <Banner />
            <Posts />
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import CategoryList from "../components/HomePage/CategoryList";
import Banner from "../components/HomePage/Banner";
import Posts from "../components/HomePage/Posts";
import AdPost from "../components/HomePage/AdPost";

export default class HomePage extends Component {
  render() {
    return (
      <div className="flex w-min-full justify-center gap-4">
        <div className="flex w-full max-w-7xl justify-self-center justify-between gap-5 ml-2">
          <div className="flex flex-col w-60 flex-shrink-0 gap-5">
            <CategoryList />
            <AdPost />
          </div>
          <div className="flex flex-col gap-5">
            <Banner />
            <Posts />
          </div>
        </div>
      </div>
    );
  }
}

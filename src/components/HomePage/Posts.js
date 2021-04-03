import React, { Component } from "react";
import axios from "axios";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:8080/posts.json").then((res) => {
      const posts = res.data.posts;
      this.setState({ posts });
    });
  }
  render() {
    return (
      <div className="grid grid-cols-4 grid-flow-row gap-4">
        {this.state.posts.map((post, className = "") => {
          if (post.id === 4) className += " row-span-2";
          if (post.id === 5) className += " col-span-2";
          return (
            <div className={`relative ${className}`} key={post.id}>
              <img
                src={post.image}
                alt="post"
                title={post.title}
                className="h-full"
              ></img>
              <p className=" bg-gray-300 bg-opacity-50 py-3 absolute w-full bottom-0">
                {post.title}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

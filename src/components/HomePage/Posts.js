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
    axios
      .get("http://127.0.0.1:5500/src/assets/data/posts.json")
      .then((res) => {
        const posts = res.data.posts;
        this.setState({ posts });
      });
  }
  render() {
    return (
      <div className="grid grid-cols-4 grid-flow-row gap-4 mt-2">
        {this.state.posts.map((post, className = "post") => {
          if (post.id === 4) className += " row-span-2";
          if (post.id === 5) className += " col-span-2";
          return (
            <div className={className} key={post.id}>
              <img src={post.image} alt="post"></img>
              <p>{post.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";

export default class Hashtags extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hashtags: [],
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8080/hashtags.json").then((res) => {
      const hashtags = res.data.hashtags;
      this.setState({ hashtags });
    });
  }
  render() {
    return (
      <div>
        <ul className="list-none bg-gray-100 flex rounded-full p-4">
          {this.state.hashtags.map((hashtag) => (
            <li className="hashtag" key={hashtag}>
              {hashtag}#
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

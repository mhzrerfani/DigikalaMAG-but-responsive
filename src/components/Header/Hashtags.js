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
        <div className="bg-gray-100 flex rounded-full pr-6 pl-6 ">
          {this.state.hashtags.map((hashtag) => (
            <span className="hashtag" key={hashtag}>
              #{hashtag}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

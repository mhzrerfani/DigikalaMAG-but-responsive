import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faMicrochip,
  faGamepad,
  faBook,
  faVideo,
  faTree,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      icons: [
        faNewspaper,
        faMicrochip,
        faGamepad,
        faBook,
        faVideo,
        faTree,
        faStore,
        faStore,
      ],
      bgColor: [
        "bg-blue-400",
        "bg-purple-400",
        "bg-yellow-400",
        "bg-green-400",
        "bg-indigo-400",
        "bg-pink-400",
        "bg-red-400",
        "bg-red-400",
      ],
    };
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:8080/categories.json").then((res) => {
      const categories = res.data.categories;
      this.setState({ categories });
    });
  }
  render() {
    return (
      <div className="flex flex-col">
        <ul>
          {this.state.categories.map((category, i) => {
            return (
              <li className={`category hover:${this.state.bgColor[i]}`}>
                <FontAwesomeIcon
                  icon={this.state.icons[i]}
                  className="category-icon"
                />
                <span className="category-title">{category.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

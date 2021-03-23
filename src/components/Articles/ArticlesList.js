import React, { Component } from "react";
import axios from "axios";

export default class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:8080/articles.json").then((res) => {
      const articles = res.data.articles;
      this.setState({ articles });
    });
  }
  render() {
    return (
      <div className="grid grid-cols-3 w-3/4 gap-4 ml-4">
        {this.state.articles.map((article) => {
          return (
            <div className="shadow-xl">
              <img src={article.cover} alt="cover"></img>
              <h5>{article.title}</h5>
              <div className="flex justify-between items-center pr-2 pl-2">
                <div className="flex items-center">
                  <img
                    src={article.avatar}
                    alt="avatar"
                    className="rounded-full"
                  ></img>
                  <span className="text-sm">{article.author}</span>
                </div>
                <span className="text-sm">{article.date}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

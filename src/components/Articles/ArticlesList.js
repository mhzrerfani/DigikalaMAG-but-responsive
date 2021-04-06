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
      <div className="grid desktop:grid-cols-3 loptop:grid-cols-2 tablet:grid-cols-2 w-3/4 gap-4 ml-4">
        {this.state.articles.map((article) => {
          return (
            <div className="shadow-xl">
              <img src={article.cover} alt="cover"></img>
              <h5 className="text-center mx-8 my-3">{article.title}</h5>
              <div className="flex justify-between items-center mx-5 text-gray-400 mb-5">
                <div className="flex items-center">
                  <img
                    src={article.avatar}
                    alt="avatar"
                    className="rounded-full w-10"
                  ></img>
                  <span className="text-sm mr-2">{article.author}</span>
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

import React, { Component } from "react";
import Title from "../components/CardSlider/Title";
import Cards from "../components/CardSlider/Cards";

export default class CardSlider extends Component {
  render() {
    return (
      <div>
        <Title />
        <Cards />
      </div>
    );
  }
}

import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import axios from "axios";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation]);
export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8080/articles.json").then((res) => {
      console.log(res);
      const cards = res.data.articles;
      this.setState({ cards });
    });
  }
  render() {
    return (
      <div>
        <Swiper
          breakpoints={{
            586: {
              slidesPerView: 2,
            },
            886: {
              slidesPerView: 3,
            },
            1211: {
              slidesPerView: 4,
            },
          }}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          key={Date.now()}
        >
          {this.state.cards.map((card) => {
            return (
              <SwiperSlide className="bg-white shadow-xl" key={card.id}>
                <div>
                  <img src={card.cover} alt="cover"></img>
                  <h5 className="text-center mx-8 my-3">{card.title}</h5>
                  <div className="flex justify-between items-center mx-5 text-gray-400 mb-5">
                    <div className="flex items-center">
                      <img
                        src={card.avatar}
                        alt="avatar"
                        className="rounded-full w-10"
                      ></img>
                      <span className="text-sm mr-2">{card.author}</span>
                    </div>

                    <span className="text-sm">{card.date}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }
}

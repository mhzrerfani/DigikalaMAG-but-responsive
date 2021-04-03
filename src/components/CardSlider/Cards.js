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
          // breakpoints={{
          //   // when window width is >= 640px
          //   640: {
          //     width: 640,
          //     slidesPerView: 1,
          //   },
          //   // when window width is >= 768px
          //   768: {
          //     width: 768,
          //     slidesPerView: 2,
          //   },
          // }}
          navigation
          spaceBetween={50}
          slidesPerView={4}
          key={Date.now()}
        >
          {this.state.cards.map((card) => {
            return (
              <SwiperSlide className="bg-white shadow-xl" key={card.id}>
                <div>
                  <img src={card.cover} alt="cover"></img>
                  <h5>{card.title}</h5>
                  <div className="flex justify-between items-center pr-2 pl-2">
                    <div className="flex items-center">
                      <img
                        src={card.avatar}
                        alt="avatar"
                        className="rounded-full"
                      ></img>
                      <span className="text-sm">{card.author}</span>
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

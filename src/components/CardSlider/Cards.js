import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import axios from "axios";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Scrollbar]);
export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    const swiper = document.querySelector(".swiper-container").swiper;

    // Now you can use all slider methods like
    console.log(swiper.update);

    axios.get("http://127.0.0.1:8080/cards.json").then((res) => {
      const cards = res.data.cards;
      this.setState({ cards });
    });
  }
  render() {
    return (
      <div>
        <Swiper
          navigation
          spaceBetween={50}
          slidesPerView={5}
          scrollbar={{ draggable: true }}
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

import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import axios from "axios";
import "swiper/swiper.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

SwiperCore.use([Navigation]);
export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8080/cards.json").then((res) => {
      const cards = res.data.cards;
      this.setState({ cards });
    });
  }
  render() {
    return (
      <div className="flex items-center h-full relative">
        <button className="swiper-button-prev absolute right-0 z-10 bg-white rounded-l-full w-16 h-32">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-4xl text-gray-400 "
          />
        </button>
        <button className="swiper-button-next absolute left-0 z-10 bg-white rounded-r-full w-16 h-32">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-4xl text-gray-400"
          />
        </button>

        <Swiper
          className="min-w-full"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={50}
          slidesPerView={5}
        >
          {this.state.cards.map((card) => {
            return (
              <SwiperSlide className=" bg-white shadow-xl" key={card.id}>
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

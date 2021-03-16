import React, { Component } from "react";
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
  render() {
    return (
      <div className="flex flex-col">
        <ul>
          <li className="category">
            <FontAwesomeIcon icon={faNewspaper} className="category-icon" />
            <span className="category-title">جدیدترین مطالب</span>
          </li>
          <li className="category">
            <FontAwesomeIcon icon={faMicrochip} className="category-icon" />
            <span className="category-title">علم و تکنولوژی</span>
          </li>
          <li className="category">
            <FontAwesomeIcon icon={faGamepad} className="category-icon" />
            <span className="category-title">بازی ویدئویی</span>
          </li>
          <li className="category">
            <FontAwesomeIcon icon={faBook} className="category-icon" />
            <span className="category-title">کتاب و ادبیات</span>
          </li>
          <li className="category">
            <FontAwesomeIcon icon={faVideo} className="category-icon" />
            <span className="category-title">هنر و سینما</span>
          </li>
          <li className="category">
            <FontAwesomeIcon icon={faTree} className="category-icon" />
            <span className="category-title">سبک زندگی</span>
          </li>
          <li className="category">
            <FontAwesomeIcon icon={faStore} className="category-icon" />
            <span className="category-title">اتاق خبر دیجی کالا</span>
          </li>
          <li className="category">
            <FontAwesomeIcon icon={faStore} className="category-icon" />
            <span className="category-title">فروشگاه دیجی کالا</span>
          </li>
        </ul>
      </div>
    );
  }
}

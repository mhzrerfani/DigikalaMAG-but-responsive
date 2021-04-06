import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default class Links extends Component {
  render() {
    return (
      <div className="bg-footer2">
        <div className="w-full max-w-7xl flex-col mx-auto px-2">
          <div className="flex justify-between max-w-2xl pt-9 text-white tablet:flex-row flex-col gap-3">
            <div>فروشگاه اینترنتی دیجی‌کالا</div>
            <div>درباره دیجی‌کالا مگ</div>
            <div>شرایط بازنشر محتوا</div>
            <div>فرصت‌های شغلی</div>
          </div>
          <div className="flex justify-between py-9 text-footer3 tablet:flex-row flex-col gap-5">
            <div>
              استفاده از مطالب دیجی‌کالا مگ برای مقاصد غیرتجاری با ذکر نام
              دیجی‌کالا مگ و لینک به منبع بلامانع است. حقوق این سایت به
              <span className="text-white px-1">
                شرکت نوآوران فن‌آوازه (فروشگاه آنلاین دیجی‌کالا)
              </span>
              تعلق دارد.
            </div>
            <div className="text-2xl flex gap-2">
              <span>
                <a href="https://www.instagram.com/digikalamag/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="hover:text-instagram"
                  />
                </a>
              </span>
              <span>
                <a href="https://twitter.com/digikalamag">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="hover:text-twitter"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

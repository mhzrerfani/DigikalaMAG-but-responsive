import React, { Component } from "react";

export default class SideMenu extends Component {
  render() {
    return (
      <div className="shadow-xl bg-white">
        <div className="flex flex-col ">
          <h5>ویدیوهای دیجی‌کالا مگ</h5>
          <div className="flex flex-col justify-items-center">
            <img
              src="https://www.digikala.com/mag/wp-content/uploads/2021/03/ibm-simon-150x150.jpg"
              alt="ibm-simon"
            ></img>
            <h6>IBM Simon؛ گوشی هوشمندی که ۱۵ سال زود متولد شد!</h6>
          </div>
        </div>
        <div className="flex p-5 items-center border-t mt-5">
          <img
            className="w-16 h-16"
            src="https://www.digikala.com/mag/wp-content/uploads/2021/02/wall-e-60x60.jpg"
            alt="wall-e"
          ></img>
          <div className="text-sm pr-4">
            <p>
              معرفی فیلم وال ای، زمانی برای عاشقی کردن (فیلم‌های نوروزی قسمت ۴)
            </p>
            <span>۴ ساعت قبل</span>
          </div>
        </div>
        <div className="flex p-5 items-center border-t mt-5">
          <img
            className="w-16 h-16"
            src="https://www.digikala.com/mag/wp-content/uploads/2021/02/wall-e-60x60.jpg"
            alt="wall-e"
          ></img>
          <div className="text-sm pr-4">
            <p>
              معرفی فیلم وال ای، زمانی برای عاشقی کردن (فیلم‌های نوروزی قسمت ۴)
            </p>
            <span>۴ ساعت قبل</span>
          </div>
        </div>
        <div className="flex p-5 items-center border-t mt-5">
          <img
            className="w-16 h-16"
            src="https://www.digikala.com/mag/wp-content/uploads/2021/02/wall-e-60x60.jpg"
            alt="wall-e"
          ></img>
          <div className="text-sm pr-4">
            <p>
              معرفی فیلم وال ای، زمانی برای عاشقی کردن (فیلم‌های نوروزی قسمت ۴)
            </p>
            <span>۴ ساعت قبل</span>
          </div>
        </div>
      </div>
    );
  }
}

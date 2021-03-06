import React, { Component } from "react";

export default class SideMenu extends Component {
  render() {
    return (
      <div className="shadow-xl bg-white">
        <div className="flex flex-col mb-16">
          <h5 className="text-center my-7">ویدیوهای دیجی‌کالا مگ</h5>
          <div className="flex flex-col justify-items-center">
            <img
              src="https://www.digikala.com/mag/wp-content/uploads/2021/03/ibm-simon-150x150.jpg"
              alt="ibm-simon"
              className="rounded-full mx-auto mb-7 text-center"
            ></img>
            <h6 className="text-center mx-2">
              IBM Simon؛ گوشی هوشمندی که ۱۵ سال زود متولد شد!
            </h6>
          </div>
        </div>
        <div className="flex p-5 items-center border-t header:flex-col">
          <img
            className="w-16 h-16"
            src="https://www.digikala.com/mag/wp-content/uploads/2021/02/wall-e-60x60.jpg"
            alt="wall-e"
          ></img>
          <div className="text-sm loptop:pr-4 header:pt-4 header:text-center">
            <p>
              معرفی فیلم وال ای، زمانی برای عاشقی کردن (فیلم‌های نوروزی قسمت ۴)
            </p>
            <span className="text-gray-500">۴ ساعت قبل</span>
          </div>
        </div>
        <div className="flex p-5 items-center border-t header:flex-col">
          <img
            className="w-16 h-16"
            src="https://www.digikala.com/mag/wp-content/uploads/2021/02/wall-e-60x60.jpg"
            alt="wall-e"
          ></img>
          <div className="text-sm loptop:pr-4 header:pt-4 header:text-center">
            <p>
              معرفی فیلم وال ای، زمانی برای عاشقی کردن (فیلم‌های نوروزی قسمت ۴)
            </p>
            <span className="text-gray-500">۴ ساعت قبل</span>
          </div>
        </div>
        <div className="flex p-5 items-center border-t header:flex-col">
          <img
            className="w-16 h-16"
            src="https://www.digikala.com/mag/wp-content/uploads/2021/02/wall-e-60x60.jpg"
            alt="wall-e"
          ></img>
          <div className="text-sm loptop:pr-4 header:pt-4 header:text-center">
            <p>
              معرفی فیلم وال ای، زمانی برای عاشقی کردن (فیلم‌های نوروزی قسمت ۴)
            </p>
            <span className="text-gray-500">۴ ساعت قبل</span>
          </div>
        </div>
      </div>
    );
  }
}

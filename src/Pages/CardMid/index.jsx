import React from "react";

import novelty from "../../img/card_icon/new.png";
import starLike from "../../img/card_icon/starLike.png";
import star from "../../img/card_icon/star.png";

const CardMiddle = ({ item }) => {
  return (
    <section className="flex-col w-[242px] h-[390px] bg-white rounded-[4px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] ">
      <div className="flex justify-between pt-[11px] pb-[12px] ">
        <img src={novelty} alt="novelty" />
        <div className="flex pr-[16px] gap-[10px] items-center ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.37161 6.02266L2.51953 15.2141C2.51953 20.4226 10.2237 20.4226 10.2237 15.2141L6.37161 6.02266ZM6.37161 6.02266L17.6315 5.10352M17.6315 5.10352L21.4836 14.2949C21.4836 19.197 14.0758 19.197 14.0758 14.2949L17.6315 5.10352Z"
              stroke="#01579B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <ellipse
              cx="11.9989"
              cy="5.71628"
              rx="0.592628"
              ry="0.612762"
              stroke="#01579B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="3.26953"
              y1="14.7715"
              x2="9.47369"
              y2="14.7715"
              stroke="#01579B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="14.5273"
              y1="14.1582"
              x2="20.7315"
              y2="14.1582"
              stroke="#01579B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.944 4.43961L14.9443 4.43986C15.2484 4.74083 15.4892 5.09777 15.6534 5.49011C15.8176 5.88243 15.902 6.30267 15.902 6.72689C15.902 7.15111 15.8176 7.57135 15.6534 7.96367C15.4892 8.356 15.2484 8.71295 14.9443 9.01392L14.9442 9.01404L14.1681 9.7825L8.99961 14.9002L3.83116 9.7825L3.05508 9.01404C2.44118 8.40618 2.09766 7.58331 2.09766 6.72689C2.09766 5.87046 2.44118 5.0476 3.05508 4.43973C3.66922 3.83162 4.50375 3.48867 5.37545 3.48867C6.24715 3.48867 7.08168 3.83162 7.69583 4.43973L8.22353 3.90679L7.69583 4.43973L8.47191 5.20819C8.76419 5.4976 9.23504 5.4976 9.52732 5.20819L10.3034 4.43973L10.3035 4.43961C10.6075 4.13848 10.9688 3.89922 11.367 3.73584C11.7652 3.57247 12.1923 3.48828 12.6238 3.48828C13.0553 3.48828 13.4823 3.57247 13.8805 3.73584C14.2787 3.89922 14.6401 4.13848 14.944 4.43961Z"
              stroke="#01579B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="w-[218px] h-[214px] pb-[12px] ">
        <img className="w-full h-full " src={item.image} alt="картинка" />
      </div>
      <div className="text-[#333333] text-[14px] font-bold leading-[16px] px-[12px] pb-[12px]">
        {item.title}
      </div>
      <div className="flex justify-between px-[12px] pb-[12px]">
        <div className="flex gap-[6px] items-center ">
          <img
            className="flex w-[12px] h-[12px] "
            src={starLike}
            alt="starLike"
          />
          <img
            className="flex w-[12px] h-[12px] "
            src={starLike}
            alt="starLike"
          />
          <img
            className="flex w-[12px] h-[12px] "
            src={starLike}
            alt="starLike"
          />
          <img
            className="flex w-[12px] h-[12px] "
            src={starLike}
            alt="starLike"
          />
          <img className="flex w-[12px] h-[12px] " src={star} alt="star" />
        </div>
        <div className="flex gap-[2px] ">
          <span>Отзывов:</span>
          <span>{item.comment}</span>
        </div>
      </div>
      <div className="flex px-[12px] justify-between ">
        <div className="flex text-[#060F42] text-[18px] font-bold leading-[24px]">
          {item.price} сом
        </div>
        <button
          className="flex text-center px-[12px] py-[10px] bg-[#06A56C] rounded-[4px] text-[#F4F8FB] text-[12px] font-bold leading-[12px] "
          type="button"
        >
          КУПИТЬ
        </button>
      </div>
    </section>
  );
};

export default CardMiddle;

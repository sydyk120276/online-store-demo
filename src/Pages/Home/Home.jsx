import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation, Pagination, Autoplay } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";

import NEW from "../../img/SaidBar/NEW.png";
import slaiderIcon_1 from "../../img/Slaider/icon/icon_1.png";
import slaiderIcon_2 from "../../img/Slaider/icon/icon_2.png";
import slaiderIcon_3 from "../../img/Slaider/icon/icon_3.png";
import slaiderIcon_4 from "../../img/Slaider/icon/icon_4.png";
import slaiderIcon_5 from "../../img/Slaider/icon/icon_5.png";

  const arraySlaide = [
    {
      id: 1,
      img: "https://systema.kg/modules/ps_imageslider/images/f9abb858210e6d01e9bd6a2cb3b7a3a9eff59495_bytovuha.jpg",
      title: "СКИДКА 30%",
      text: "успейте купить",
      buttonTitle: "ОДНИМ КЛИКОМ",
    },
    {
      id: 2,
      img: "https://systema.kg/modules/ps_imageslider/images/12bf98ac33bf102c9d031b8dec59e61f76159f70_laptop.jpg",
      title: "РАСПРОДАЖА",
      text: "добро пожаловать",
      buttonTitle: "КЛИКНИ НА МЕНЯ",
    },
    {
      id: 3,
      img: "https://systema.kg/modules/ps_imageslider/images/d8b0773c005851ab77b8f72cd960012636a187d1_slid-cam.jpg",
      title: "СКИДКА 20%",
      text: "партия ограничена",
      buttonTitle: "НАЖМИ",
    },
  ];

const Home = () => {


  return (
    <section className="bg-white ">
      <div className="container flex pt-[32px] gap-[37px] ">
        <div className="flex w-[370px]">
          <ul>
            <li className="flex w-[370px] h-[48px] gap-[10px] items-center border-b-2">
              <div className="flex">
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3.25"
                    y="4.25"
                    width="13.5"
                    height="13.5"
                    rx="2.25"
                    stroke="#060F42"
                    strokeWidth="1.5"
                  />
                  <mask id="path-2-inside-1_7132_70068" fill="white">
                    <rect x="7" y="8" width="6" height="6" rx="1" />
                  </mask>
                  <rect
                    x="7"
                    y="8"
                    width="6"
                    height="6"
                    rx="1"
                    stroke="#060F42"
                    strokeWidth="3"
                    mask="url(#path-2-inside-1_7132_70068)"
                  />
                  <line
                    x1="17.75"
                    y1="8.25391"
                    x2="19.25"
                    y2="8.25391"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="17.75"
                    y1="13.2539"
                    x2="19.25"
                    y2="13.2539"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="0.75"
                    y1="8.40234"
                    x2="2.25"
                    y2="8.40234"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="0.75"
                    y1="13.4023"
                    x2="2.25"
                    y2="13.4023"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="12.75"
                    y1="1.74609"
                    x2="12.75"
                    y2="3.24609"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="7.75"
                    y1="1.74609"
                    x2="7.75"
                    y2="3.24609"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="12.75"
                    y1="18.75"
                    x2="12.75"
                    y2="20.25"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="7.75"
                    y1="18.7539"
                    x2="7.75"
                    y2="20.2539"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex w-screen justify-between">
                <div className="flex">
                  <span>Комплектующие ПК</span>
                </div>
                <div className="flex">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="#060F42"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </li>
            <li className="flex w-[370px] h-[48px] gap-[10px] items-center border-b-2">
              <div className="flex">
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.75"
                    y="1.30078"
                    width="22.5"
                    height="15.5"
                    rx="2.25"
                    stroke="#060F42"
                    strokeWidth="1.5"
                  />
                  <rect y="12.5508" width="24" height="1.5" fill="#060F42" />
                  <line
                    x1="3"
                    y1="5.74012"
                    x2="4.93934"
                    y2="3.80078"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="4"
                    y1="8.74012"
                    x2="8.93934"
                    y2="3.80078"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <rect
                    x="5"
                    y="19.5508"
                    width="14"
                    height="1.5"
                    rx="0.75"
                    fill="#060F42"
                  />
                  <rect
                    x="8.25"
                    y="16.8008"
                    width="7.5"
                    height="3.5"
                    stroke="#060F42"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="flex w-screen justify-between">
                <div>
                  <span>Мониторы</span>
                </div>
                <div>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="#060F42"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </li>
            <li className="flex w-[370px] h-[48px] gap-[10px] items-center border-b-2">
              <div className="flex">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_7132_70107)">
                    <path
                      d="M12.9992 1.40234H20.9992C22.1992 1.40234 23.2992 2.40234 23.2992 3.70234V21.7023C23.2992 22.9023 22.2992 24.0023 20.9992 24.0023H12.9992C11.7992 24.0023 10.6992 23.0023 10.6992 21.7023V3.60234C10.7992 2.40234 11.7992 1.40234 12.9992 1.40234Z"
                      stroke="#060F42"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M20.6992 6.10156H13.6992V7.60156H20.6992V6.10156Z"
                      fill="#060F42"
                    />
                    <path
                      d="M20.6992 9.10156H13.6992V10.6016H20.6992V9.10156Z"
                      fill="#060F42"
                    />
                    <path
                      d="M17 19.6016C17.5523 19.6016 18 19.1538 18 18.6016C18 18.0493 17.5523 17.6016 17 17.6016C16.4477 17.6016 16 18.0493 16 18.6016C16 19.1538 16.4477 19.6016 17 19.6016Z"
                      fill="#060F42"
                    />
                    <path
                      d="M10.499 7.90234H2.99922C1.79922 7.90234 0.699219 8.90234 0.699219 10.2023V17.1023C0.699219 18.3023 1.69922 19.4023 2.99922 19.4023H10.499V7.90234Z"
                      stroke="#060F42"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M10.7016 21.6016V19.6016H10.1203H8.37656H7.60156V20.4016V21.4016V22.2016H8.37656H10.1203H10.7016C10.7016 21.9016 10.7016 21.8016 10.7016 21.6016Z"
                      stroke="#060F42"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M10.8 21.6016H5.8C5.3 21.6016 5 21.9016 5 22.4016C5 22.9016 5.3 23.2016 5.8 23.2016H11.4C11 22.7016 10.8 22.2016 10.8 21.6016Z"
                      fill="#060F42"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_7132_70107">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.601562)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex w-screen justify-between">
                <div>
                  <span>Компьютеры</span>
                </div>
                <div>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="#060F42"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </li>
            <li className="flex w-[370px] h-[48px] gap-[10px] items-center border-b-2">
              <div className="flex">
                <svg
                  width="24"
                  height="17"
                  viewBox="0 0 24 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_7197_70125)">
                    <path
                      d="M0.799219 12.3984H23.2992V13.6984C23.2992 14.8984 22.2992 15.9984 20.9992 15.9984H2.99922C1.79922 15.9984 0.699219 14.9984 0.699219 13.6984V12.3984H0.799219Z"
                      stroke="#060F42"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M5.10156 5.09844L6.90156 3.39844"
                      stroke="#060F42"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6 8.09844L9.9 4.39844"
                      stroke="#060F42"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M21.2992 12.3984V3.19844C21.2992 1.99844 20.2992 0.898438 18.9992 0.898438H4.99922C3.79922 0.898438 2.69922 1.89844 2.69922 3.19844V12.3984H21.2992Z"
                      stroke="#060F42"
                      strokeWidth="1.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_7197_70125">
                      <rect
                        width="24"
                        height="16.4"
                        fill="white"
                        transform="translate(0 0.199219)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex w-screen justify-between">
                <div>
                  <span>Ноутбуки</span>
                </div>
                <div>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="#060F42"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </li>
            <li className="flex w-[370px] h-[48px] gap-[10px] items-center border-b-2">
              <div className="flex">
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.3198 4.67575L20.3506 4.84584L20.4254 4.94803C20.4292 4.9562 20.4342 4.96716 20.4405 4.98133C20.4654 5.03771 20.4994 5.11965 20.5422 5.22759C20.6275 5.44225 20.7388 5.73692 20.8681 6.08779C21.1262 6.78825 21.4495 7.69498 21.7666 8.59478C22.0834 9.49391 22.3931 10.3834 22.6236 11.0482C22.7388 11.3806 22.8342 11.6567 22.9008 11.8497L22.9779 12.0734L22.9981 12.1322L23.0029 12.1462C23.7033 14.3072 22.8695 16.2686 21.354 16.8062C19.8466 17.341 17.9359 16.2994 17.2395 14.1585L17.2256 14.1155L17.2065 14.0745L16.0346 11.5516L15.8329 11.1176H15.3544H8.55704H8.07778L7.87644 11.5525L6.78261 13.9153L6.76843 13.9459L6.75706 13.9777C5.97788 16.1554 4.05718 17.1705 2.64435 16.6493L2.63149 16.6446L2.61846 16.6403C1.20146 16.1756 0.284527 14.1515 0.986929 11.985L0.99194 11.9703L1.01155 11.9127L1.08615 11.6938L1.35367 10.9098C1.57576 10.2596 1.87346 9.38936 2.17599 8.50926C2.47862 7.6289 2.78572 6.73975 3.02673 6.0512C3.14732 5.70666 3.25075 5.41413 3.32855 5.19866C3.39184 5.02336 3.4284 4.92716 3.44266 4.88965C3.44813 4.87525 3.45031 4.8695 3.44946 4.87125L3.49499 4.77793L3.51346 4.67575C3.83522 2.8952 5.535 1.44922 7.61948 1.44922H16.2138C18.2983 1.44922 19.9981 2.8952 20.3198 4.67575Z"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                  <rect
                    x="13"
                    y="5.19922"
                    width="2"
                    height="2"
                    rx="1"
                    fill="#060F42"
                  />
                  <rect
                    x="17"
                    y="5.19922"
                    width="2"
                    height="2"
                    rx="1"
                    fill="#060F42"
                  />
                  <rect
                    x="15"
                    y="3.19922"
                    width="2"
                    height="2"
                    rx="1"
                    fill="#060F42"
                  />
                  <rect
                    x="15"
                    y="7.19922"
                    width="2"
                    height="2"
                    rx="1"
                    fill="#060F42"
                  />
                  <line
                    x1="8"
                    y1="4.19922"
                    x2="8"
                    y2="7.69922"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="9.75"
                    y1="5.94922"
                    x2="6.25"
                    y2="5.94922"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex w-screen justify-between">
                <div className="relative">
                  <span>Игровые консоли</span>
                  <img
                    className="absolute top-[-2px] right-[-30px]"
                    src={NEW}
                    alt="new"
                  />
                </div>
                <div>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="#060F42"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </li>
            <li className="flex w-[370px] h-[48px] gap-[10px] items-center border-b-2">
              <div className="flex">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.75"
                    y="6.78125"
                    width="20.5"
                    height="10.5"
                    rx="2.25"
                    stroke="#060F42"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="5.75"
                    y1="15.0313"
                    x2="5.75"
                    y2="16.5312"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="9.75"
                    y1="15.0313"
                    x2="9.75"
                    y2="16.5312"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="5.75"
                    y1="10.5312"
                    x2="11.25"
                    y2="10.5312"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="13.75"
                    y1="15.0313"
                    x2="13.75"
                    y2="16.5312"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="17.75"
                    y1="15.0313"
                    x2="17.75"
                    y2="16.5312"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="23.25"
                    y1="6.71875"
                    x2="0.749999"
                    y2="6.71875"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex w-screen justify-between">
                <div>
                  <span>Комплектующие к ноутбукам</span>
                </div>
                <div>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="#060F42"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </li>
            <li className="flex w-[370px] h-[48px] gap-[10px] items-center border-b-2">
              <div className="flex">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3.75"
                    y="1.55078"
                    width="16.5"
                    height="22.5"
                    rx="2.25"
                    stroke="#060F42"
                    strokeWidth="1.5"
                  />
                  <circle
                    r="1"
                    transform="matrix(1 0 0 -1 12 21.8008)"
                    fill="#060F42"
                  />
                  <rect
                    x="4"
                    y="18.8008"
                    width="16"
                    height="1.5"
                    fill="#060F42"
                  />
                  <line
                    x1="6"
                    y1="5.74012"
                    x2="7.93934"
                    y2="3.80078"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="7"
                    y1="8.74012"
                    x2="10.9393"
                    y2="4.80078"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex w-screen justify-between">
                <div>
                  <span>Планшеты</span>
                </div>
                <div>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="#060F42"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </li>
            <li className="flex w-[370px] h-[48px] gap-[10px] items-center border-b-2">
              <div className="flex">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_7197_70195)">
                    <path
                      d="M6 9.60156V2.60156H18V9.60156"
                      stroke="#060F42"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 18.6016H4C3.46957 18.6016 2.96086 18.3908 2.58579 18.0158C2.21071 17.6407 2 17.132 2 16.6016V11.6016C2 11.0711 2.21071 10.5624 2.58579 10.1873C2.96086 9.81228 3.46957 9.60156 4 9.60156H20C20.5304 9.60156 21.0391 9.81228 21.4142 10.1873C21.7893 10.5624 22 11.0711 22 11.6016V16.6016C22 17.132 21.7893 17.6407 21.4142 18.0158C21.0391 18.3908 20.5304 18.6016 20 18.6016H18"
                      stroke="#060F42"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 15.6016H6V22.6016H18V15.6016Z"
                      stroke="#060F42"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="5"
                      y="11.6016"
                      width="2"
                      height="2"
                      rx="1"
                      fill="#060F42"
                    />
                    <rect
                      x="8"
                      y="11.6016"
                      width="2"
                      height="2"
                      rx="1"
                      fill="#060F42"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_7197_70195">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.601562)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex w-screen justify-between">
                <div>
                  <span>Принтеры и МФУ</span>
                </div>
                <div>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="#060F42"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </li>
            <li className="flex w-[370px] h-[48px] gap-[10px] items-center border-b-2">
              <div className="flex">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99922 1.20117H16.9992C18.1992 1.20117 19.2992 2.20117 19.2992 3.50117V19.5012C19.2992 20.7012 18.2992 21.8012 16.9992 21.8012H6.99922C5.79922 21.8012 4.69922 20.8012 4.69922 19.5012V3.40117C4.79922 2.20117 5.79922 1.20117 6.99922 1.20117Z"
                    stroke="#060F42"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M11.9992 11.2012C13.7992 11.2012 15.2992 12.7012 15.2992 14.5012C15.2992 16.3012 13.7992 17.8012 11.9992 17.8012C10.1992 17.8012 8.69922 16.3012 8.69922 14.5012C8.79922 12.6012 10.1992 11.2012 11.9992 11.2012Z"
                    stroke="#060F42"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M11.9992 4.20117C13.1992 4.20117 14.2992 5.20117 14.2992 6.50117C14.2992 7.70117 13.2992 8.80117 11.9992 8.80117C10.7992 8.80117 9.69922 7.80117 9.69922 6.50117C9.79922 5.20117 10.7992 4.20117 11.9992 4.20117Z"
                    stroke="#060F42"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M17.4008 21.8047H13.8008V22.4011C13.8008 23.1011 14.4008 23.7011 15.1008 23.7011H16.1008C16.8008 23.7011 17.4008 23.1011 17.4008 22.4011V21.8047ZM17.4008 21.8047C17.2008 21.8047 17.5008 21.8047 17.4008 21.8047Z"
                    stroke="#060F42"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10.6 21.8008H7V22.3972C7 23.0972 7.6 23.6972 8.3 23.6972H9.3C10 23.6972 10.6 23.0972 10.6 22.3972V21.8008ZM10.6 21.8008C10.4 21.8008 10.7 21.8008 10.6 21.8008Z"
                    stroke="#060F42"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="flex w-screen justify-between">
                <div>
                  <span>Акустические колонки</span>
                </div>
                <div>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="#060F42"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </li>
            <li className="flex w-[370px] h-[48px] gap-[10px] items-center border-b-2">
              <div className="flex">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 1.63672C22.2923 2.75977 23 4.17513 23 5.63672C23 7.09831 22.2923 8.51367 21 9.63672"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 9.63672C10.7077 8.51367 10 7.09831 10 5.63672C10 4.17513 10.7077 2.75977 12 1.63672"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 3.63672C19.6505 4.22101 20 4.91998 20 5.63672C20 6.35345 19.6505 7.05243 19 7.63672"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 7.63672C13.3495 7.05243 13 6.35345 13 5.63672C13 4.91998 13.3495 4.22101 14 3.63672"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="0.75"
                    y="13.3867"
                    width="22.5"
                    height="8.5"
                    rx="3.25"
                    stroke="#060F42"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="16.5"
                    y1="12.8867"
                    x2="16.5"
                    y2="6.38672"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <rect
                    x="4"
                    y="16.6367"
                    width="2"
                    height="2"
                    rx="1"
                    fill="#060F42"
                  />
                  <rect
                    x="4"
                    y="21.7617"
                    width="2"
                    height="3"
                    rx="1"
                    fill="#060F42"
                  />
                  <rect
                    x="18"
                    y="21.7598"
                    width="2"
                    height="3"
                    rx="1"
                    fill="#060F42"
                  />
                  <rect
                    x="7"
                    y="16.6367"
                    width="2"
                    height="2"
                    rx="1"
                    fill="#060F42"
                  />
                </svg>
              </div>
              <div className="flex w-screen justify-between">
                <div>
                  <span>Сетевое оборудование</span>
                </div>
                <div>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="#060F42"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </li>
            <li className="flex w-[370px] h-[48px] gap-[10px] items-center border-b-2">
              <div className="flex">
                <svg
                  width="370"
                  height="49"
                  viewBox="0 0 370 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.5481 18.9664L30.5483 18.9666C30.8872 19.3021 31.1557 19.6999 31.3387 20.1373C31.5218 20.5747 31.6159 21.0432 31.6159 21.5162C31.6159 21.9892 31.5218 22.4577 31.3387 22.8951C31.1557 23.3325 30.8872 23.7303 30.5483 24.0658L30.5482 24.0659L29.6999 24.9059L24.0011 30.5487L18.3023 24.9059L17.454 24.0659C16.7697 23.3884 16.3867 22.4711 16.3867 21.5162C16.3867 20.5613 16.7697 19.644 17.454 18.9665C18.1384 18.2887 19.0683 17.9067 20.0395 17.9067C21.0107 17.9067 21.9406 18.2887 22.625 18.9665L23.1527 18.4335L22.625 18.9665L23.4734 19.8065C23.7657 20.0959 24.2365 20.0959 24.5288 19.8065L25.3771 18.9665L25.3773 18.9664C25.716 18.6308 26.1187 18.3641 26.5624 18.1821C27.0061 18 27.4819 17.9062 27.9627 17.9062C28.4434 17.9062 28.9192 18 29.3629 18.1821C29.8066 18.3641 30.2093 18.6308 30.5481 18.9664Z"
                    stroke="#060F42"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M57.496 18.512V30H56.008V21.824C56.008 21.7013 56.0107 21.5707 56.016 21.432C56.0267 21.2933 56.0373 21.152 56.048 21.008L52.224 28.024C52.0907 28.2853 51.8853 28.416 51.608 28.416H51.368C51.0907 28.416 50.888 28.2853 50.76 28.024L46.864 20.984C46.896 21.2827 46.912 21.5627 46.912 21.824V30H45.416V18.512H46.68C46.8293 18.512 46.944 18.528 47.024 18.56C47.1093 18.5867 47.1893 18.6667 47.264 18.8L51.104 25.68C51.1787 25.8187 51.248 25.9653 51.312 26.12C51.376 26.2747 51.4373 26.4293 51.496 26.584C51.608 26.2693 51.7387 25.9653 51.888 25.672L55.656 18.8C55.7253 18.6667 55.8 18.5867 55.88 18.56C55.9653 18.528 56.0827 18.512 56.232 18.512H57.496ZM63.2319 21.744C63.8292 21.744 64.3679 21.8427 64.8479 22.04C65.3332 22.232 65.7439 22.512 66.0799 22.88C66.4212 23.2427 66.6825 23.6827 66.8639 24.2C67.0452 24.712 67.1359 25.288 67.1359 25.928C67.1359 26.568 67.0452 27.1467 66.8639 27.664C66.6825 28.1813 66.4212 28.6213 66.0799 28.984C65.7439 29.3467 65.3332 29.6267 64.8479 29.824C64.3679 30.016 63.8292 30.112 63.2319 30.112C62.6292 30.112 62.0852 30.016 61.5999 29.824C61.1199 29.6267 60.7092 29.3467 60.3679 28.984C60.0265 28.6213 59.7625 28.1813 59.5759 27.664C59.3945 27.1467 59.3039 26.568 59.3039 25.928C59.3039 25.288 59.3945 24.712 59.5759 24.2C59.7625 23.6827 60.0265 23.2427 60.3679 22.88C60.7092 22.512 61.1199 22.232 61.5999 22.04C62.0852 21.8427 62.6292 21.744 63.2319 21.744ZM63.2319 28.896C63.9999 28.896 64.5732 28.6373 64.9519 28.12C65.3305 27.6027 65.5199 26.8747 65.5199 25.936C65.5199 24.9973 65.3305 24.2693 64.9519 23.752C64.5732 23.2293 63.9999 22.968 63.2319 22.968C62.4532 22.968 61.8719 23.2293 61.4879 23.752C61.1092 24.2693 60.9199 24.9973 60.9199 25.936C60.9199 26.8747 61.1092 27.6027 61.4879 28.12C61.8719 28.6373 62.4532 28.896 63.2319 28.896ZM75.7253 21.872V30H74.1573V26.256H70.4373V30H68.8773V21.872H70.4373V25.072H74.1573V21.872H75.7253ZM84.9645 21.872V30H83.3965V24.688C83.3965 24.5813 83.4018 24.464 83.4125 24.336C83.4232 24.2027 83.4392 24.0693 83.4605 23.936C83.4072 24.048 83.3538 24.1547 83.3005 24.256C83.2525 24.352 83.2018 24.4373 83.1485 24.512L79.4125 29.608C79.3538 29.704 79.2765 29.7947 79.1805 29.88C79.0845 29.9653 78.9752 30.008 78.8525 30.008H77.9085V21.872H79.4685V27.192C79.4685 27.2987 79.4632 27.4187 79.4525 27.552C79.4418 27.68 79.4258 27.808 79.4045 27.936C79.5112 27.7013 79.6152 27.512 79.7165 27.368L83.4525 22.264C83.5112 22.1733 83.5885 22.0853 83.6845 22C83.7858 21.9147 83.8978 21.872 84.0205 21.872H84.9645ZM93.9509 23.056H90.8869V30H89.3189V23.056H86.2549V21.872H93.9509V23.056ZM98.4194 21.744C99.0167 21.744 99.5554 21.8427 100.035 22.04C100.521 22.232 100.931 22.512 101.267 22.88C101.609 23.2427 101.87 23.6827 102.051 24.2C102.233 24.712 102.323 25.288 102.323 25.928C102.323 26.568 102.233 27.1467 102.051 27.664C101.87 28.1813 101.609 28.6213 101.267 28.984C100.931 29.3467 100.521 29.6267 100.035 29.824C99.5554 30.016 99.0167 30.112 98.4194 30.112C97.8167 30.112 97.2727 30.016 96.7874 29.824C96.3074 29.6267 95.8967 29.3467 95.5554 28.984C95.214 28.6213 94.95 28.1813 94.7634 27.664C94.582 27.1467 94.4914 26.568 94.4914 25.928C94.4914 25.288 94.582 24.712 94.7634 24.2C94.95 23.6827 95.214 23.2427 95.5554 22.88C95.8967 22.512 96.3074 22.232 96.7874 22.04C97.2727 21.8427 97.8167 21.744 98.4194 21.744ZM98.4194 28.896C99.1874 28.896 99.7607 28.6373 100.139 28.12C100.518 27.6027 100.707 26.8747 100.707 25.936C100.707 24.9973 100.518 24.2693 100.139 23.752C99.7607 23.2293 99.1874 22.968 98.4194 22.968C97.6407 22.968 97.0594 23.2293 96.6754 23.752C96.2967 24.2693 96.1074 24.9973 96.1074 25.936C96.1074 26.8747 96.2967 27.6027 96.6754 28.12C97.0594 28.6373 97.6407 28.896 98.4194 28.896ZM105.625 28C105.881 28.336 106.155 28.5707 106.449 28.704C106.747 28.8373 107.081 28.904 107.449 28.904C108.163 28.904 108.715 28.648 109.105 28.136C109.499 27.6187 109.697 26.8667 109.697 25.88C109.697 25.3627 109.651 24.9227 109.561 24.56C109.475 24.192 109.347 23.8933 109.177 23.664C109.011 23.4293 108.806 23.2587 108.561 23.152C108.315 23.04 108.038 22.984 107.729 22.984C107.275 22.984 106.881 23.0853 106.545 23.288C106.214 23.4907 105.907 23.7787 105.625 24.152V28ZM105.545 23.088C105.715 22.8853 105.897 22.7013 106.089 22.536C106.286 22.3653 106.497 22.2213 106.721 22.104C106.945 21.9813 107.182 21.888 107.433 21.824C107.689 21.7547 107.961 21.72 108.249 21.72C108.713 21.72 109.131 21.8107 109.505 21.992C109.883 22.1733 110.206 22.44 110.473 22.792C110.739 23.144 110.945 23.5787 111.089 24.096C111.238 24.6133 111.313 25.208 111.313 25.88C111.313 26.4827 111.23 27.0427 111.065 27.56C110.905 28.072 110.673 28.5173 110.369 28.896C110.07 29.2747 109.702 29.5733 109.265 29.792C108.833 30.0053 108.345 30.112 107.801 30.112C107.315 30.112 106.899 30.032 106.553 29.872C106.206 29.712 105.897 29.488 105.625 29.2V32.728H104.065V21.872H105.001C105.219 21.872 105.355 21.976 105.409 22.184L105.545 23.088ZM116.217 28.856C116.75 28.856 117.15 28.728 117.417 28.472C117.684 28.2107 117.817 27.88 117.817 27.48C117.817 27.2987 117.788 27.128 117.729 26.968C117.67 26.8027 117.577 26.6613 117.449 26.544C117.321 26.4213 117.153 26.3253 116.945 26.256C116.742 26.1813 116.492 26.144 116.193 26.144H114.537V28.856H116.217ZM116.193 25.008C116.753 25.008 117.225 25.0773 117.609 25.216C117.998 25.3493 118.31 25.5307 118.545 25.76C118.78 25.984 118.948 26.2453 119.049 26.544C119.156 26.8373 119.209 27.144 119.209 27.464C119.209 27.832 119.142 28.1733 119.009 28.488C118.881 28.7973 118.689 29.064 118.433 29.288C118.177 29.512 117.862 29.688 117.489 29.816C117.121 29.9387 116.697 30 116.217 30H113.049V21.872H114.537V25.008H116.193ZM122.481 21.872V30H120.921V21.872H122.481Z"
                    fill="#060F42"
                  />
                  <g clipPath="url(#clip0_7200_70246)">
                    <path
                      d="M333 31.1988L339 23.9988L333 16.7988"
                      stroke="#060F42"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <rect
                    width="370"
                    height="48"
                    fill="url(#paint0_linear_7200_70246)"
                  />
                  <path
                    d="M172 25L180 33L188 25"
                    stroke="#01579B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_7200_70246"
                      x1="180"
                      y1="0"
                      x2="180"
                      y2="48"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.3" />
                      <stop offset="0.731962" stopColor="white" />
                    </linearGradient>
                    <clipPath id="clip0_7200_70246">
                      <rect
                        width="24"
                        height="28.8"
                        fill="white"
                        transform="translate(324 9.59961)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex-col w-screen w-[1145px] ">
          <div className="flex w-full h-[400px] ">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              modules={[Thumbs, Pagination, Navigation, Autoplay]}
              autoplay={true}
              pagination={{ clickable: true }}
              className=""
            >
              {arraySlaide.map((el) => {
                return (
                  <SwiperSlide key={el.id} className="relative">
                    <img className="h-full" src={el.img} alt="" />
                    <div className="absolute flex top-[40px] left-[40px] w-[330px] h-[60px flex-col gap-[10px] ">
                      <span className="flex text-[48px] text-white leading-[58px] font-bold ">
                        {el.title}
                      </span>
                      <span className="flex text-[18px] text-white font-normal leading-[58px]">
                        {el.text}
                      </span>
                      <button
                        className="flex w-[165px] h-[43px] bg-[#E93232] rounded-[4px] text-white text-[10px] items-center justify-center leading-[58px] tracking-[2px] "
                        type="button"
                      >
                        {el.buttonTitle}
                      </button>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="flex justify-around pt-[30px] ">
            <div className="flex-col w-[110px] h-[110px] text-center  ">
              <img
                className="flex w-[60px] h-[60px] ml-[22px] "
                src={slaiderIcon_1}
                alt="icon"
              />
              <p className="flex text-[#060F42] text-[12px] font-bold leading-[12px] pt-[13px] ">
                Бесплатная сборка
              </p>
            </div>
            <div className="flex-col w-[110px] h-[110px] text-center">
              <img
                src={slaiderIcon_2}
                alt="icon"
                className="flex w-[60px] h-[60px] ml-[22px] "
              />
              <p className="text-[#060F42] text-[12px] font-bold leading-[12px] pt-[13px] ">
                Рассрочка 4 мес./0% без переплат
              </p>
            </div>
            <div className="flex-col w-[110px] h-[110px] text-center ">
              <img
                src={slaiderIcon_3}
                alt="icon"
                className="flex w-[60px] h-[60px] ml-[22px] "
              />
              <p className="text-[#060F42] text-[12px] font-bold leading-[12px] pt-[13px] ">
                Бесплатная доставка
              </p>
            </div>
            <div className="flex-col w-[110px] h-[110px] text-center ">
              <img
                src={slaiderIcon_4}
                alt="icon"
                className="flex w-[60px] h-[60px] ml-[22px] "
              />
              <p className="text-[#060F42] text-[12px] font-bold leading-[12px] pt-[13px] ">
                Официальная гарантия
              </p>
            </div>
            <div className="flex-col w-[110px] h-[110px] text-center ">
              <img
                src={slaiderIcon_5}
                alt="icon"
                className="flex w-[60px] h-[60px] ml-[22px] "
              />
              <p className="text-[#060F42] text-[12px] font-bold leading-[12px] pt-[13px] ">
                Лучшая цена
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

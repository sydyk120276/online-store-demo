import React from 'react'

import CardMiddle from '../CardMid'
import CardMidGamer from '../CardMidGamer';

const arrayGameStend = [
  {
    id: 1,
    image:
      "https://enter.kg/images/stories/virtuemart/product/p00942_pic2_194360aca2a53e39e_5554.png",
    title: "Клавиатуры",
  },
  {
    id: 2,
    image:
      "https://enter.kg/images/stories/virtuemart/product/p00942_pic2_194360aca2a53e39e_5554.png",
    title: "Мыши",
  },
  {
    id: 3,
    image:
      "https://enter.kg/images/stories/virtuemart/product/p00942_pic2_194360aca2a53e39e_5554.png",
    title: "Аксессуары",
  },
  {
    id: 4,
    image:
      "https://enter.kg/images/stories/virtuemart/product/p00942_pic2_194360aca2a53e39e_5554.png",
    title: "Игровые ноутбуки",
  },
  {
    id: 5,
    image:
      "https://enter.kg/images/stories/virtuemart/product/p00942_pic2_194360aca2a53e39e_5554.png",
    title: "Видеокарты",
  },
  {
    id: 6,
    image:
      "https://enter.kg/images/stories/virtuemart/product/p00942_pic2_194360aca2a53e39e_5554.png",
    title: "Мониторы",
  },
];

const CardsMiddle = ({ arrayCards }) => {
  return (
    <section className="bg-blue-400">
      <div className="container w-[1532px] h-[923px] flex-col ">
        <div className="flex items-center gap-[27px] pt-[40px] pb-[24px] ">
          <div className="h-[2px] w-[112px] bg-red-600 "></div>
          <div className="text-[#333333] text-[36px] font-bold leading-[40px]">
            GAME ZONE
          </div>
          <div className="h-[2px] w-[1146px] bg-red-600 "></div>
        </div>
        <div className="grid grid-cols-6 pb-[94px] ">
          {arrayCards.slice(0, 6).map((elem) => {
            return <CardMiddle key={elem.id} item={elem} />;
          })}
        </div>
        <div className="text-white text-[28px] font-semibold leading-[32px] pb-[30px] ">
          Категории для геймеров
        </div>
        <div className="w-[1532px] flex gap-[16px] mb-[40px] ">
          {arrayGameStend.map((item) => {
            return <CardMidGamer key={item.id} elem={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CardsMiddle
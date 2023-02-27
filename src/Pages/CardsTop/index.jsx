import React from 'react'

import Card from '../Card';

const CardsTop = ({ arrayCards, arrayOnAxios }) => {
  console.log("arrayCards", arrayCards);
  console.log("arrayOnAxios", arrayOnAxios);
  return (
    <section className="bg-white">
      <div className="container w-[1532px] flex-col mt-[48px] mb-[70px] ">
        <span className="text-[#333333] text-[28px] font-bold leading-[32px]">
          Топ продаж
        </span>
        <div className="grid grid-cols-5 gap-x-[40px] gap-y-[70px] mt-[24px] ">
          {arrayOnAxios.length > 0
            ? arrayOnAxios.map((item) => {
                return <Card key={item.id} item={item} />;
              })
            : arrayCards.map((item) => {
                return <Card key={item.id} item={item} />;
              })}
        </div>
      </div>
    </section>
  );
};

export default CardsTop;
import React from 'react'

import Card from '../Card';

const CardsTop = ({ arrayCards }) => {
  return (
    <section className="bg-white">
      <div className="container w-[1532px] flex-col mt-[48px] mb-[70px] ">
        <span className="text-[#333333] text-[28px] font-bold leading-[32px]">
          Топ продаж
        </span>
        <div className="grid grid-cols-6 gap-x-[16px] gap-y-[70px] mt-[24px] ">
          {arrayCards.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CardsTop;
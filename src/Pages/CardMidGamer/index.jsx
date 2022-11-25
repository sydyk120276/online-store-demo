import React from 'react'

const CardMidGamer = ({ elem }) => {
  return (
    <section>
      <div className="relative w-[242px] h-[239px] jusify-center text-center ">
        <div className=" w-[199px] h-[199px] bg-white rounded-full ml-[20px] "></div>
        <div className="absolute w-[188px] h-[188px] top-0 left-[20px]">
          <img className="" src={elem.image} alt="clava" />
        </div>
        <div className="text-white text-[18px] font-normal leading-[32px] pt-[6px] ">
          {elem.title}
        </div>
      </div>
    </section>
  );
}

export default CardMidGamer

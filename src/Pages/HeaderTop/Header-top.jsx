import React from 'react'
import { Link } from 'react-router-dom';

const HeaderTop = () => {
  return (
    <section className="flex bg-[#060F42] mb-[30px] ">
      <div className="flex text-[#F4F8FB] text-[50px] container h-[40px] font-[500] text-[14px] items-center justify-between ">
        <ul className="flex gap-[24px] ">
          <li className="">Акции</li>
          <li className="">Кредит</li>
          <li className="">Оплата и доставка</li>
          <li className="">Помощь</li>
          <li className="">Скупка Б/У</li>
          <li className="">Контакты</li>
        </ul>
        <div className="flex gap-[39px] items-center ">
          <div className="flex gap-[4px] ">
            <Link to="/">RU</Link>
            <span>/</span>
            <Link to="/">EN</Link>
          </div>
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 25V23C25 21.9391 24.5259 20.9217 23.682 20.1716C22.8381 19.4214 21.6935 19 20.5 19H11.5C10.3065 19 9.16193 19.4214 8.31802 20.1716C7.47411 20.9217 7 21.9391 7 23V25"
                stroke="#F4F8FB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 15C18.2091 15 20 13.2091 20 11C20 8.79086 18.2091 7 16 7C13.7909 7 12 8.79086 12 11C12 13.2091 13.7909 15 16 15Z"
                stroke="#F4F8FB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderTop

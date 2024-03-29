import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import img_user from '../../img/img_user_header/1.jpg'
import { setActiveModalka, setBasketButton, setActiveRegistration } from '../../store/auth'

const HeaderTop = () => {
  const dispatch = useDispatch()
  const { basketButton } = useSelector((s) => s.auth)
  console.log(basketButton)

  const onClick = () => {
    dispatch(setActiveModalka(true))
    dispatch(setActiveRegistration(false))
  }
  const onCloseBasket = () => {
    dispatch(setBasketButton(false))
  }
  return (
    <section className="top-0 left-0 bg-[#060F42] fixed h-[60px] w-screen z-40 flex items-center ">
      <div className="flex text-[#F4F8FB] text-[16px] container font-[500] items-center justify-between ">
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
          <button type="button" onClick={onClick} className={basketButton ? "hidden" : "flex cursor-pointer"}>
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 15C18.2091 15 20 13.2091 20 11C20 8.79086 18.2091 7 16 7C13.7909 7 12 8.79086 12 11C12 13.2091 13.7909 15 16 15Z"
                stroke="#F4F8FB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className={basketButton ? "flex gap-[20px] items-center" : "hidden"}>
            <div className=" w-[32px] h-[32px] bg-white rounded-full overflow-hidden flex items-center justify-center">
              <img className="h-auto w-full" src={img_user} alt="img_user" />
            </div>
            <div className="">
              <Link to="/" onClick={onCloseBasket}>Выход</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderTop

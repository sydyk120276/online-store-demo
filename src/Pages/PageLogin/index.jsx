import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import See from '../../img/see.png'
import { setActiveModalka, setBasketButton, setActiveRegistration } from '../../store/auth'

const PageLogin = () => {
  const dispatch = useDispatch()
  const { activeModalka, activeRegistration } = useSelector((s) => s.auth)

  console.log('activeRegistration', activeRegistration)

  const onClick = () => {
    dispatch(setActiveModalka(false))
  }
  const onBasketButtonVisible = () => {
    dispatch(setBasketButton(true))
    dispatch(setActiveModalka(false))
  }
  const onCloseModalka = () => {
    dispatch(setActiveModalka(false))
  }
  const handlerActiveRegistration = () => {
    dispatch(setActiveRegistration(true))
  }

  return (
    <section
      onClick={onClick}
      onKeyDown={() => dispatch(setActiveModalka(false))}
      role="button"
      tabIndex="0"
      className={activeModalka ? 'z-20 flex items-center justify-center w-screen h-screen bg-black/40 fixed top-0 left-0 ' : 'hidden'}
    >
      <div className="flex flex-col w-[600px] h-[700px] bg-white p-[44px] "
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="button"
        tabIndex="0"
      >
        <div className="flex justify-between pb-[40px] ">
          <span className="flex text-[24px] font-semibold leading-[18px]">Вход</span>
          <button className="" type="button" onClick={onCloseModalka}>
            <svg className="flex" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33203 3.33203L16.6654 16.6654" stroke="#E93232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.33203 16.668L16.6654 3.33464" stroke="#E93232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-[25px] pb-[30px] ">
          <input type="text" className="flex h-[52px] w-full rounded-[4px] border-2 outline-0 pl-[10px] " placeholder="Ваш email" />
          <div className="relative">
            <input type="text" className="flex h-[52px] w-full rounded-[4px] border-2 outline-0 pl-[10px] " placeholder="Пароль" />
            <img src={See} alt="See" className="absolute top-[15px] right-[10px]" />
          </div>
        </div>
        {!activeRegistration ? <Link to="/" className="flex pb-[30px] justify-end text-[17px] font-semibold leading-[10px] text-[#01579B] ">
          Забыли пароль?
        </Link> :
          <div className=" pb-[30px]  ">
            Регистрируясь, вы соглашаетесь с
             <Link to="/" className="text-[#01579B] text-[17px] pl-[10px] font-semibold leading-[10px]">пользовательским соглашением</Link>
          </div>
        }
        {!activeRegistration ? <Link to="/" onClick={onBasketButtonVisible} className="flex mb-[60px] bg-[#01579B] text-white h-[56px] w-full rounded-[6px] items-center justify-center hover:bg-[#0400ff] ">
          ВОЙТИ
        </Link> :
          <Link to="/" onClick={onBasketButtonVisible} className="flex mb-[60px] bg-[#01579B] text-white h-[56px] w-full rounded-[6px] items-center justify-center hover:bg-[#0400ff] ">
            ЗАРЕГИСТРИРОВАТЬСЯ
        </Link>}
        <div className="flex items-center pb-[60px] ">
          <div className="flex h-[2px] w-[130px] bg-[#CCCCCC] "></div>
          <span className="flex text-[20px] px-[10px] font-semibold leading-[10px] text-[#b3b9c6]">или войти с помощью</span>
          <div className="flex h-[2px] w-[130px] bg-[#CCCCCC] "></div>
        </div>
        <div className="flex justify-around mb-[60px]">
          <Link to="/" className="flex text-[17px] items-center justify-center font-semibold leading-[10px] text-white h-[50px] w-[200px] bg-[#EA4335] rounded-[4px] ">Google</Link>
          <Link to="/" className="flex text-[17px] items-center justify-center font-semibold leading-[10px] text-white h-[50px] w-[200px] bg-[#4267B2] rounded-[4px] ">Facebook</Link>
        </div>
        {!activeRegistration ? <div className="flex justify-center gap-[10px] ">
          <span className="text-[20px] font-semibold leading-[10px] text-[#333333]">Нет аккаунта? </span>
          <Link to="/"
            onClick={handlerActiveRegistration}
            className="text-[20px] font-semibold leading-[10px] text-[#01579B]">
            Зарегистрироваться
            </Link>
        </div> :
          <div className="flex justify-center gap-[10px] ">
            <span className="text-[20px] font-semibold leading-[10px] text-[#333333]">Уже есть зарегестрированы?  </span>
            <Link to="/"
              onClick={onBasketButtonVisible}
              className="text-[20px] font-semibold leading-[10px] text-[#01579B]">
              Войти
          </Link>
          </div>
        }
      </div>
    </section>
  )
}

export default PageLogin
import React from 'react'
import cls from './styled/Main.module.sass'

import HeaderTop from '../HeaderTop/Header-top'
import HeaderMidl from '../HeaderMidl/Header-midl'
import Home from "../Home/Home";
import CardsTop from "../CardsTop";
import CardsMiddle from "../CardsMiddle";

export default function Main() {
  return (
    <main className="flex-col justify-center ">
      <HeaderTop />
      <HeaderMidl />
      <Home />
      <CardsTop />
      <CardsMiddle />
    </main>
  );
}

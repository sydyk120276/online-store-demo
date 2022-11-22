import React from 'react'
import cls from './styled/Main.module.sass'

import HeaderTop from '../HeaderTop/Header-top'
import HeaderMidl from '../HeaderMidl/Header-midl'

export default function Main() {
  return (
    <main className="flex-col justify-center ">
      <HeaderTop />
      <HeaderMidl />
    </main>
  );
}

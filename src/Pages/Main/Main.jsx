import React, { useEffect, useState } from 'react'
import axios from 'axios';
import cls from './styled/Main.module.sass'

import HeaderTop from '../HeaderTop/Header-top'
import HeaderMidl from '../HeaderMidl/Header-midl'
import Home from "../Home/Home";
import CardsTop from "../CardsTop";
import CardsMiddle from "../CardsMiddle";
import Footer from "../Footer";
import PageLogin from "../PageLogin";

const arrayCards = [
  {
    id: 1,
    title: "Монитор 23.8 Acer K240YB, Black (UM.QE0EE.B01)",
    image:
      "https://enter.kg/images/stories/virtuemart/product/atx%20wsc-6824%20black_8833.jpg",
    price: 3500,
    comment: 0,
  },
  {
    id: 2,
    title: "Монитор 23.8 Acer K240YB, Black (UM.QE0EE.B01)",
    image: "https://enter.kg/images/stories/virtuemart/product/2_6822.jpg",
    price: 3500,
    comment: 0,
  },
  {
    id: 3,
    title: "Монитор 23.8 Acer K240YB, Black (UM.QE0EE.B01)",
    image: "https://enter.kg/images/stories/virtuemart/product/1_1080_2381.jpg",
    price: 3500,
    comment: 0,
  },
  {
    id: 4,
    title: "Монитор 23.8 Acer K240YB, Black (UM.QE0EE.B01)",
    image: "https://enter.kg/images/stories/virtuemart/product/3011_4845.jpg",
    price: 3500,
    comment: 0,
  },
  {
    id: 5,
    title: "Монитор 23.8 Acer K240YB, Black (UM.QE0EE.B01)",
    image: "https://enter.kg/images/stories/virtuemart/product/17_5673.jpg",
    price: 3500,
    comment: 0,
  },
  {
    id: 6,
    title: "Монитор 23.8 Acer K240YB, Black (UM.QE0EE.B01)",
    image:
      "https://enter.kg/images/stories/virtuemart/product/somic%20st458n_3699.jpg",
    price: 3500,
    comment: 0,
  },
  {
    id: 7,
    title: "Монитор 23.8 Acer K240YB, Black (UM.QE0EE.B01)",
    image:
      "https://enter.kg/images/stories/virtuemart/product/somic%20st458n_3699.jpg",
    price: 3500,
    comment: 0,
  },
  {
    id: 8,
    title: "Монитор 23.8 Acer K240YB, Black (UM.QE0EE.B01)",
    image: "https://enter.kg/images/stories/virtuemart/product/1_6584_1928.jpg",
    price: 3500,
    comment: 0,
  },
  {
    id: 9,
    title: "Монитор 23.8 Acer K240YB, Black (UM.QE0EE.B01)",
    image:
      "https://enter.kg/images/stories/virtuemart/product/atx%20wsc-6825_3806.jpg",
    price: 3500,
    comment: 0,
  },
  {
    id: 10,
    title: "Монитор 23.8 Acer K240YB, Black (UM.QE0EE.B01)",
    image:
      "https://enter.kg/images/stories/virtuemart/product/1613901_3454.jpeg",
    price: 3500,
    comment: 0,
  },
  // {
  //   id: 11,
  //   title: "Монитор 23.8 Acer K240YB, Black (UM.QE0EE.B01)",
  //   image:
  //     "https://enter.kg/images/stories/virtuemart/product/%D0%BD%D0%B0%D1%83%D1%88%D0%BD%D0%B8%D0%BA%D0%B8%20remax%20metal%20wired%20earphone%20for%20type-c%20rm-560_6064.png",
  //   price: 3500,
  //   comment: 0,
  // },
  // {
  //   id: 12,
  //   title: "Монитор 23.8 Acer K240YB, Black (UM.QE0EE.B01)",
  //   image: "https://enter.kg/images/stories/virtuemart/product/40_6773.jpg",
  //   price: 3500,
  //   comment: 0,
  // },
];

export default function Main() {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios('/api/v1/store')
      .then((response) => {
        // console.log(response)
        setItems(response.data)
      })
  }, [])

  console.log('itemsssss', items)
  return (
    <main className="flex flex-col justify-center ">
      <HeaderTop />
      <HeaderMidl />
      <PageLogin />
      <Home />
      <CardsTop arrayCards={items} />
      <CardsMiddle arrayCards={arrayCards} />
      <Footer />
    </main>
  );
}

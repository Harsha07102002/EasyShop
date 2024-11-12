import React from 'react'
import Navbar from './Navbar'
import Mobile from './Mobile'
import Computer from './Computer'
import Watch from './Watch'
import Men from './Men'
import Woman from './Woman'
import Furniture from './Furniture'
import Ac from './Ac'
import Kitchen from './Kitchen'
import Books from './Books'
import Fridge from './Fridge'
import Speakers from './Speakers'
import Tv from './Tv'

export default function Products() {
  return (
    <>
      <Navbar title="EasyShop"/>
      <Mobile />
      <Computer />
      <Watch />
      <Men />
      <Woman />
      <Books />
      <Furniture />
      <Kitchen />
      <Fridge />
      <Speakers />
      <Ac />
      <Tv />
    </>
  )
}

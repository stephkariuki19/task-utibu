import React from 'react'
import Navbar from '../(components)/Navbar'
import OrderPage from '../(components)/OrderPage'
type Props = {}

function page({}: Props) {
  return (
    <div> 
      <Navbar/>
      <OrderPage/>
    </div>
  )
}

export default page
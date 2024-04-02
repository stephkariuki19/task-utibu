import React from 'react'
import Navbar from '../(components)/Navbar'
import LoginBody from '../(components)/LoginBody'

type Props = {}

function page({}: Props) {
  return (
    <div> 
      <Navbar/>
      <LoginBody/>
    </div>
  )
}

export default page
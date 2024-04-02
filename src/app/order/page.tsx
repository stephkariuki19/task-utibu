import React from 'react'
import Navbar from '../(components)/Navbar'
import SignupBody from '../(components)/SignupBody'

type Props = {}

function page({}: Props) {
  return (
    <div> 
      <Navbar/>
      <SignupBody/>
    </div>
  )
}

export default page
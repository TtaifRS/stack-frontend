import React from 'react'
import { NavBarAuth, SignUpForm } from '../sections'


const SignUp = () => {
  return (
   <>
    <div className='h-screen overflow-hidden'>
      <NavBarAuth/>
      <SignUpForm/>
    </div>
   </>
  )
}

export default SignUp
import React from 'react'
import { Link } from 'react-router-dom'

import { AuthHeader, SignForm } from '../components'


const SignUpForm = () => {
  return (
    <div
    className='w-full h-screen flex justify-center items-center  '
    >
      <div className="w-3/5 my-auto bg-white flex flex-col justify-center items-center">
       <div className="w-[80%] my-auto  flex flex-col justify-center items-center">
       <AuthHeader headerTitle="Getting Started" headerSub="Create an account to continue!"/>
        <SignForm/>
        <p className='text-placeHolder'>Already have an account? <span className='text-button'><Link to="/login">Sign In</Link></span></p>
       </div>
      </div>
    </div>
  )
}

export default SignUpForm
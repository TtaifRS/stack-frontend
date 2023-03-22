import React from 'react'
import { Link } from 'react-router-dom'

import { AuthHeader, LogForm } from '../components'


const LoginForm = () => {
  return (
    <div
    className='w-full h-screen flex justify-center items-center  '
    >
      <div className="w-3/5 my-auto bg-white flex flex-col justify-center items-center">
       <div className="w-[80%] my-auto  flex flex-col justify-center items-center">
       <AuthHeader headerTitle="Sign In" headerSub="Welcome back, you’ve been missed!"/>
        <LogForm/>
        <p className='text-placeHolder'>Don’t have an account yet?  <span className='text-button'><Link to="/signup">Sign Up</Link></span></p>
       </div>
      </div>
    </div>
  )
}

export default LoginForm
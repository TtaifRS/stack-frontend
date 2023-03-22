import React from 'react'

import GoogleIcon from '../assets/google.svg'
import AppleIcon from '../assets/Apple.svg'
import AuthButton from './AuthButton'

const AuthHeader = ({headerTitle, headerSub}) => {
  return (
   <div className=' w-3/4 flex flex-col justify-center items-center'>
    <div className=' mt-1'>
    <h1 className='font-bold text-headline text-headlineSize'>{headerTitle}</h1>
  </div>
  <div>
    <p className='text-authText text-authTextSize mt-4 mb-8'>{headerSub}</p>
  </div>
  <div className='flex justify-between gap-8'>
    <AuthButton icon={GoogleIcon} title="Sign Up with Google"/>
    <AuthButton icon={AppleIcon} title="Sign Up with Apple ID"/>
  </div>
  <div className='flex gap-7 items-center my-8'>
    <div className='w-56 bg-authButton h-1'/>
    <p className='font-medium text-base text-placeHolder'>OR</p>
    <div className='w-56 bg-authButton h-1'/>
  </div>
   </div>
  )
}

export default AuthHeader
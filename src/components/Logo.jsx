import React from 'react'
import LogoIcon from '../assets/logo.svg'

const Logo = () => {
  return (
    <div className='flex '>
      <img src={LogoIcon} alt="logo" className='h-8'/>
      <h1 className='font-bold text-header text-headerSize mx-2'>Stack</h1>
    </div>
  )
}

export default Logo
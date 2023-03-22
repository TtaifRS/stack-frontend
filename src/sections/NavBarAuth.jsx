import React from 'react'
import { Logo } from '../components'

const NavBarAuth = () => {
  return (
    <div className='w-full h-10  flex justify-between  mt-2 px-10'>
      <Logo/>
      <div className='self-end'>
        dropdown
      </div>
    </div>
  )
}

export default NavBarAuth
import React from 'react'
import searchIcon from '../assets/search.svg'
import notificationIcon from '../assets/notification.svg'
import avatar from '../assets/user.png'

const NavBarMain = () => {
  return (
    <div className='w-full h-10  flex justify-between  mt-3 px-10'>
      <div className="relative  w-[540px]"  >
        <div className="absolute inset-y-0  right-0  flex items-center pr-3 pointer-events-none">
          <img src={searchIcon} alt="email icon" className='w-5 h-5'/>
        </div>
        <input 
          type="text" 
          id="search" 
          name='search'
          className="bg-[#F0F5FA] border border-transparent placeholder-placeHolder text-authText  text-sm rounded-2xl block w-full pl-10 p-2.5 placeholder:text-sm focus:outline-transparent"
          placeholder='Search'
          />
      </div>
      <div className='self-end'>
        <div className='flex gap-10'>
          <img src={notificationIcon} alt="notification"/>
          <img src={avatar} alt="avatar" className='w-12 h-12 rounded-full object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default NavBarMain
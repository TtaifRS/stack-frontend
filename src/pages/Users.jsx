import React from 'react'
import { Sidebar } from '../components'
import { NavBarMain, UserList } from '../sections'

const Users = () => {
  return (
    <div className='flex'>
    <Sidebar/>
    <div className='flex flex-col w-full'>
      <NavBarMain/>
      <div className='mt-12  px-10'>
        <p className='font-semibold text-2xl mb-10'>User List</p>
        <UserList/>
      </div>
    </div>
    
    </div>
  )
}

export default Users
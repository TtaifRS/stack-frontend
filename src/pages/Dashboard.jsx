import React from 'react'
import Sidebar from '../components/SideBar'
import { NavBarMain } from '../sections'

const Dashboard = () => {
  return (
    <div className='flex h-screen'>
    <Sidebar/>
    <div className='flex flex-col w-full'>
      <NavBarMain/>
      <div className='mt-12  px-10'>
        <p className='font-semibold text-2xl mb-10'>Dashboard</p>
      
      </div>
    </div>
    
    </div>
  )
}

export default Dashboard
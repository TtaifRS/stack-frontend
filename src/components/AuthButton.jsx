import React from 'react'

const AuthButton = ({title, icon}) => {
  return (
    <div>
      <button className='flex bg-authButton h-14 items-center p-7 rounded-2xl'>
        <img src={icon} alt="icon" className='pr-2'/>
        <p className='text-authText'>{title}</p>
      </button>
    </div>
  )
}

export default AuthButton
import React from 'react'
import downIcon from '../assets/down.svg'
const Dropdown = () => {
  return (
    <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-sm text-placeHolder bg-[#F0F5FA] border rounded-2xl shadow-sm outline-none  focus:border-transparent">
                <option>
                  English (UK)
                </option>
                <option>English(US)</option>
                <option>Spanish</option>
               
            </select>
        </div>
  )
}

export default Dropdown
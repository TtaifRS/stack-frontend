import React from "react";
import Logo from './Logo';
import dashboardIcon from '../assets/dashboard.svg'
import userIcon from '../assets/user.svg'
import invoiceIcon from '../assets/invoice.svg'
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;
  const splitLocation = pathname.split("/");
    return (
        <div className="flex">
            <div className="flex flex-col h-full p-3 bg-white shadow w-64">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <Logo/>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li  className="rounded-sm mb-6">
                               <p className='text-placeHolder text-sm'>Pages</p>
                            </li>
                            <li className="rounded-sm  ">
                              <Link to="/" className={`${splitLocation[1] === "" ? "active" : ""} flex gap-4 mb-6 p-3 rounded-md`} >
                                <img src={dashboardIcon} alt="dashboard"/>
                                <p className='text-placeHolder'>Dashboard</p>
                              </Link> 
                            </li>
                            <li className="rounded-sm  mb-6">
                              <Link to="/users" className={`${splitLocation[1] === "users" ? "active" : ""} flex gap-4 mb-6 p-3 rounded-md`}>
                                <img src={userIcon} alt="dashboard"/>
                                <p className='text-placeHolder'>Users</p>
                              </Link> 
                            </li>
                            <li className="rounded-sm  ">
                              <Link to="/sales" className={`${splitLocation[1] === "sales" ? "active" : ""} flex gap-4 mb-6 p-3 rounded-md`}>
                                <img src={invoiceIcon} alt="dashboard"/>
                                <p className='text-placeHolder'>Salses</p>
                              </Link> 
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
          
        </div>
    );
}
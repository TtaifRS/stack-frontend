import React, { useState,} from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
 
import {useSelector, useDispatch} from 'react-redux'
import { loginUser,  } from '../store/actions';

import emailIcon from '../assets/email.svg'
import lockIcon from '../assets/lock.svg'
import eyeIcon from '../assets/eye.svg'



const LogForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [err, setErr] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

 

  const formik = useFormik({
    initialValues: {
   
      email: '',
      password: '',
      checked: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Please enter a valid email address.').required('Please enter a valid email address.'),
      
    }),
    onSubmit: values => {
      const body = {
        email: values.email,
        password: values.password
      }
      
      dispatch(loginUser(body))
      .then(() =>  navigate("/"))
      .catch(()=>   setErr(user.errorMessage))
    
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="w-3/4 ">
     
      <div className={`relative mb-6 ${formik.touched.email && formik.errors.email && "mb-2"}`}  >
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img src={emailIcon} alt="email icon" className='w-5 h-5'/>
        </div>
        <input 
          type="email" 
          id="email" 
          name='email'
          
          className={`bg-white border border-inputBorder placeholder-placeHolder text-authText  text-sm rounded-2xl block w-full pl-10 p-2.5 placeholder:text-sm focus:outline-authText ${formik.touched.email && formik.errors.email && "border-error"}`}
          placeholder='Your Email'
          onChange={formik.handleChange}
          value={formik.values.email}
         
          />
      </div>
      {formik.touched.email && formik.errors.email && (
            <p className='text-error text-[14px] mb-4'>{formik.errors.email}</p>
          )}
      
   
      <div className="relative mb-6 ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img src={lockIcon} alt="lock icon" className='w-5 h-5'/>
        </div>
        <input 
          type={showPassword ? "text" : "password"} 
          id="password" 
          name='password' 
          
          className="bg-white border border-inputBorder placeholder-placeHolder text-authText  text-sm rounded-2xl block w-full pl-10 p-2.5 placeholder:text-sm focus:outline-authText "
          placeholder='Your password'
          onChange={formik.handleChange} 
          value={formik.values.password}
         
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 ">
          <img src={eyeIcon} alt="eye icon" className='w-5 h-5 cursor-pointer ' onClick={() => setShowPassword(!showPassword)}/>
          </div>
      </div>
      
      <div className="flex items-center my-4">
        <input 
          id="checked"  
          onChange={formik.handleChange} 
          type="checkbox"
          value={formik.values.checked}
          className=" appearance-none rounded-md h-4 w-4 bg-[#EDEFF1]
          focus:ring-0 focus:ring-offset-0 checked:bg-button
          border-transparent border-2"/>
         <label  className="ml-2 text-sm font-medium text-placeHolder ">Remeber Me</label>
      </div>
      {user.errorMessage.length > 0 && (
        <p className='text-error text-[14px]'>{err}</p>
      )}
      <button type="submit" className='w-full bg-button mt-4 mb-8 h-10 text-white font-medium text-sm rounded-xl'>Submit</button>
      
    </form>
  );
};

export default LogForm
import React from 'react'
import frameImg from "../assets/frame.png";
import SignUpForm from './SignUpForm';
import LoginInForm from './LoginInForm';
import {FcGoogle} from "react-icons/fc";

const Template = ({title , desc1 , desc2 , image , formtype , setIsLoggedIn}) => {
  return (
    
    <div className='flex flex-col md:flex-row justify-between w-full max-w-[1160px] py-12 mx-auto gap-6 md:gap-x-12'>

      <div className='md:w-1/2'>
        <h1 className='text-richblack-5 font-semibold text-[1.875rem] md:text-3xl leading-[2.375rem]'>{title}</h1>
        <p className='text-[1.125rem] md:text-xl leading-[1.625rem] mt-4'>
            <span className='text-richblack-100'>{desc1}</span>
            <br />
            <span className='text-blue-100 italic'>{desc2}</span>
        </p>

        {formtype === "signup" ? (<SignUpForm setIsLoggedIn = {setIsLoggedIn}></SignUpForm>) : (<LoginInForm setIsLoggedIn = {setIsLoggedIn}></LoginInForm>)}

        <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='w-full h-[1px] bg-richblack-100'></div>
            <p className='text-richblack-200 font-medium text-lg md:text-xl leading-6 md:leading-9 mx-4'>OR</p>
            <div className='w-full h-[1px] bg-richblack-100'></div>
        </div>
        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-200 px-4 md:px-6 py-3 md:py-4 mt-6 md:mt-8'><FcGoogle></FcGoogle>Sign Up With Google</button>
      </div> 

        <div className='relative w-11/12 max-w-[450px] hidden md:block'>
            <img className = ''src={frameImg} alt="frame-img" width = {558} height = {584} loading  ="lazy"/>

            <img className = 'absolute -top-4 right-4'src={image} alt="img" width = {558} height = {490} loading  ="lazy"/>
        </div>
    </div>
  )
}

export default Template

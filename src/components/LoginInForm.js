import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginInForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [fromData , setFormData] = useState({
        email:"" , password:""
    });

    const [showPassword  , setshowPassword] = useState(false);

    function changeHandler(event){
        setFormData( (prevFormData) => (
            {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }
  return (
    <form className = "flex flex-col w-full gap-y-4 mt-6"onSubmit = {submitHandler}>
        <label className='w-full md:w-11/12 md:max-w-[450px]'>
            <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'> 
                Email Address <sup className='text-pink-200'>*</sup>
            </p>
        </label>
        <input required type="text" value = {FormData.email} onChange = {changeHandler} name = "email" placeholder = "Enter Email Id" className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>
                Password <sup className='text-pink-200'>*</sup>
            </p>
       
        <input required 
        type = {showPassword ? ("text") : ("password")} 
        value = {FormData.password} onChange = {changeHandler} name = "password" placeholder = "Enter Password" className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

        <span onClick = {() => {
            setshowPassword((prev) => !prev)
        }} className='absolute right-3 top-[34px] cursor-pointer'>
            {showPassword ? (<AiOutlineEyeInvisible  fontSize={24} fill ='#AFB2BF'></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill ='#AFB2BF'></AiOutlineEye>)}
        </span>
        <Link to = "#">
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forget Password?</p>
        </Link>
        </label>

        <button className='bg-yellow-50 rounded-[8px] text-richblack-900 font-semibold px-[8px] py-[12px] mt-6'>Sign In</button>
    </form>
  )
}

export default LoginInForm

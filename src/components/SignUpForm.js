import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignUpForm = (props) => {

  const setIsLoggedIn = props.setIsLoggedIn;

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "", lastname: "", email: "", password: "", conformPassword: ""
  });

  function changeHandler(event) {
    setFormData((prevFormData) => (
      {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    ))
  } 

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [accountType , setAccountType] = useState("student");

  function submitHandler(event){
    event.preventDefault();
    if(formData.password !== formData.conformPassword)
    {
      toast.error("Password not matched");
      setFormData({
        ...formData,
        password: "", // Reset password field
        conformPassword: "" // Reset conformPassword field
    });
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData
    }

    const finalData = {
      ...accountData,
      accountType
    }

    console.log("final data");
    console.log(finalData);
    navigate("/dashboard");
  }
  return (
    <div>
      {/* stueny instructor tavb */}
      <div className='flex mx-auto md:mx-0 bg-richblack-200 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button onClick={() => {
          setAccountType("student")
        }} className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5": "bg-transparent text-black"} py-2 px-5 rounded-full transition-all duration-200`}>Student</button>
        <button onClick={() => {
          setAccountType("instructor")
        }} className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5": "bg-transparent text-black"} py-2 px-5 rounded-full transition-all duration-200`}>Instructor</button>
      </div>

      <form onSubmit = {submitHandler}>
        <div className='flex w-full gap-4 md:gap-6 mt-6'> 
          {/* firstname and lastname */}
          <label className='w-full md:w-11/12 md:max-w-[450px]'>
            <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>FirstName <sup className='text-pink-200'>*</sup></p>
            <input required type="text" name="firstname" onChange={changeHandler} balue={formData.firstname} placeholder="Enter FirstName" className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
          </label>

          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>LastName <sup className='text-pink-200'>*</sup></p>
            <input required type="text" name="lastname" onChange={changeHandler} value={formData.lastname} placeholder="Enter LastName" className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
          </label>
        </div>

        <div className='mt-[10px]'>
        <label className='w-full mt-[10px]'>
          <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
          <input required type="email" name="email" onChange ={changeHandler} value={formData.email} placeholder="Enter Email" className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
        </label>
        </div>
        

        {/* conform password */}
        <div className='w-full flex gap-x-4 mt-[10px]'>
          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>*</sup></p>
            <input required type={showPassword ? ("text") : ("password")} name="password" onChange={changeHandler} value={formData.password} placeholder="Create Password" className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

            <span onClick={() => {
              setShowPassword((prev) => !prev)
            }} className='absolute right-3 top-[34px] cursor-pointer'>
              {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill ='#AFB2BF'></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill ='#AFB2BF'></AiOutlineEye>)}
            </span>
          </label>

          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Conform Password <sup className='text-pink-200'>*</sup></p>
            <input required type= {showPassword1 ? ("text") : ("password")} name="conformPassword" onChange={changeHandler} value={formData.conformPassword} placeholder="Enter Password"className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />

            <span onClick={() => {
              setShowPassword1((prev) => !prev)
            }} className='absolute right-3 top-[34px] cursor-pointer'>
              {showPassword1 ? (<AiOutlineEyeInvisible fontSize={24} fill ='#AFB2BF'></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill ='#AFB2BF'></AiOutlineEye>)}
            </span>
          </label>
        </div>

        <button className='bg-yellow-50 rounded-[8px] text-richblack-900 font-semibold px-[8px] py-[12px] mt-6 w-full'>Create Account</button>

      </form>
    </div>
  )
}

export default SignUpForm

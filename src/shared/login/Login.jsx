import React,{ useState } from "react";
import { Link } from "react-router-dom";
import LoginImage from "../../assets/images/greenWitch.png";

import Heading from '../fonts/Heading';
import { FaEye, FaEyeSlash, FaCamera } from "react-icons/fa";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
        <div className='container grid lg:grid-cols-2 grid-cols-1 pt-32 pb-4'>
            <div className="image bg-green-400 rounded-md shadow-md w-full">
                <img src={LoginImage} alt="" />
            </div>
            <div className="form shadow-md border-l border-red-100 w-full">
                <div className="pt-10 text-center">
                <p className="font-bold text-2xl sm:text-l">
                 Saddle<span className="text-secondary">Sales.com</span></p>
                <Heading subtitle={"Login To The System"} />
                </div>
                <div className='p-5'>
                      <div>
                    <label
                      htmlFor="Email"
                      className="input-label lg:text-sm lg:font-normal text-xl font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="Email"
                      type="email"
                      placeholder='Email'
                      className="w-full rounded-md border border-gray-900 dark:border-gray-500 px-2 py-1 mb-4"
                      
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="input-label lg:text-sm lg:font-normal text-xl font-medium"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded-md border border-gray-900 dark:border-gray-500 px-2 py-1 mb-4"
                        id="password"
                        placeholder='Password'
                        type={showPassword ? "text" : "password"}
                        
                      />
                      {showPassword ? (
                        <FaEye
                          className="text-gray-500 absolute top-4 right-3 -translate-y-1/2 cursor-pointer "
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      ) : (
                        <FaEyeSlash
                          className="text-gray-500 absolute top-4 right-3 -translate-y-1/2 cursor-pointer "
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      )}
                    </div>
                  </div>
                      <div className="terms flex flex-row justify-center gap-2 pb-5">
                        <input type="checkbox" name="terms" id="terms" className="w-12"/>
                        Keep me loggedIn
                      </div>
                <div className="flex flex-row justify-center gap-5 lg:ml-24 md:ml-48">
                <button
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-md "
                  >Login
                  </button>
                  <p className="text-gray-700">No Account?</p>
                  <Link to={"/register"}>
                    <p className="text-blue-400 hover:text-secondary">Create Account</p>
                  </Link>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
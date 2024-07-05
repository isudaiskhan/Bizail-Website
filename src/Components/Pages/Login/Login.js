import React,{useState} from 'react'
import Navbar from '../../Navbar/Navbar'
import { HiOutlineMail, HiEye, HiEyeOff } from 'react-icons/hi';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import Footer from '../../Footer/Footer';
import ScrollButton from '../../ScrollButton/ScrollButton';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>

    <Navbar />


    <div className="min-h-screen flex items-center justify-center py-28 mt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg p-8 rounded w-full bg-white sm:mt-8 mt-14 space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center ">
                  <HiOutlineMail className="h-5 w-5 text-gray-400 cursor-pointer hover:text-blue-500" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative mt-5">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  {showPassword ? (
                    <HiEyeOff
                      className="h-5 w-5 text-gray-400 cursor-pointer hover:text-blue-500"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <HiEye
                      className="h-5 w-5 text-gray-400 cursor-pointer hover:text-blue-500"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="text-sm select-none">
              <a href="#" className="font-medium text-blue-500">
                Forgot your password?
              </a>
            </div>
           
          </div>

          <div>
            <button
              type="submit"
              className="group relative select-none w-full flex justify-center py-3 px-4 border border-transparent font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>

          <div className="text-sm text-center">
              <a href="#" className="font-medium text text-gray-900">
               Don't have an account ?  <span className='text-blue-500'>Sign up</span>
              </a>
            </div>

            <div className="mt-4 group">
            <button
              type="button"
              className="group relative flex items-center hover:bg-indigo-500 justify-start w-full py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FaFacebook className="h-5 w-5 mr-2 text-blue-500 group-hover:text-white" />
              <span className='mx-auto group-hover:text-white'>Login with Facebook</span>
            </button>
          </div>

          <div className="mt-4">
            <button
              type="button"
              className="group relative flex items-center justify-start w-full py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FcGoogle className="h-5 w-5 mr-2" />
              <span className='mx-auto'>Login with Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <Footer />
    <ScrollButton />
      
    </>
  )
}

export default Login
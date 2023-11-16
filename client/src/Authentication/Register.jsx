import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthState from '../Hooks/useAuthState';
import toast, { Toaster } from 'react-hot-toast';
import {updateProfile } from "firebase/auth";

const Register = () => {
    const {createUser}=useAuthState()
    const navigate=useNavigate()

    // haldeform
    const handlefrom=(e)=>{
      e.preventDefault()
      const name=e.target.name.value
      const photo=e.target.photo.value
      const email=e.target.email.value
      const pass=e.target.password.value
      const toastId=toast.loading('Waiting Login...');
      createUser(email, pass)
      .then(async(result) => {
          const user = result.user
          toast.success('Register Successfully', {id: toastId});
          updateProfile(user, {
              displayName: name, photoURL:photo,
            }).then(() => { 
              user && navigate('/')
             }).catch((error) => { });
            
              // navigate('/')
      }).catch(error => {
         toast.error(error.message)
      })
    }
    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-0 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-sm xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Register to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handlefrom}>
                        <div>
                                <label   className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none" placeholder="Your name" required="" />
                            </div>
                            <div>
                                <label   className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                                <input type="text" name="photo"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none" placeholder="Your name" required="" />
                            </div>
                            <div>
                                <label   className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none" placeholder="demo@gmai.com" required="" />
                            </div>
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="text" name="password"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none" placeholder="password" required="" />
                            </div>
                            <button type="submit" className="w-full text-white bg-[#3893d3] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register</button>
                        </form>
                        <div>
                            <p className="text-sm font-light text-gray-500 text-center mt-2 dark:text-gray-400">
                            Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
    );
};



export default Register;
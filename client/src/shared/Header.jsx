import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/f.jpg'
import 'cooltipz-css'
import useAuthState from '../Hooks/useAuthState';
import toast, { Toaster } from 'react-hot-toast';

const Header = () => {
    const [toggle, setoogle] = useState(false)
    const {user,logOut}=useAuthState()
    const navigate=useNavigate()
    return (
        <div className='md:!sticky md:top-0 md:left-0 md:z-[9999]'>
            <div className='bg-[#2a9d8f] text-white'>
            <div className='w-11/12 lg:max-w-7xl m-auto flex  justify-between items-center py-[5px]'>
                <img className='h-[55px] text-white'  src="https://themezhub.net/jobstock-landing-2.2/img/logo.png" alt="" />
                <ul className='hidden lg:flex items-center space-x-4'>
                    <li><NavLink className={({ isActive}) => isActive ? 'text-[#00d9ff]':"text-white"} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive}) => isActive ? 'text-[#00d9ff]':"text-white"}  to="/alljobs">All Jobs</NavLink></li>
                    <li><NavLink className={({ isActive}) => isActive ? 'text-[#00d9ff]':"text-white"}  to="/blog">Blogs</NavLink></li>
                    {user ? <>
                     <li><NavLink className={({ isActive}) => isActive ? 'text-[#00d9ff]':"text-white"}  to="/addjobs">Add A Job</NavLink></li>
                    <li><NavLink className={({ isActive}) => isActive ? 'text-[#00d9ff]':"text-white"}  to="/myjobs">My Jobs</NavLink></li>
                    <li><NavLink className={({ isActive}) => isActive ? 'text-[#00d9ff]':"text-white"}  to="/applied">Applied Jobs</NavLink></li>
                    </>:''}
                   
                </ul>
                 {
                    user ?  <div className='gap-3 items-center  hidden lg:flex'>
                    <div className='relative hidden z-50  lg:block'  aria-label={`${user?.displayName}`} data-cooltipz-dir="left">
                           <img  className='w-10 h-10 rounded-full ring-2 ring-[#3cc4dc] cursor-pointer' src={user?.photoURL ? user?.photoURL : logo} alt="" />
                       </div>
                       <button onClick={async()=>{
                        await logOut()
                        navigate('/')
                        toast.success('Logout Successfully')
                       }} className='bg-[#9e2a2b] h-fit px-2 rounded-[2px]'>Log Out</button>
                    </div> :<div className='hidden lg:block'>
                    <NavLink  className={({ isActive}) => isActive ? 'text-white':""} to="/login">Login</NavLink>
                        </div>
                 }
                    {/* colse button */}
                    <div onClick={() => setoogle(!toggle)} className="lg:hidden cursor-pointer">
               {toggle ? <FaTimes size={20} /> : <AiOutlineMenu size={20} />}

            </div>
            </div>
        </div>




        {/*!// mobile divice --------------------------------------*/}
        <div className={`${toggle ? 'lg:hidden z-50 bg-[#2ca396] fixed left-0 top-0 transition-all w-3/4 h-full' : 'lg:hidden  z-50 bg-[#1BB4B9] fixed left-[-100%] top-0 duration-500 w-3/4 h-full'}`}>
        <div className='p-2'>
          <img className='h-[55px] text-white'  src="https://themezhub.net/jobstock-landing-2.2/img/logo.png" alt="" />
          <ul className='lg:hidden space-y-3'>
          <li className='border-b-[1px]'><NavLink className={({ isActive}) => isActive ? 'text-[#00d9ff]':"text-white"} to="/">Home</NavLink></li>
          <li className='border-b-[1px]'><NavLink className={({ isActive}) => isActive ? 'text-[#00d9ff]':"text-white"} to="/alljobs" >All Jobs</NavLink></li>
          <li className='border-b-[1px]'><NavLink className={({ isActive}) => isActive ? 'text-[#00d9ff]':"text-white"} to="/blog">Blogs</NavLink></li>
          <li className='border-b-[1px]'><NavLink className={({ isActive}) => isActive ? 'text-[#00d9ff]':"text-white"} to="/addjobs">Add A Job</NavLink></li>
          <li className='border-b-[1px]'><NavLink className={({ isActive}) => isActive ? 'text-[#00d9ff]':"text-white"} to="/myjobs">My Jobs</NavLink></li>
          <li className='border-b-[1px]'><NavLink className={({ isActive}) => isActive ? 'text-[#00d9ff]':"text-white"} to="/applied">Applied Jobs</NavLink></li>
          </ul>
         <div>
         <div className='pt-5 pb-1 flex gap-[6px] items-center text-white'>
           <img  className='w-10 h-10 rounded-full ring-2 ring-[#3cc4dc] cursor-pointer' src={user?.photoURL ? user?.photoURL : logo} alt="" />
            <div>
                <h1 className='text-xl font-semibold truncate'>Julfiker Rahamn</h1>
                <h1 className='text-xs text-[#e8e6e6] truncate'>Julfiker755.bd@gmail.com</h1>
            </div>
           </div>
           <h1 className='border-b-[1px] mb-2'></h1>
           <button onClick={async()=>{
                        await logOut()
                        navigate('/')
                        toast.success('Logout Successfully')
                       }}  className='bg-[#248378] text-white w-full py-2 rounded-sm'>Log Out</button>
         </div>
        </div>
        </div>
        {/* tost ends */}
        <Toaster
         position="top-center"
         reverseOrder={false}
         />
        </div>
    );
};

export default Header;
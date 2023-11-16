import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BiLocationPlus} from 'react-icons/bi';


const Fooder= () => {
    return (
       <div className='bg-[#0e7355cd] text-[#ffffffd3]'>
         <div className='w-11/12  lg:max-w-7xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4'>
           <div>
           <img className='h-[40px]' src="https://themezhub.net/jobstock-landing-2.2/img/logo.png" alt="" />
           <p className='py-1'>Use Jobstock to run a hiring site and earn money in the process!</p>
           <h1 className='flex gap-[2px] text-sm items-center pb-3'><BiLocationPlus/>104 Haji Ismail Rd, Khulna 9100, Bangladesh</h1>
           <ul className='flex gap-2'>
                <li className='bg-[#3C5B9B] p-3 rounded-md cursor-pointer'><FaFacebookF color='white'/></li>
                <li className='bg-[#40C1DF] p-3 rounded-md cursor-pointer'><BsTwitter color='white'/></li>
                <li className='bg-[#ED3C32] p-3 rounded-md cursor-pointer'><BsGoogle color='white'/></li>
                <li className='bg-[#3C5B9B] p-3 rounded-md cursor-pointer'><BsInstagram color='white'/></li>
             </ul>
           </div>
           <div>
             <h2 className='text-xl font-semibold mb-2'>For Candidates</h2>
             <ul>
                <li>User Dashboard</li>
                <li>CV Packages</li>
                <li>Candidate Grid</li>
                <li>Candidate List</li>
                <li>Messages</li>
                <li>Jobs Featured</li>
             </ul>
           </div>
           <div>
             <h2 className='text-xl font-semibold mb-2'>Quick Links</h2>
             <ul>
                <li>Job Packages</li>
                <li>Post New Job</li>
                <li>Jobs Listing</li>
                <li>Candidates</li>
                <li>Employers</li>
                <li>Terms of Use</li>
             </ul>
           </div>
           <div>
             <h2 className='text-xl font-semibold mb-2'>Quick Links</h2>
             <ul>
                <li>Job Packages</li>
                <li>Post New Job</li>
                <li>Jobs Listing</li>
                <li>Candidates</li>
                <li>Employers</li>
                <li>Terms of Use</li>
             </ul>
           </div>
        </div>
        {/* copy right */}
        <h1 className='border-b-[1px] border-[#ffffff63]'></h1>
        <div className='text-center py-2'>
             <p className='text-[#ffffff5e]'>Copyright ©2023 Job Stock. All Rights Reserved.</p>
        </div>
       </div>
    );
};




export default Fooder;
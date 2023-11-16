import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useIncaptor from '../Hooks/useIncaptor';
import useAuthState from '../Hooks/useAuthState';
import Modal from './Modal';
import {Helmet} from 'react-helmet-async'



const SingleDetails = () => {
    const {jobid}=useParams()
    const navigate=useNavigate()
    const axiosincaptor=useIncaptor()
    const [jobdetails,setjobdetails]=useState([])
    const {user}=useAuthState()
    const [modalconent,setmodalconent]=useState([])

    useEffect(()=>{
        (async()=>{
          const {data}=await axiosincaptor.get(`/singlejob/${jobid}`)
          setjobdetails(data)
        })()
    },[jobid])
    // single details
    const {name,application_deadline,posting_date,email,job_title,job_category,image,description,salary,applicants_number}=jobdetails || {}
   

    return (
        <div className='w-11/12 lg:max-w-7x m-auto py-10'>
          <Helmet>
             <title>Job | Details</title>
          </Helmet>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
               <div>
                 <img className='rounded-md h-[468] object-cover w-full' src={image} alt="" />
               </div>
               <div>
               <div className='flex gap-2 items-center mb-5'>
                 <img className='w-10 h-10 rounded-full ring-2 mt-2' src={user?.photoURL} alt="" />
                 <div>
                 <h1>{name}</h1>
                 <h1 className='text-xs text-[#cccbcb]'>{email}</h1>
                 </div>
               </div>
               <h1 className='bg-[#2A9D8F] w-fit px-2 rounded-md text-white'>{job_category}</h1>
               <h1 className='text-3xl font-semibold'>{job_title}</h1>
                 <p className='py-[10px] lg:py-1'>{description}</p>
                 <div className='flex-row lg:flex lg:justify-between space-y-3 lg:space-y-0 lg:py-2'>
                   <div>
                      <h1 className='text-base lg:text-xl font-semibold'>Job Posting Date</h1>
                      <h1 className='text-xs lg:text-base'>{posting_date}</h1>
                   </div>
                   <div >
                      <h1 className='text-base lg:text-xl font-semibold'>Application Deadline</h1>
                      <h1 className='text-xs lg:text-base'>{application_deadline}</h1>
                   </div>
                   <div>
                       <h1>Price:{salary}</h1>
                       <h1>Applicants count:{applicants_number}</h1>
                   </div>
                 </div>
                 <div className='flex gap-3 py-5 lg:py-10'>
                  <button  onClick={()=>navigate("/")} className='bg-[#117e97] py-2 px-3 text-white rounded-md hover:bg-[#117e97d0]'>Back Now</button>
                  {/* compare your application */}
                   <button  onClick={()=>setmodalconent(jobdetails)}> <label  htmlFor="my_modal_6" className='cursor-pointer bg-[#119766] py-2  px-3 text-white rounded-md hover:bg-[#119766c4]'>Apply Now</label></button>
                 </div>
               </div>
            </div>
            {modalconent && <Modal content={modalconent}></Modal>}
        </div>
    );
};

export default SingleDetails;
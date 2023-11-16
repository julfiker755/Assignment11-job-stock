import React, { useEffect, useState } from 'react';
import {Helmet} from 'react-helmet-async'
import useIncaptor from '../Hooks/useIncaptor';
import useAuthState from '../Hooks/useAuthState';


const Appliedjobs = () => {
    const [category,setcatagory]=useState('')
    const axiosincaptor=useIncaptor()
    const [appyall,setapllyall]=useState([])
    const {user}=useAuthState()
    useEffect(()=>{
      (async()=>{
          const {data}=await axiosincaptor.get(`/applyjobs?email=${user?.email}`)
          const applysearchjob =data?.filter(d =>d.job_category.toLowerCase().includes(category.toLowerCase()));
          setapllyall(applysearchjob)
      })()
     },[category])
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto py-10'>
            <Helmet>
                <title>Job | AppliedJobs</title>
            </Helmet>
          <div className='flex-row lg:flex justify-between py-5'>
             <h1 className='hidden lg:block lg:py-0 lg:text-3xl font-semibold'>All Applied Infomation</h1>
             <div>
                    <select onChange={(e)=>setcatagory(e.target.value)} className="select select-success select-sm w-full lg:w-[200px] !rounded-[2px]">
                        <option>On Site Job</option>
                        <option>Remote Job</option>
                        <option>Hybrid</option>
                        <option>Part Time</option>
                    </select>
</div>
          </div>
          <div className="overflow-x-auto">
  <table className="table">
    <tbody>
      {appyall?.length ? appyall?.map(a=>{
        const {image,job_category,job_title,name,posting_date,application_deadline,salary,applicants_number}=a
        return (<tr key={a._id}>
          <td className='w-[200px]'>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="w-[60px] h-[60px] rounded-md">
                  <img src={image}/>
                </div>
              </div>
              <div>
                <div className='text-base font-semibold truncate'>{job_title}</div>
                <div className="text-sm opacity-50">{name}</div>
              </div>
            </div>
          </td>
          <td>
            <h1 className='text-base font-semibold'>Posting Date</h1>
            <h1>{posting_date}</h1>
          </td>
          <td>
            <h1 className='text-base font-semibold'>Application Deadline</h1>
            <h1>{application_deadline}</h1>
          </td>
          <td>
            <h1><span className='text-base font-semibold'>Salary</span>:{salary}</h1>
            <h1><span className='text-base font-semibold'>Applicants</span>:{applicants_number}</h1>
          </td>
        <td>
           <h1 className='text-base font-semibold'>Job Category</h1>
           <h1>{job_category}</h1>
        </td>
        </tr>)
      }):<tr className='text-base text-[red] font-semibold'><td>❌ Apply Not data,Please Apply</td></tr>}
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Appliedjobs;
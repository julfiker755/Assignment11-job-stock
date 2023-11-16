import React, { useEffect, useState } from 'react';
import useIncaptor from '../Hooks/useIncaptor';
import { useNavigate } from 'react-router-dom';
import './Alljobs.css'
import {Helmet} from 'react-helmet-async'


const Alljobs = () => {
   const axiosincaptor=useIncaptor()
   const [alljobs,setalljobs]=useState([])
   const [searchtext,setsearchtext]=useState('')
   const navigate=useNavigate()
   useEffect(()=>{
    (async()=>{
        const {data}=await axiosincaptor.get('/jobs')
        const match = data.filter(d =>d.job_title.toLowerCase().includes(searchtext.toLowerCase()));
        setalljobs(match)
    })()
   },[searchtext])

    return (
        <div className='w-11/12 lg:max-w-7xl m-auto'>
           <Helmet>
              <title>Job | All Jobs</title>
           </Helmet>
            <div>
              <div className="flex max-w-xl m-auto py-2">
                    <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-[#d4d2d2] bg-[#2a9d90bf] p-5">
                        <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-white transition">
                            <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                        </svg>
                    </div>
                    <input type="text"  onChange={(e)=>setsearchtext(e.target.value)} name="search" className="w-full bg-[#2a9d90bf]  pl-2 text-white  outline-0 rounded-r-lg searchjobsplce" placeholder="Search hare job now" />
                </div>
            </div>
            {/* table data for website */}
            <div className='py-10'>
<div className="overflow-x-auto">
  <table className="table">
    <tbody>
     {
        alljobs.map(d=>{
            const {_id,name,job_title,salary,applicants_number,posting_date,application_deadline,image
            }=d
            return ( <tr key={d._id}>
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
                 <button onClick={()=>navigate(`/details/${_id}`)} className='bg-[#2A9D8F] hover:bg-[#2a9d90c5] text-white py-2 px-5 rounded-sm'>Details</button>
              </td>
              </tr>)
        })
     }
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Alljobs;
// .my-input-class::placeholder {
//   color: green;
// }
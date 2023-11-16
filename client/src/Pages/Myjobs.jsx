import React from 'react';
import useMyjobs from '../Hooks/useMyjobs';
import Loading from '../Authentication/Loading';
import {Helmet} from 'react-helmet-async'
import useIncaptor from '../Hooks/useIncaptor';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Myjobs = () => {
    const {jobs,isPending,refetch}=useMyjobs()
    const axisincaptor=useIncaptor()
    const navigate=useNavigate()
    if(isPending){
        return <Loading></Loading>
    }
//  handledelete my  jobs
const handledelete=async(did)=>{
   const {data}=await axisincaptor.delete(`/myjobs/${did}`)
   if(data.deletedCount > 0){
    toast.success('Delete Successfully')
   }
   refetch()
}
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto'>
          <Helmet>
             <title>Job | My Jobs</title>
          </Helmet>
           <div className='py-10'>
<div className="overflow-x-auto">
  <table className="table">
    <tbody>
     {
        jobs?.map(d=>{
            const {_id,job_title,salary,job_category,applicants_number,posting_date,application_deadline,image
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
                      <div className="text-sm opacity-50">{job_category}</div>
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
              <td className='space-x-4'>
                 <button  onClick={()=>navigate(`/update/${_id}`)} className='bg-[#32abc0] hover:bg-[#32abc0cd] text-white py-2 px-5 rounded-sm'>Update</button>
                 <button onClick={()=>handledelete(_id)} className='bg-[#dc8238] hover:bg-[#dc8238da] text-white py-2 px-5 rounded-sm'>Delete</button>
              </td>
              </tr>)
        })
     }
    </tbody>
  </table>
</div>
            </div>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
    );
};

export default Myjobs;
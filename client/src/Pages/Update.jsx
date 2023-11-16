import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { format } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useIncaptor from '../Hooks/useIncaptor';
import {Helmet} from 'react-helmet-async'
import { useNavigate, useParams } from 'react-router-dom';



const Update = () => {
    const {uid}=useParams()
    const [startDate, setStartDate] = useState(null);
    const axiosincaptor=useIncaptor()
    const [updatedata,setupdatedata]=useState([])
    const navigate=useNavigate()
     useEffect(()=>{
        (async()=>{
            const {data}=await axiosincaptor.get(`singlejob/${uid}`)
            setupdatedata(data)
            setStartDate(new Date(data?.application_deadline))
        })()
     },[uid])
     const {name,image,job_title,job_category,salary,description,applicants_number,posting_date}=updatedata || {}


const [value1, setValue] = useState(updatedata.job_category)


    const handlefrom=async(e)=>{
     e.preventDefault()
     const name=e.target.name.value
     const image=e.target.image.value
     const job_category = value1 || updatedata.job_category
     const job_title=e.target.type.value
     const salary=e.target.salary.value
     const applicants_number=parseInt(e.target.applicants.value)
     const description=e.target.description.value
     const posting_date=e.target.postingdate.value
     const application_deadline=format(startDate, 'MM/dd/yyyy')

    //  posting_date application_deadline
  const updatejob= {name,image,job_title,job_category,salary,description,applicants_number,posting_date,application_deadline}
   

  const {data}=await axiosincaptor.put(`/myjobupdate/${uid}`,updatejob)
  if(data.modifiedCount > 0){
      toast.success('Jobs Update Successfully')
      navigate('/myjobs')
  }
    }
    // update data for my websites
   
   
    return (
        <div className='w-11/12 lg:max-w-5xl m-auto py-2'>
             <h2 className='text-center font-bold text-xl lg:text-3xl mb-2 text-[#36a194]'>Update Jobs</h2>
          <Helmet>
             <title>Job | Update Job</title>
          </Helmet>
        <form onSubmit={handlefrom}>
        <div className='flex-row gap-4 lg:flex'>
             <div className='lg:w-1/2'>
             <div className="form-control">
             <label className="label">
             <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={name} name="name" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
             <label className="label">
             <span className="label-text">Job Category</span>
          </label>
             <select value={job_category} className="select select-bordered w-full" onChange={(e)=> setValue(e.target.value)} >
              <option value="On Site Job">On Site Job</option>
              <option value="Remote Job">Remote Job</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Part Time">Part Time</option>
             </select>
        </div>
        <div className="form-control">
             <label className="label">
             <span className="label-text">Salary</span>
          </label>
          <input type="number" defaultValue={salary} name="salary" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
             <label className="label">
             <span className="label-text"> Posting Date</span>
          </label>
          <input type="text" name="postingdate" defaultValue={posting_date} className="input input-bordered w-full focus:outline-none" readOnly />
        </div>
             </div>
             {/* right to */}
             <div className='lg:w-1/2'>
             <div className="form-control">
             <label className="label">
             <span className="label-text">Image</span>
          </label>
          <input type="text" defaultValue={image} name="image" className="input input-bordered" required />
        </div>
        <div className="form-control">
             <label className="label">
             <span className="label-text">Job Title</span>
          </label>
          <input type="text" name="type"  defaultValue={job_title} className="input input-bordered" required />
        </div>
        <div className="form-control">
             <label className="label">
             <span className="label-text">Applicants Number</span>
          </label>
          <input type="number"   name="applicants"  defaultValue={parseInt(applicants_number)} className="input input-bordered focus:outline-none" required readOnly />
        </div>
        <div className="form-control">
             <label className="label">
             <span className="label-text">Application Deadline</span>
          </label>
          <DatePicker className='border focus:outline-none input input-bordered w-full' selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
             </div>
        </div>
        <h1 className='mt-2'>Description</h1>
        <textarea defaultValue={description} className="textarea textarea-bordered w-full my-2" name="description" required></textarea>
        <button className='bg-[#3d76bb] transition-all hover:bg-[#437fc8] w-full my-3 capitalize py-2 text-white rounded-sm'>Update</button>
        </form>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
    );
};





export default Update;
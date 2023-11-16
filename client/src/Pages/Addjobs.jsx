import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { format } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useIncaptor from '../Hooks/useIncaptor';
import {Helmet} from 'react-helmet-async'
import useAuthState from '../Hooks/useAuthState';


const Addjobs = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user}=useAuthState()
    const axiosincaptor=useIncaptor()
    const email=user?.email
    const handlefrom=async(e)=>{
     e.preventDefault()
     const name=e.target.name.value
     const image=e.target.image.value
     const job_category=e.target.category.value
     const job_title=e.target.type.value
     const salary=e.target.salary.value
     const applicants_number=parseInt(e.target.applicants.value)
     const description=e.target.description.value
     const posting_date=e.target.postingdate.value
     const application_deadline=format(startDate, 'MM/dd/yyyy')
     
    //  posting_date application_deadline

  const user= {name,image,job_title,job_category,salary,description,applicants_number,posting_date,application_deadline,email}
  const {data}=await axiosincaptor.post('/jobs',user)
  if(data.insertedId){
      toast.success('Jobs Post Successfully')
  }
//  reset button
   e.target.reset()

    }

    return (
        <div className='w-11/12 lg:max-w-5xl m-auto py-5'>
           <h2 className='text-center font-bold text-xl lg:text-3xl mb-2 text-[#36a194]'>Add Jobs</h2>
          <Helmet>
             <title>Job | Add Job</title>
          </Helmet>
        <form onSubmit={handlefrom}>
        <div className='flex-row gap-4 lg:flex'>
             <div className='lg:w-1/2'>
             <div className="form-control">
             <label className="label">
             <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
             <label className="label">
             <span className="label-text">Job Category</span>
          </label>
            <select name="category" className="select select-bordered w-full">
             <option>On Site Job</option>
             <option>Remote Job</option>
             <option>Hybrid</option>
            <option>Part Time</option>
             </select>
        </div>
        <div className="form-control">
             <label className="label">
             <span className="label-text">Salary</span>
          </label>
          <input type="number" name="salary" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
             <label className="label">
             <span className="label-text"> Posting Date</span>
          </label>
          <input type="text" name="postingdate" value={format(new Date(), 'MM/dd/yyyy')} className="input input-bordered w-full focus:outline-none" readOnly />
        </div>
             </div>
             {/* right to */}
             <div className='lg:w-1/2'>
             <div className="form-control">
             <label className="label">
             <span className="label-text">Image</span>
          </label>
          <input type="text" name="image" className="input input-bordered" required />
        </div>
        <div className="form-control">
             <label className="label">
             <span className="label-text">Job Title</span>
          </label>
          <input type="text" name="type"  className="input input-bordered" required />
        </div>
        <div className="form-control">
             <label className="label">
             <span className="label-text">Applicants Number</span>
          </label>
          <input type="number"   name="applicants"  defaultValue={0} className="input input-bordered focus:outline-none" required readOnly />
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
        <textarea className="textarea textarea-bordered w-full my-2" name="description" required></textarea>
        <button className='bg-[#3d76bb] transition-all hover:bg-[#437fc8] w-full my-3 capitalize py-2 text-white rounded-sm'>Add Jobs</button>
        </form>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
    );
};



export default Addjobs;
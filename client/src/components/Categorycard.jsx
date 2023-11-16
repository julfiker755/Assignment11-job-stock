import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthState from '../Hooks/useAuthState';
import toast, { Toaster } from 'react-hot-toast';




const Categorycard = ({d}) => {
    const navigate=useNavigate()
    const {user}=useAuthState()
    const {_id,name,job_title,salary,applicants_number,posting_date,application_deadline
    }=d
    const handledatails=()=>{
        if(user){
            navigate(`/details/${_id}`)
        }else{
            toast.success('You have to log in First to View Details!')
            navigate(`/details/${_id}`)
        }
    }

    return (
        <div className="card border">
                <div className="card-body !py-3 !px-[30px]">
                    <h2 className='text-xl font-semibold text-center text-[#3fbdaf] truncate'> {job_title} </h2>
                    <hr />
                    <h2 className='text-base font-semibold capitalize truncate'> Posted From: {name} </h2>

                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-base font-semibold'>Post date:</h3>
                            <p>{posting_date}</p>
                        </div>
                        <div>
                            <h3 className='text-base font-semibold'> Deadline:</h3>
                            <p>{application_deadline}</p>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <h3 className='text-base font-semibold'> Salary: ${salary} </h3>
                        <h3 className='text-base font-semibold'> Applicants:{applicants_number}</h3>
                    </div>
                    <button onClick={()=>handledatails()} className='text-white bg-[#2eb1a2] px-2 py-1 w-full rounded '>Details</button>
                </div>
                <Toaster
  position="top-center"
  reverseOrder={false}
/>
            </div>
    );
};

export default Categorycard;
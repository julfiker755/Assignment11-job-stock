import React from 'react';
import useAuthState from '../Hooks/useAuthState';
import toast, { Toaster } from 'react-hot-toast';
import useIncaptor from '../Hooks/useIncaptor';
import emailjs from '@emailjs/browser';

const Modal = ({ content }) => {
    const { user } = useAuthState()
    const { _id: jobid, name, job_category, job_title, posting_date, application_deadline, salary, applicants_number, image, description, email } = content || {}
    const axiosincaptor = useIncaptor()

    const handlefrom = async (e) => {
        e.preventDefault()
        const applyname = e.target.displayname.value
        const currentUserEmail = user?.email
        const applyresume = e.target.resume.value
        const applyemail = e.target.email.value
        const currentDate = new Date()
        const deadLineDate = new Date(Date.parse(application_deadline))

        const templateParams = {
            from_name: applyname,
            from_email: currentUserEmail,
            message: "Congratulations!! Your application has been dropped successfully to us. Wait for the confirmation call from our team."
        }


        if (currentDate > deadLineDate) {
            toast.error("Deadline is over sir.")
        } else {
            if (email !== currentUserEmail) {
                const applyinfo = { jobid, name, job_category, job_title, posting_date, application_deadline, salary, applicants_number, image, description, email, applyemail, applyresume, applyname }
                axiosincaptor.post('/applyjobs', applyinfo)
                    .then(result => {
                        if (result.data.insertedId) {
                            axiosincaptor.patch(`/updateapplicants/${jobid}`)
                                .then(result => {})
                            //  email js 
                            emailjs.send('service_5j0e6fe', 'template_w1rr1hu', templateParams, 'WU7Xf3dCgK-HB0LU_')
                                .then((response) => {
                                    console.log('SUCCESS!', response.status, response.text);
                                }, (err) => {
                                    console.log('FAILED...', err);
                                });

                            // tost

                            toast.success('Apply Jobs Successfully')

                        }
                    })

            } else {
                toast.error("Sorray!That is your Jobs.not apply")
            }
        }
    }

    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal z-[99999999]">
                <div className="modal-box">
                    <label htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <form onSubmit={handlefrom}>
                        <div className='my-7 space-y-4'>
                            <input type="text" name="displayname" defaultValue={user?.displayName} className="input text-black w-full input-bordered focus:outline-none" readOnly />
                            <input type="text" name="email" defaultValue={user?.email} className="input  text-black w-full input-bordered focus:outline-none" readOnly />
                            <input type="text" name="resume" placeholder="Resume Link" className="input w-full input-bordered" required />
                            <button className='w-full bg-[#3275af] py-3 text-white rounded-md'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Modal;
import React from 'react';
import svg1 from '../assets/jobtex/svg1.svg'
import svg2 from '../assets/jobtex/svg2.svg'
import svg3 from '../assets/jobtex/svg3.svg'
import svg4 from '../assets/jobtex/svg4.svg'


const Jobtex = () => {
    return (
        <div className='pb-5 lg:pb-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div>
                 <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="partime jobs" />
              </div>
              <div className='bg-[#F1F5F8] overflow-hidden'>
                 <div className='p-10'>
                 <div className='text-center lg:text-left'>
                 <h1 className='text-xl lg:text-4xl font-semibold'>What can I do with Jobtex?</h1>
                 <p>Streamline your hiring process with strategic channels to reach qualified candidates</p>
                 </div>
                 <br/>
                 <div className='space-y-10 lg:space-y-4'>
                 <div className='flex-row text-center lg:text-left lg:flex gap-2'>
                    <img className='m-auto lg:m-0' src={svg1} alt="" />
                     <div>
                        <h1 className='text-xl font-semibold'>Reduce Hiring Bias</h1>
                        <p>Structured digital interviews increase the predictive validity of your hires</p>
                     </div>
                 </div>
                 <div className='flex-row text-center lg:text-left lg:flex gap-2'>
                    <img className='m-auto lg:m-0' src={svg2} alt="" />
                     <div>
                        <h1 className='text-xl font-semibold'>Save Time & Headspace</h1>
                        <p>Reduce your time-to-hire by up to 80% and free up headspace for other HR priorities.</p>
                     </div>
                 </div>
                 <div className='flex-row text-center lg:text-left lg:flex gap-2'>
                    <img className='m-auto lg:m-0' src={svg3} alt="" />
                     <div>
                        <h1 className='text-xl font-semibold'>Minimize Environmental Impact</h1>
                        <p>Did you know? U.S. office workers use ~10,000 sheets of paper every year</p>
                     </div>
                 </div>
                 <div className='flex-row text-center lg:text-left lg:flex gap-2'>
                    <img className='m-auto lg:m-0' src={svg4} alt="" />
                     <div>
                        <h1 className='text-xl font-semibold'>Save Money</h1>
                        <p>Interview more candidates, more quickly  and still save money.</p>
                     </div>
                 </div>
                 </div>
                 </div>
              </div>
            </div>
        </div>
    );
};

export default Jobtex;
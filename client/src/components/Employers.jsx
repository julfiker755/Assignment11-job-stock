import React from 'react';
import { BiLocationPlus } from 'react-icons/bi';
import check from '../assets/company/check.png'
import empoly1 from '../assets/company/e1.png'
import empoly2 from '../assets/company/e2.png'
import empoly3 from '../assets/company/e3.png'
import empoly4 from '../assets/company/e4.png'
import empoly5 from '../assets/company/e5.png'
import empoly6 from '../assets/company/e6.png'
import empoly7 from '../assets/company/e7.png'
import empoly8 from '../assets/company/e8.png'
import empoly9 from '../assets/company/e9.png'
import empoly10 from '../assets/company/e10.png'
import empoly11 from '../assets/company/e11.png'
import empoly12 from '../assets/company/e12.png'



const Employers = () => {
    const emploaydata=[
        {
            id:1,
            tilte:'IT & Networking',
            company:'Mermedia Ltd',
            locationn:'195 Nassau Ave, Brooklyn',
            image:empoly1
        },{
            id:2,
            tilte:'Engineering',
            company:'Aprico Ltd',
            locationn:'117 Avenue D, NY',
            image:empoly2
        },{
            id:3,
            tilte:'Customer Service',
            company:'Barone Ltd',
            locationn:'158 Ludlow St, NY',
            image:empoly3
        },{
            id:4,
            tilte:'Accounting',
            company:'Acme Co',
            locationn:'178 Broadway, Brooklyn',
            image:empoly4
        },{
            id:5,
            tilte:'IT & Networking',
            company:'Biffco Ltd',
            locationn:'254 S 2nd St, Brooklyn',
            image:empoly5
        },{
            id:6,
            tilte:'Writing',
            company:'Big Kahuna',
            locationn:' 83 Moorgate, Greater',
            image:empoly6
        },{
            id:7,
            tilte:'Sales & Marketing',
            company:'Abstergo Ltd',
            locationn:' 129 Avenue D, NY',
            image:empoly7
        },{
            id:8,
            tilte:'Project Manager',
            company:'Binford Ltd',
            locationn:'125 Avenue D, NY',
            image:empoly8
        },{
            id:9,
            tilte:'Customer Service',
            company:'Samsong',
            locationn:'348 Wythe Ave, Brooklyn',
            image:empoly9
        },{
            id:10,
            tilte:'Accounting',
            company:'Rigid Co.',
            locationn:'57 Pitfield St',
            image:empoly10
        },{
            id:11,
            tilte:'Customer Service',
            company:'Bosch Ltd',
            locationn:'110 Bishopsgate',
            image:empoly11
        },{
            id:12,
            tilte:'Accounting',
            company:'Employer',
            locationn:' 162 Bedford Ave, Brooklyn',
            image:empoly12
        }
    ]
    
    return (
        <div className='mb-5 lg:mb-10 w-11/12 lg:mx-w-7xl m-auto'>
            <div className='text-center'>
            <h1 className='tex-2xl lg:text-3xl font-semibold'>Top Company</h1>
            <h2>Showing companies based on reviews and recent job openings</h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4  gap-4 mt-3'>
             {emploaydata?.map(em=>{
                const {tilte,company, locationn,image}=em || {}
                return ( <div key={em.id} className='border p-4 rounded-md flex gap-2 transition-all cursor-pointer  '>
                       <img loading='lazy' className='w-[70px] h-[70px]' src={image} alt="" />
                 <div>
                 <h1 className='text-[#0E7355] text-base font-semibold'>{tilte}</h1>
                 <h1 className='flex items-center gap-1'><span  className='text-xl font-bold'>{company}</span> <img src={check} alt="" /></h1>
                 <h1 className='flex text-sm items-center text-[#aeadad]'><BiLocationPlus/>{locationn}</h1>
                 </div>
              </div>)
             })}
        </div>
        </div>
    );
};

export default Employers;
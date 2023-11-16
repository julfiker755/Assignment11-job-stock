import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Tab.css'
import Category from './Category';
import useIncaptor from '../Hooks/useIncaptor';


const Tabsitem = () => {
    const [job,setjobs]=useState([])
    const axiosincaptor=useIncaptor()
    useEffect(()=>{
        (async()=>{
         const {data}=await axiosincaptor.get("/jobs")
         setjobs(data)
        })()
    },[])
    // filter section
    const On_Site_Job=job.filter(j=>j.job_category === 'On Site Job')
    const Remote=job.filter(j=>j.job_category === 'Remote Job')
    const Hybrid=job.filter(j=>j.job_category === 'Hybrid')
    const partime=job.filter(j=>j.job_category === 'Part Time')
//    console.log(On_Site_Job)
    
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto pt-5'>
        <div>
             <Tabs>
                 <TabList className="py-2 m-auto text-center">
                     <Tab>All Jobs</Tab>
                     <Tab>On Site Job</Tab>
                     <Tab>Remote Job</Tab>
                     <Tab>Hybrid</Tab>
                     <Tab>Part Time</Tab>
                 </TabList>

                 <TabPanel>
                    <Category jobs={job}></Category>
                 </TabPanel>
                 <TabPanel>
                    <Category jobs={On_Site_Job}></Category>
                 </TabPanel>
                 <TabPanel>
                    <Category jobs={Remote}></Category>
                 </TabPanel>
                 <TabPanel>
                    <Category jobs={Hybrid}></Category>
                 </TabPanel>
                 <TabPanel>
                    <Category jobs={partime}></Category>
                 </TabPanel>
             </Tabs>
         </div> 
     </div>
    );
};

export default Tabsitem;
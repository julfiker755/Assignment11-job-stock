import React from 'react';
import Categorycard from './Categorycard';


const Category = ({jobs}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4 pt-5 pb-10'>
              {jobs?.map(d=> <Categorycard key={d._id} d={d}></Categorycard>)}
            </div>
    );
};

export default Category;
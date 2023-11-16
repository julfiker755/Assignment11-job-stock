import React from 'react';
import Banner from '../components/Banner';
import Tabsitem from '../components/Tabsitem';
import Jobtex from '../components/Jobtex';
import Employers from '../components/Employers';
import { Helmet} from 'react-helmet-async';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Job | Home</title>
            </Helmet>
            <Banner></Banner>
            <Tabsitem></Tabsitem>
            <Jobtex></Jobtex>
            <Employers></Employers>
        </div>
    );
};

export default Home;
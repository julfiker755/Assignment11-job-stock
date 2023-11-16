import React from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Fooder from '../shared/Fooder';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Fooder></Fooder>
        </div>
    );
};

export default Layout;
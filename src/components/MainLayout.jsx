import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-w-7xl mx-auto'>
            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;
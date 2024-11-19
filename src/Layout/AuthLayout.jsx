import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto text-poppins bg-[#F3F3F3] p-4 '>
            <header>
               <Navbar></Navbar> 
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
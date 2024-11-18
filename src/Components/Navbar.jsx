import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center my-8'>
            <div className="">

            </div>
            <div className="flex items-center gap-4">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="flex items-center gap-2 justify-center">
                <img src={userIcon} alt="" />
                <p className='bg-[#403F3F] text-white px-6 py-2'>Login</p>
            </div>
        </div>
    );
};

export default Navbar;
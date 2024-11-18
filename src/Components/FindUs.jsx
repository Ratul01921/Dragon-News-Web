import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className='my-6'>
            <h1 className='text-xl font-medium my-4'>Find Us On</h1>
            <div className='flex flex-col join join-vertical'>
                <p className='btn w-full join-item justify-start'> <FaFacebookF></FaFacebookF> Facebook</p>
                <p className='btn w-full join-item justify-start'> <FaTwitter></FaTwitter> Twitter</p>
                <p className='btn w-full join-item justify-start'><FaInstagram></FaInstagram> Instagram</p>
            </div>
        </div>
    );
};

export default FindUs;
import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className='text-xl font-medium my-4'>Login With</h1>
            <div className=' space-y-2'>
                <p className='btn w-full'> <FaGoogle></FaGoogle> SingUp with Google</p>
                <p className='btn w-full'><FaGithub></FaGithub> SignUp with GetHub</p>
            </div>
        </div>
    );
};

export default SocialLogin;
import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex  items-center gap-3 bg-[#F3F3F3] py-5 px-6'>
            <p className='bg-[#D72050] px-6 py-2 text-white'>Latest</p>
            <Marquee pauseOnHover={true} speed={100} className='space-x-8'>
                <Link to='/news'
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, id?
                </Link>

                <Link to='/news'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, id?
                </Link>

                <Link to='/news'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, id?
                </Link>

                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, id?</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;
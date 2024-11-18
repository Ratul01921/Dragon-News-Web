import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard';

const CategoryNews = () => {
    const {data:news} = useLoaderData();
    console.log(news);
    return (
        <div>
            <h1 className='text-xl font-medium'>Dragon News Home</h1> 
            <p className='my-2 text-lg'>{news.length} News fount on this category</p>

            <div className='space-y-8'>
                {
                    news.map((singleNews) => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LestNavbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])

    // category_id
    // :
    // "01"
    // category_name
    // :
    // "Breaking News"
    return (
        <div>
            <h1 className='text-xl font-medium'>All Category ({categories.length})</h1>

            <div className='flex flex-col gap-2 my-6'>
                {
                    categories.map((category) => (<NavLink to={`/category/${category.category_id}`} className='btn border-none' key={category.category_id}>{category.category_name}</NavLink>))
                }
            </div>
        </div>
    );
};

export default LestNavbar;
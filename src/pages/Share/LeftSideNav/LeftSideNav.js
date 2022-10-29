import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect( () => {
        fetch('https://dragon-news-server-tan-eight.vercel.app/news-catagories')
        .then(res => res.json())
        .then(data => setCatagories(data))
    }, [])

    return (
        <div>
           <h4>All Catagorys:{catagories.length}</h4>
           {
            catagories.map(catagory => <div key={catagory.id}>
                <Link to= {`/catagory/${catagory.id}`}>{catagory.name}</Link>
            </div>)
           }

        </div>
    );
};

export default LeftSideNav;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Share/NewsSummaryCard/NewsSummaryCard';

const Catagory = () => {
    const catagoryNews = useLoaderData();
    return (
        <div>
            {
                catagoryNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Catagory;
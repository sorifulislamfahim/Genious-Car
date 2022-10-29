import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/UseTitle';
import NewsSummaryCard from '../../Share/NewsSummaryCard/NewsSummaryCard';

const Catagory = () => {
    const catagoryNews = useLoaderData();
    useTitle("Catagory")
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
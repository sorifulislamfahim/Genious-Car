import React, { useState } from 'react';
import { useEffect } from 'react';
import ServicesCart from './ServicesCart';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);

    useEffect( () => {
        fetch(`https://genious-car-server-eight.vercel.app/services?order=${isAsc ? 'asc' : 'desc'}`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [isAsc]); 

    return (
        <div>
            <div className='text-center my-10'>
                <p className='text-2xl text-orange-600 font-bold rounded-lg'>Services</p>
                <h3 className='text-5xl font-semibold my-3'>Our Service Area</h3>
                <p className='text-xl font-semibold'>The majority have suffered alteration in some <br /> form, by injected humour,  or randomised words which don't look even slightly believable.  </p>
                <button className='btn' onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'desc' : 'asc'}</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
                {
                    services.map(service => <ServicesCart
                        key={service._id}
                        service={service}
                    ></ServicesCart>)
                }
            </div>
        </div>
    );
};

export default Services;
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCart = ({service}) => {
    const {title, img, price, _id} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-3 ">
            <figure><img className='h-60' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl">{title}</h2>
                <div className="card-actions justify-end">
                <p className='text-2xl font-semibold text-orange-600'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className='btn btn-primary'>CheckOut</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;
import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import perts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className='w-1/2 relative'>
             <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl" alt=""/>
             <img src={perts} className="absolute w-3/5 right-5 top-2/4 border-emerald-50 border-8 rounded-lg shadow-2xl" alt=""/>
          </div>
          <div className='w-1/2'>
            <p className='text-xl text-orange-600 font-bold my-5'>About Us</p>
            <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
            <p className="py-6 text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p className="py-6 text-gray-400">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            <button className="btn btn-warning">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Chekout = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'Unregistered';
        const message = form.message.value; 

        const order = {
            service: _id, 
            serviceName: title,
            price,
            customar: name, 
            email, 
            phone, 
            message
        }

        fetch('https://genious-car-server-eight.vercel.app/orders', {
            method: 'POST', 
            headers: {
                'content-type' : 'application/json'
            }, 
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Order Placed SuccesFully')
                form.reset();
            }
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <form onSubmit={handlePlaceOrder} className='my-10 bg-orange-100 p-10 rounded-lg'>
                <h2 className='text-3xl text-center'>Our Service Name: {title}</h2>
                <h2 className='text-3xl text-center'>Price: {price}</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full " />
                    <input name='lastName' type="text" placeholder="Sure Name" className="input input-bordered w-full " required/>
                    <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " required/>
                    <input name='email' type="text" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered w-full mb-4 h-24" required placeholder="Your Message"></textarea>
                <input className="btn" type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default Chekout;
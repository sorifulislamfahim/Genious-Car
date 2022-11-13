import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://genious-car-server-eight.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`    
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    logOut();
                }
                return res.json();
            })
            .then(data => {
                setOrders(data)
            })

    }, [user?.email]);

    const handleDelete = id => {
        const procced = window.confirm('Are You Sure, You want to cancle this ordder.')
        
        if (procced) {
            fetch(`https://genious-car-server-eight.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        alert('Order Delet Successfull')
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                })

        }
    }

    const handleStatusUpdate = id => {
        fetch(`https://genious-car-server-eight.vercel.app/orders/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type' : 'application/json'
            }, 
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = orders.filter(odr => odr._id !== id);
                const approving = orders.find(odr => odr._id === id);
                approving.status = 'Approved';

                const newOrder = [approving, ...remaining];
                setOrders(newOrder);
            }
        })
    }

    return (
        <div className='my-16'>
            <h2 className='text-2xl font-bold text-center my-10'>You Have: {orders?.length} Orders</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    Delete
                                </label>
                            </th>
                            <th>Image And Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map(order => <OrderRow
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleStatusUpdate={handleStatusUpdate}
                        ></OrderRow>)}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;
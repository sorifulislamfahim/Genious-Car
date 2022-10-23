// import React, { useEffect, useState } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import RevewItem from '../RevewItem/RevewItem';

const Orders = () => {

    const {products, initialCart} = useLoaderData([]);
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    };
    
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
           <div className='orders-container'>
            {
                cart.map(product => <RevewItem 
                key={product.id}
                product={product}
                handleRemoveItem={handleRemoveItem}
                ></RevewItem>)
            }
            {
                cart.length === 0 && <h1>No Items for Revew <Link to='/shop'>Please Shop more</Link></h1>
            }

           </div>
           <div className='cart-container'>
                <Cart cart={cart} clearCart={clearCart}>
                </Cart>
           </div>
        </div>
    );
};

export default Orders;
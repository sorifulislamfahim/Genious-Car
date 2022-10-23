import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const {cart, clearCart, children} = props;
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charg: ${shipping} </p>
            <p>Tax: {tax}</p>
            <h3>Grand Total: {grandTotal}</h3>
            <button onClick={clearCart} className='clear-cart'>
                <p>Clear Cart</p>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
            <button className='revew-cart'>
                <Link to='/orders'>
                <p>Revew Order</p>
                <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </button>
        </div>
    );
};

export default Cart;
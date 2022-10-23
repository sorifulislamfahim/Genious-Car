import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './RevewItem.css'

const RevewItem = ({product, handleRemoveItem}) => {
    const {id, img, name, price, quantity, shipping} = product;
    return (
        <div className='revew-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="revew-details-container">
                <div className="revew-details">
                    <p className='product-name'>{name}</p>
                    <p><small>Quantity: <span>{quantity}</span> </small></p>
                    <p><small>Price: <span className='special'>${price}</span> </small></p>
                    <p><small>Shiping Charge: <span className='special'>${shipping}</span> </small></p>
                </div>
                <div className="delate-container">
                    <button onClick={() => handleRemoveItem(id)} className='delate-button'>
                        <FontAwesomeIcon className='delate-icon' icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RevewItem;
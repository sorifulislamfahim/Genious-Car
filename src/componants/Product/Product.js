import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {name, img, seller, price, ratings} = product;
    
    // const {handleAddToCart} = props
    // console.log(props)
    return (
        <div className='product'>
            <img src={img} alt=""></img>
           <div className='product-info'>
                <h2 className='product-name'>{name}</h2>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings} stars</p>
           </div>
           <button onClick={ () => handleAddToCart(product)} className='btn-cart'>
            <p>Add To Cart</p>
            <p><FontAwesomeIcon icon={faShoppingCart} /></p>
           </button>
        </div>
    );
};

export default Product;
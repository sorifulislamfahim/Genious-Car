import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <nav className='text-center m-3'>
                <Link to='/login' className='me-5'>Log In</Link>
                <Link to='register'>Register</Link>
            </nav> 
        </div>
    );
};

export default Header;
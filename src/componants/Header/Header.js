import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    const {user, logOut} = useContext(AuthContext); 
    return (
        <nav className='header'>
            <Link to="/"><img src={logo} alt=""/></Link>
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Manage Inbentory</Link>
                <Link to="/about">About</Link>
                { user?.uid ? 
                    <Link onClick={logOut}>Log Out</Link> :
                    <>
                    <Link to='/login'>Log In</Link>
                    <Link to='/signup'>Sign Up</Link>
                    </>
                    }

            </div>
        </nav>
    );
};

export default Header;
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './LogIn.css'

const LogIn = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/shop');
        })
        .catch(error => console.error(error))
    }
    return (
        <div className='from-container'>
            <h2 className='from-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="from-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='enter your email' required />
                </div>
                <div className="from-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='enter your password' required />
                </div>
                <input className='btn-login' type="submit" value="Login" />
                <p className='external'>New to Ema-john?<Link to='/signup'> Create New Account</Link></p>
            </form>
        </div>
    );
};

export default LogIn;
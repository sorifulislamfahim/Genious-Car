import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './SignUp.css'

const SignUp = () => {
    const [error, setError] = useState(null);

    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;


        if(password.length < 6){
            setError('Password shuld be 6 charecters or more.')
            return;
        }
        if(password !== confirm) {
            setError('Your Password Didnot match');
            return;
        }
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/login')
        })
        .catch(error => console.error('error', error))
    }
    return (
        <div className='from-container'>
            <h2 className='from-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="from-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='enter your email' required />
                </div>
                <div className="from-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='enter your password' required />
                </div>
                <div className="from-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" placeholder='confirm your password' required />
                </div>
                <p className='text-error'>{error}</p>
                <input className='btn-login' type="submit" value="Sign Up" />
                <p className='external'>Alredy have an acount?<Link to='/login'> Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;
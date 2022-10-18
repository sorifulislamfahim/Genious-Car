import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateCurrentUser, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app)

const RegisterReactBts = () => {
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false)

    const handleRegister = event => {
        event.preventDefault();
        setSuccess(false)

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setPasswordError('Please Provide At least two uppercase')
            return;
        }
        if(password.length < 6){
            setPasswordError('Please shuld be at least 6 carecter')
            return;
        }
        if(!/(?=.*[!@#$%&*])/.test(password)){
            setPasswordError('Please add at least one special charecter (!/@/#/$/%/&)')
            return;
        }
        setPasswordError('');

        createUserWithEmailAndPassword(auth, email, password)
        .then( result => {
            const user = result.user;
            console.log(user)
            setSuccess(true)
            form.reset();
            verifyEmail();
            updateEmail(name);
        })
        .catch(error => {
            console.error('error:', error)
            setPasswordError(error.message)
        })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            alert('Please Chak Your Email and veryfy email address.')
        })
    }

    const updateEmail = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
        .then( () => {
            console.log('display name updated')
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-warning'>Please Register Now !!! </h1>
            <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Your Full Name" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required/>
            </Form.Group>
            <p className='text-danger'>{passwordError}</p>
            {success && <p className='text-success'>User Created SuccesFully</p>}
            <Button variant="primary" type="submit">
                Register
            </Button>
    </Form>
     <p><small>Alredy have an acount please <Link to='/login'>Log In</Link></small></p>
        </div>
    );
};

export default RegisterReactBts;
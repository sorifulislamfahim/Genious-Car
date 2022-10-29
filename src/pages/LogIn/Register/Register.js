import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/UseTitle';

const Register = () => {
    const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext);
    const [error, setError] = useState();
    const [acepted, setAcepted] = useState(false);
    const navigate = useNavigate();
    useTitle("Register")


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
            setError('')
            navigate("/login")
            handleUpdateUserProfile(name, photoURL);
            handleEmailVeryfication();
            toast.success('Please Verify Your Email!');
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
    }

    const handleAcepted = event => {
        setAcepted(event.target.checked)
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile ={
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => {
            console.error(error)
        })
    };

    const handleEmailVeryfication = () => {
        verifyEmail()
        .then( () => {})
        .catch(error => console.error(error))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter Your Name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Enter photo url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                type="checkbox" 
                onClick={handleAcepted}
                label={<>Acept Our <Link to='/terms'>Condition</Link> </>} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!acepted}>
                Register
            </Button>
        </Form>
    );
};

export default Register;
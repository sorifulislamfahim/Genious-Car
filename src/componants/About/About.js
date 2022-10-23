import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const About = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1>About This Page</h1>
            <h2>Its Update to soon</h2>
            <p>{user?.email}</p>
        </div>
    );
};

export default About;
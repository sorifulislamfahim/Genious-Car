import React from 'react';

const Register = () => {
    return (
        <div>
            <form onSubmit={handleRegister}>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder="Enter Your Email"/>
                <br />
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder="Enter Your Pasward" />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
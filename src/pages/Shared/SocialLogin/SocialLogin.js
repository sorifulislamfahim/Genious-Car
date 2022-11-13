import React from 'react';
import { useContext } from 'react';
import { setAuthToken } from '../../../Api/Auth';
import { AuthContext } from '../../../Contexts/AuthProvider';

const SocialLogin = () => {
    const {googleSignin} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignin()
        .then(result => {
            const user = result.user;
            console.log(user);
            setAuthToken(user);
        })
        .catch(error => console.error(error));
    }

    return (
        <div className='text-center mb-5'>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning w-3/4">Login with Google</button>
        </div>
    );
};

export default SocialLogin;
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <h1 className='text-3xl text-center font-mono'>Loading.......</h1>
    }

    if(user){
        return children;
    }
    
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;
import React from 'react';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
    return (
        <div>
            <h3>Here is Our Terms and condition</h3>
            <p>Go Back to: <Link to="/register">Go Back To register</Link></p>
        </div>
    );
};

export default TermsCondition;
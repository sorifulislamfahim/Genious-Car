import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const LogInBtsp = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        setSuccess(false)

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setSuccess(true);
        })
        .catch(error => {
            console.error('error', error)
        })
    }

    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
    }

    const handleForgetPasssword = () =>{
        if(!userEmail){
            alert('Please Enter Your Email Address')
        }
        sendPasswordResetEmail(auth, userEmail)
        .then(() => {
            alert('PassWord Resent Email sent. please chak your email. ')
        })
        .catch(error => {
            console.error(error);
        })
    }
    
    return (
        <div className='w-50 mx-auto'>
        <h3 className='text-success'>Please Log In</h3>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                <input onBlur={handleEmailBlur} type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Enter Your Email" required />
                </div>
                <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">PassWord</label>
                <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Enter Your Password" required/>
            </div>
            { success && <p>Successfully login the acoount</p> }
            <button className="btn btn-primary" type="submit">Log In</button>
            <p>Forget Password<button type="button" onClick={handleForgetPasssword} className="btn btn-link">Reset</button></p>
        </form>
        <p><small>New to this website please <Link to='/register'>Register</Link></small></p>
        </div>
    );
};

export default LogInBtsp;
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Google, Apple } from '@mui/icons-material';
import './pstyles/CreateAccountPageView.scss';

const CreateAccountPageView = () => {
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const phone = e.target['phone-number'].value;
        const password = e.target.password.value;
        const cpassword = e.target.cpassword.value;

        if (password !== cpassword) {
            alert("Passwords do not match");
            return;
        }

        const user = { email, phone, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert("Account created! Please log in.");
        navigate('/login');
    };

    return (
        <div className='container'>
            <div className='logo'>
                <span className='logo-char'>आ</span>
                <span className='logo-char'>P</span>
                <span className='logo-char'>A</span>
                <span className='logo-char'>S</span>
                <p className='logo-decribe'>Stay Close, No Matter the Distance.</p>
            </div>

            <div className='login-container'>
                <div className="heading">Sign Up</div>
                <form className="form" onSubmit={handleSignUp}>
                    <input required className="input" type="email" name="email" placeholder="E-mail" />
                    <input required className="input" type="number" name="phone-number" placeholder="Phone Number" />
                    <input required className="input" type="password" name="password" placeholder="Password" />
                    <input required className="input" type="password" name="cpassword" placeholder="Confirm Password" />
                    <input className="login-button" type="submit" value="Sign Up" />
                </form>

                <div className="social-account-container">
                    <span className="title">Or Sign in with</span>
                    <div className="social-accounts">
                        <button className="social-button google"><Google /></button>
                        <button className="social-button apple"><Apple /></button>
                    </div>
                </div>
                <span className="agreement"><a href="#">Learn user license agreement</a></span>
            </div>
        </div>
    );
};

export default CreateAccountPageView;

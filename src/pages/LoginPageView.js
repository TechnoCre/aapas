import React, { useState } from 'react';
import { Google, Apple } from '@mui/icons-material';
import './pstyles/LoginPageView.scss';

const LoginPageView = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Login successful!');
                localStorage.setItem('token', data.token); // Store JWT token in localStorage
            } else {
                setMessage(data.message || 'Error logging in.');
            }
        } catch (error) {
            setMessage('Error logging in.');
        }
    };

    return (
        <div className='container'>
            {/* Logo Section */}
            <div className='logo' alt='Logo'>
                <span className='logo-char'>आ</span>
                <span className='logo-char'>P</span>
                <span className='logo-char'>A</span>
                <span className='logo-char'>S</span>
                <p className='logo-decribe'>Stay Close, No Matter the Distance.</p>
            </div>

            {/* Login Form */}
            <div className='login-container'>
                <div className="heading">Sign In</div>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        required
                        className="input"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        required
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <span className="forgot-password"><a href="#">Forgot Password?</a></span>
                    <input className="login-button" type="submit" value="Sign In" />
                </form>

                {/* Display Message */}
                {message && <p className="message">{message}</p>}

                {/* Social Sign-In */}
                <div className="social-account-container">
                    <span className="title">Or Sign in with</span>
                    <div className="social-accounts">
                        <button className="social-button google">
                            <Google />
                        </button>
                        <button className="social-button apple">
                            <Apple />
                        </button>
                    </div>
                </div>
                <span className="agreement"><a href="#">Learn user license agreement</a></span>
            </div>
        </div>
    );
};

export default LoginPageView;

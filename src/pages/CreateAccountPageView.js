<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './pstyles/CreateAccountPageView.scss';

const CreateAccountPageView = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        password: '',
        cpassword: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData); // Debugging

        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('User registered successfully');
            } else {
                setMessage(data.message || 'Registration failed');
            }
        } catch (error) {
            setMessage('Failed to connect to the server: ' + error.message);
=======
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Google, Apple } from '@mui/icons-material';
import './pstyles/CreateAccountPageView.scss';

const CreateAccountPageView = () => {
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
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

        try {
            // Send user data to the backend
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Account created successfully! Please log in to continue.");
                navigate('/login'); // Redirect to login page
            } else {
                alert(data.message || "Failed to create account. Please try again.");
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert("An error occurred. Please try again later.");
>>>>>>> rahul
        }
    };

    return (
<<<<<<< HEAD
        <div className="container">
            <div className="logo">
                <span className="logo-char">आ</span>
                <span className="logo-char">P</span>
                <span className="logo-char">A</span>
                <span className="logo-char">S</span>
                <p className="logo-decribe">Stay Close, No Matter the Distance.</p>
=======
        <div className='container'>
            <div className='logo'>
                <span className='logo-char'>आ</span>
                <span className='logo-char'>P</span>
                <span className='logo-char'>A</span>
                <span className='logo-char'>S</span>
                <p className='logo-decribe'>Stay Close, No Matter the Distance.</p>
>>>>>>> rahul
            </div>

            <div className="login-container">
                <div className="heading">Sign Up</div>
<<<<<<< HEAD
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        required
                        className="input"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
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
                        type="number"
                        name="phone_number"
                        placeholder="Phone Number"
                        value={formData.phone_number}
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
                    <input
                        required
                        className="input"
                        type="password"
                        name="cpassword"
                        placeholder="Confirm Password"
                        value={formData.cpassword}
                        onChange={handleChange}
                    />
                    <input className="login-button" type="submit" value="Sign Up" />
                </form>
                {message && <p>{message}</p>}
                <p className="switch-page">
                    Already have an account? <Link to="/login">Sign In</Link>
                </p>
=======
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
>>>>>>> rahul
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default CreateAccountPageView;
=======
export default CreateAccountPageView;
>>>>>>> rahul

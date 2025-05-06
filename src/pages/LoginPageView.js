import React, { useEffect } from 'react';
import { Google, Apple } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import './pstyles/LoginPageView.scss';

const LoginPageView = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            navigate('/home'); // Redirect to home if already logged in
        }
    }, [navigate]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(data.user)); // Save user session

                // Check if user details exist
                const detailsResponse = await fetch(`http://localhost:5000/api/users/exists/${email}`);
                const detailsData = await detailsResponse.json();

                if (detailsData.exists) {
                    alert("Login successful!");
                    navigate('/home'); // Redirect to home if details exist
                } else {
                    alert("Login successful! Please complete your profile.");
                    navigate('/users-details'); // Redirect to UsersDetailsForm if details do not exist
                }
            } else {
                alert(data.message || "Invalid credentials!");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="container">
            <div className="logo">
                <span className="logo-char">आ</span>
                <span className="logo-char">P</span>
                <span className="logo-char">A</span>
                <span className="logo-char">S</span>
                <p className="logo-decribe">Stay Close, No Matter the Distance.</p>
            </div>

            <div className="login-container">
                <div className="heading">Sign In</div>
                <form className="form" onSubmit={handleFormSubmit}>
                    <input required className="input" type="email" name="email" placeholder="E-mail" />
                    <input required className="input" type="password" name="password" placeholder="Password" />
                    <span className="forgot-password"><a href="/forgot-password">Forgot Password?</a></span>
                    <input className="login-button" type="submit" value="Sign In" />
                </form>

                <div className="social-account-container">
                    <span className="title">Or Sign in with</span>
                    <div className="social-accounts">
                        <button className="social-button google"><Google /></button>
                        <button className="social-button apple"><Apple /></button>
                    </div>
                </div>

                <div className="create-account-link">
                    <span>Don't have an account? <Link to="/create-account">Create one here</Link></span>
                </div>

                <span className="agreement"><a href="/user-license-agreement">Learn user license agreement</a></span>
            </div>
        </div>
    );
};

export default LoginPageView;

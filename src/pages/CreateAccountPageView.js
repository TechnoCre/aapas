import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './pstyles/CreateAccountPageView.scss';

const CreateAccountPageView = () => {
    return (
        <div className="container">
            {/* Logo Section */}
            <div className="logo">
                <span className="logo-char">आ</span>
                <span className="logo-char">P</span>
                <span className="logo-char">A</span>
                <span className="logo-char">S</span>
                <p className="logo-decribe">Stay Close, No Matter the Distance.</p>
            </div>

            {/* Sign-Up Form */}
            <div className="login-container">
                <div className="heading">Sign Up</div>
                <form className="form">
                    <input
                        required
                        className="input"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                    />
                    <input
                        required
                        className="input"
                        type="number"
                        name="phone_number"
                        placeholder="Phone Number"
                    />
                    <input
                        required
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <input
                        required
                        className="input"
                        type="password"
                        name="cpassword"
                        placeholder="Confirm Password"
                    />
                    <input className="login-button" type="submit" value="Sign Up" />
                </form>

                {/* Link to Login Page */}
                <p className="switch-page">
                    Already have an account? <Link to="/login">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default CreateAccountPageView;
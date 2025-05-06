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

        if (formData.password !== formData.cpassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone_number, // Match backend field
                    password: formData.password,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('User registered successfully');
            } else {
                setMessage(data.message || 'Registration failed');
            }
        } catch (error) {
            setMessage('Failed to connect to the server: ' + error.message);
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
                <div className="heading">Sign Up</div>
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
            </div>
        </div>
    );
};

export default CreateAccountPageView;

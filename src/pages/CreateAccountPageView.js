import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './pstyles/CreateAccountPageView.scss';

const CreateAccountPageView = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone_number: '',
        password: '',
        cpassword: '',
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        // Validate input fields
        if (!formData.email || !formData.phone_number || !formData.password || !formData.cpassword) {
            setError('All fields are required.');
            return;
        }

        if (formData.password !== formData.cpassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('User registered successfully!');
                setFormData({ email: '', phone_number: '', password: '', cpassword: '' });
            } else {
                setError(data.message || 'Error registering user.');
            }
        } catch (error) {
            setError('Error registering user.');
        }
    };

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

                {/* Display Success or Error Message */}
                {message && <p className="message success">{message}</p>}
                {error && <p className="message error">{error}</p>}

                {/* Link to Login Page */}
                <p className="switch-page">
                    Already have an account? <Link to="/login">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default CreateAccountPageView;

import React, { useState } from 'react';
import { Google, Apple } from '@mui/icons-material';
import './pstyles/CreateAccountPageView.scss';

const CreateAccountPageView = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone_number: '',
        password: '',
        cpassword: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.text();
            if (response.ok) {
                setMessage('User registered successfully!');
                setFormData({ email: '', phone_number: '', password: '', cpassword: '' });
            } else {
                setMessage(data);
            }
        } catch (error) {
            setMessage('Error registering user.');
        }
    };

    return (
        <div className='container'>
            {/* Logo Section */}
            <div className='logo' aria-label='Logo'>
                <span className='logo-char'>आ</span>
                <span className='logo-char'>P</span>
                <span className='logo-char'>A</span>
                <span className='logo-char'>S</span>
                <p className='logo-decribe'>Stay Close, No Matter the Distance.</p>
            </div>

            {/* Sign-Up Form */}
            <div className='login-container'>
                <div className="heading">Sign Up</div>
<<<<<<< HEAD
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
=======
                <form action="" className="form">
                    <input required className="input" type="email" name="email" id="email" placeholder="E-mail" />
                    <input required className="input" type="number" name="phone_number" id="phone-number" placeholder="Phone Number" />
                    {/* <input required className="input" type="date" name="dob" id="dob" placeholder="Date of Birth" /> */}
                    <input required className="input" type="password" name="password" id="password" placeholder="Password" />
                    <input required className="input" type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" />
>>>>>>> moksh
                    <input className="login-button" type="submit" value="Sign Up" />
                </form>
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

export default CreateAccountPageView;

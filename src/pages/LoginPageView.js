import React from 'react'
import { Google, Apple } from '@mui/icons-material';
import './pstyles/LoginPageView.scss';

const LoginPageView = () => {
    return (
        <div className='container'>
            <div className='logo' alt='Logo'>
                <span className='logo-char'>आ</span>
                <span className='logo-char'>P</span>
                <span className='logo-char'>A</span>
                <span className='logo-char'>S</span>
                <p className='logo-decribe'>Stay Close, No Matter the Distance.</p>
            </div>

            <div className='login-container'>
                <div className="heading">Sign In</div>
                <form action="" className="form">
                    <input required="" className="input" type="email" name="email" id="email" placeholder="E-mail" />
                    <input required="" className="input" type="password" name="password" id="password" placeholder="Password" />
                    <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
                    <input className="login-button" type="submit" value="Sign In" />
                </form>

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
                <span className="agreement"><a href="#">Learn user licence agreement</a></span>
            </div>
        </div>
    )
}

export default LoginPageView

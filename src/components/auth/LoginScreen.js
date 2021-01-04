import React from "react";
import {Link} from "react-router-dom";

export const LoginScreen = () => {
    return (
        <>
            <h3 className={'auth_title'}>Login</h3>
            <form action="">
                <input
                    className={'auth_input'}
                    type="text"
                    placeholder={'Email'}
                    name={'email'}
                />
                <input
                    className={'auth_input'}
                    type="password"
                    placeholder={'Password'}
                    name={'password'}
                    autoComplete={'off'}
                />
                <button
                    className={'btn btn-primary btn-block'}
                    type={'submit'}
                >
                    login
                </button>
                <div className={'auth_social-networks'}>
                    <p>login with Social networks</p>
                    <div
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link
                    to={'/auth/register'}
                    className={'link'}
                >
                    Create new account
                </Link>
            </form>
        </>
    )
}
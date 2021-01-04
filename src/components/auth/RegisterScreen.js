import React from "react";
import {Link} from "react-router-dom";

export const RegisterScreen = () => {
    return (
        <>
            <>
                <h3 className={'auth_title'}>Register</h3>
                <form action="">
                    <input
                        className={'auth_input'}
                        type="text"
                        placeholder={'Name'}
                        name={'name'}
                        autoComplete={'off'}
                    />
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

                    <input
                        className={'auth_input'}
                        type="password"
                        placeholder={'Confirm Password'}
                        name={'password2'}
                        autoComplete={'off'}
                    />

                    <button
                        className={'btn btn-primary btn-block'}
                        type={'submit'}
                    >
                        Register
                    </button>
                        <Link
                            to={'/auth/login'}
                            className={'link'}
                        >
                            Already Register?
                        </Link>
                </form>
            </>
        </>
    )
}
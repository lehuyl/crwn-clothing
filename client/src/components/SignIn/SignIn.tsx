import React, { Dispatch, useState } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import {
    emailSignInStart,
    googleSignInStart,
} from '../../redux/User/UserAction';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import './SignIn.scss';

interface Props {
    googleSignInStart: Dispatch<Action>;
    emailSignInStart: any;
}

const SignIn = ({ emailSignInStart, googleSignInStart }: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();

        emailSignInStart(email, password);
    };

    return (
        <div className="sign-in">
            <h2 className="text-2xl font-semibold text-gray-700 my-2">
                I already have an account.
            </h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    handleChange={(e: any) => setEmail(e.target.value)}
                    value={email}
                    label="Email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={(e: any) => setPassword(e.target.value)}
                    label="Password"
                    required
                />
                <div className="flex justify-between">
                    <CustomButton type="submit"> Sign in </CustomButton>
                    <CustomButton
                        type="button"
                        onClick={googleSignInStart}
                        isGoogleSignIn
                    >
                        {' '}
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email: string, password: string) =>
        dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);

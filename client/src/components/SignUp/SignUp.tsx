import React, { Dispatch, useState } from 'react';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/User/UserAction';
import { SignUpDto } from '../../redux/User/UserDto';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import './SignUp.scss';

interface Props {
    signUpStart: Dispatch<any>;
}

const SignUp = ({ signUpStart }: Props) => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart({ displayName, email, password });
    };

    return (
        <div className="sign-up">
            <h2 className="text-2xl font-semibold text-gray-700 my-2">
                I do not have an account
            </h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={(e: {
                        target: { value: React.SetStateAction<string> };
                    }) => setDisplayName(e.target.value)}
                    label="Display Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e: {
                        target: { value: React.SetStateAction<string> };
                    }) => setEmail(e.target.value)}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e: {
                        target: { value: React.SetStateAction<string> };
                    }) => setPassword(e.target.value)}
                    label="Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e: {
                        target: { value: React.SetStateAction<string> };
                    }) => setConfirmPassword(e.target.value)}
                    label="Confirm Password"
                    required
                />

                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    signUpStart: (signUpDto: SignUpDto) => dispatch(signUpStart(signUpDto)),
});

export default connect(null, mapDispatchToProps)(SignUp);

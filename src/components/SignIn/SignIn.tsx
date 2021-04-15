import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import './SignIn.scss';

interface SignInState {
    email: string;
    password: string;
}

class SignIn extends React.Component<{}, SignInState> {
    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    };

    handleChange = (event: any) => {
        const { value, name } = event.target;
        // @ts-ignore
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2 className="text-2xl font-semibold text-gray-700 my-2">
                    I already have an account.
                </h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <div className="flex justify-between">
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;

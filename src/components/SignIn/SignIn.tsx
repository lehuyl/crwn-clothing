import React, { Dispatch } from 'react';
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

interface SignInState {
    email: string;
    password: string;
}

class SignIn extends React.Component<Props, SignInState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    };

    handleChange = (event: any) => {
        const { value, name } = event.target;
        // @ts-ignore
        this.setState({ [name]: value });
    };

    render() {
        const { googleSignInStart } = this.props;

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
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email: string, password: string) =>
        dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);

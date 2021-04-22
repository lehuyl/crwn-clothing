import React from 'react';
import './CustomButton.scss';

const CustomButton = ({
    children,
    isGoogleSignIn,
    inverted,
    ...otherProps
}: any) => (
    <button
        type="submit"
        className={`${inverted ? 'inverted' : ''} ${
            isGoogleSignIn ? 'google-sign-in' : ''
        } custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);
export default CustomButton;

import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }: any) => (
    <button type="submit" className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)
export default CustomButton;
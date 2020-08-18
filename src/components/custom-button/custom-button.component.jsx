import React from 'react';

import './custom-button.styles.scss'

// stateless
// children are for multiple uses, eg sign in out, to be resuable

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button 
        className={`
            ${inverted ? 'inverted' : ''}
            ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
            { ...otherProps}
        > 
        {children} 
    </button>
);

export default CustomButton;
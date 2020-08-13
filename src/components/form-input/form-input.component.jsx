import React from 'react';
import './form-input.styles.scss'

// no state on this function
// otherprops from the form created in the sign-in component
const FormInput = ({ handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {/* REVISITTT */}
        {label ? (
            <label className={`${
                otherProps.value.length ? 'shrink' : ''
                } form-input-label` }
            >
                {label}
            </label> )
            : null 
        }
    </div>
);

export default FormInput;
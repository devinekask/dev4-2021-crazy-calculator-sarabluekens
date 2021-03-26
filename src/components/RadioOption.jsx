import React from 'react';

const RadioOption = ({value, description, onRadioChange, index}) => {
    return (  
        <>
            <input type="radio" id={value} name="fear" value={index} onChange={(e) => onRadioChange(e.target.value) }/>
            <label htmlFor={value}>{description}</label><br/>
        </>
    );
}
 
export default RadioOption;
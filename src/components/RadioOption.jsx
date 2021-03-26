import React from 'react';

const RadioOption = ({value, description, onRadioChange}) => {
    return (  
        <>
            <input type="radio" id={value} name="fear" value={description} onChange={(e) => onRadioChange(e.target.value) }/>
            <label htmlFor={value}>{description}</label><br/>
        </>
    );
}
 
export default RadioOption;
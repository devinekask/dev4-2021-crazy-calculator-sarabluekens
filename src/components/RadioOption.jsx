import React from 'react';

const RadioOption = ({value, description}) => {
    return (  
        <>
            <input type="radio" id={value} name="fear" value={value}/>
            <label htmlFor={value}>{description}</label><br/>
        </>
    );
}
 
export default RadioOption;
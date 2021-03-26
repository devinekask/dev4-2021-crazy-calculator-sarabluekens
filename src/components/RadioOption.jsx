import React from 'react';
import PropTypes from "prop-types";


const RadioOption = ({description, onRadioChange, index}) => {
    return (  
        <>
            <input type="radio" id={index} name="fear" value={index} onChange={(e) => onRadioChange(e.target.value) }/>
            <label htmlFor={index}>{description}</label><br/>
        </>
    );
}
 
RadioOption.propTypes = {
    description : PropTypes.string.isRequired,
    onRadioChange : PropTypes.func.isRequired,
    index : PropTypes.number.isRequired
}
export default RadioOption;
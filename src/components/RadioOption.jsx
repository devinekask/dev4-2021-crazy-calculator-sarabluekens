import React from 'react';
import PropTypes from "prop-types";
import styles from "./Radio.module.css";

const RadioOption = ({description, onRadioChange, index}) => {
    return (  
        <>
            <input type="radio" id={index} name="fear" value={index} onChange={(e) => onRadioChange(e.target.value) }/>
            <label className ={styles.formLabel} htmlFor={index}>{description}</label><br/>
        </>
    );
}
 
RadioOption.propTypes = {
    description : PropTypes.string.isRequired,
    onRadioChange : PropTypes.func.isRequired,
    index : PropTypes.number.isRequired
}
export default RadioOption;
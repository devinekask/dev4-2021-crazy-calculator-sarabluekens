import React from 'react';
import PropTypes from "prop-types";
import styles from "./Slider.module.css";

const Slider = ({ value, onNumberChange}) => {
    return (  
        <div className ={styles.formItem}>
            <label htmlFor="number" >What is your unluckiest number?</label> <br/>
            <input type="range" min="0" max="99" value={value} onChange={(e) => onNumberChange(e.target.value) } />
            <span className ={styles.formLabel}>{value}</span>
            <br/>
        </div>

    );
}
 
Slider.propTypes = {
    value : PropTypes.number.isRequired,
    onNumberChange : PropTypes.func.isRequired
}
export default Slider;
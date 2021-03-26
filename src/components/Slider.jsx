import React from 'react';
import PropTypes from "prop-types";


const Slider = ({ value, onNumberChange}) => {
    return (  
        <>
            <label htmlFor="number">What is your unluckiest number?</label>
            <input type="range" min="0" max="99" value={value} onChange={(e) => onNumberChange(e.target.value) } />
            <p>{value}</p>
        </>

    );
}
 
Slider.propTypes = {
    value : PropTypes.number.isRequired,
    onNumberChange : PropTypes.func.isRequired
}
export default Slider;
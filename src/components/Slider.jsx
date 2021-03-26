import React from 'react';

const Slider = ({ value, onNumberChange}) => {
    return (  
        <>
            <label htmlFor="number">What is your unluckiest number?</label>
            <input type="range" min="0" max="99" value={value} onChange={(e) => onNumberChange(e.target.value) } />
            <p>{value}</p>
        </>

    );
}
 
export default Slider;
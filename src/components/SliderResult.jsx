import React from 'react';
import PropTypes from "prop-types";


const SliderResult = ({age, title, number}) => {
    return ( 
        <> 
            <h3>{title}</h3>
            <p>You will die at the age of: {age} {age < 2 ? "year" : "years"} {number === 66 && "😈"}. </p>
        </>
    );
}
SliderResult.propTypes = {
    age : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    number : PropTypes.number.isRequired
}
export default SliderResult;
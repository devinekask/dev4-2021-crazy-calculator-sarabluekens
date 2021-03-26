import React from 'react';
import PropTypes from "prop-types";


const TextResult = ({name}) => {
    return (  
        <h2> Hello there, {name} </h2>
    );
}

TextResult.propTypes = {
    name : PropTypes.string.isRequired
}
 
export default TextResult;
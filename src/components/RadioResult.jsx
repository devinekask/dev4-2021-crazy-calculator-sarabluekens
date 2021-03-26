import React from 'react';
import PropTypes from "prop-types";


const RadioResult = ({locationIndex, locations}) => {
    return (  
        <>
            <p>You will die at {locations[locationIndex]}</p>
           
        </>
    );
}
 
RadioResult.propTypes = {
    locationIndex : PropTypes.string,
    locations : PropTypes.array.isRequired
}
export default RadioResult;
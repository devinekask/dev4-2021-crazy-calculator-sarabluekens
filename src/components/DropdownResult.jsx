import React from 'react';
import PropTypes from "prop-types";

const DropdownResult = ({ways, index}) => {
    return (  
        <>
        <p> YOU WILL DIE BECAUSE {ways[index]}</p>
        </>
    );
}
 
DropdownResult.propTypes = {
    ways : PropTypes.array.isRequired,
    index : PropTypes.number.isRequired
}

export default DropdownResult;
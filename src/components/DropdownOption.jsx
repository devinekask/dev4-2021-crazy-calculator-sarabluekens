import React from 'react';
import PropTypes from "prop-types";


const DropdownOption = ({points, description}) => {
    return ( 
        <option value={points}>{description} </option>
     );
}
 
DropdownOption.propTypes = {
    points : PropTypes.number.isRequired,
    description : PropTypes.string.isRequired
  
}
export default DropdownOption;
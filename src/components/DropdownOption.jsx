import React from 'react';

const DropdownOption = ({points, description}) => {
    return ( 
        <option value={points}>{description}</option>
     );
}
 
export default DropdownOption;
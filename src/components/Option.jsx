import React from 'react';

const Option = ({item, description, url}) => {
    return ( 
        <option value={item}> <img src={url}  alt={description} width="54" height="auto" />{description}</option>
     );
}
 
export default Option;
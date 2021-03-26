import React from 'react';

const DropdownResult = ({points, location}) => {
    return (  
        <>
        <p>Your score = {points}</p>
        <p>You die at {location}</p>
        </>
    );
}
 
export default DropdownResult;
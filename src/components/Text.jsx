import React from 'react';

const Text = ({value, onNameChange}) => {
    return (  
        <>
            <label>Name: </label>
            <input  type="text" id="name" value={value} onChange={(e) => onNameChange(e.target.value)} placeholder="First Name"   />
        </>
    );
}
 
export default Text;
import React from 'react';
import PropTypes from "prop-types";


const Text = ({value, onNameChange}) => {
    return (  
        <>
            <label>Name: </label>
            <input  type="text" id="name" value={value} onChange={(e) => onNameChange(e.target.value)} placeholder="First Name"   />
        </>
    );
}
Text.propTypes = {
    value : PropTypes.string.isRequired,
    onNameChange : PropTypes.func.isRequired
}
export default Text;
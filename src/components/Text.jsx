import React from 'react';
import PropTypes from "prop-types";
import styles from "./Text.module.css";

const Text = ({value, onNameChange}) => {
    return (  
        <div className ={styles.formItem}>
            <label className ={styles.formLabel}>Name: </label>
            <input   type="text" id="name" value={value} onChange={(e) => onNameChange(e.target.value)} placeholder="First Name"   />
            <br/>
        </div>
    );
}
Text.propTypes = {
    value : PropTypes.string.isRequired,
    onNameChange : PropTypes.func.isRequired
}
export default Text;
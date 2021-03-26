import React from 'react';
import PropTypes from "prop-types";
import styles from "./Dropdown.module.css";

const DropdownResult = ({ways, index, title}) => {
    return (  
        <>
        <h3 className ={styles.formLabel}>{title}</h3>
        <p className={styles.output}>  {ways[index]}</p>
        </>
    );
}
 
DropdownResult.propTypes = {
    ways : PropTypes.array.isRequired,
    title : PropTypes.string.isRequired,
    index : PropTypes.number.isRequired
}

export default DropdownResult;
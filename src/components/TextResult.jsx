import React from 'react';
import PropTypes from "prop-types";
import styles from "./Text.module.css";


const TextResult = ({name}) => {
    return (  
        <h2 className ={styles.formLabel} className ={styles.output}> <span className={styles.span}> ✞   </span  > {name} </h2>
    );
}

TextResult.propTypes = {
    name : PropTypes.string.isRequired
}
 
export default TextResult;
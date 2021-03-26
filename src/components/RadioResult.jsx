import React from 'react';
import PropTypes from "prop-types";
import styles from "./Radio.module.css";

const RadioResult = ({locationIndex, locations, title}) => {
    return (  
        <>
        <h3>{title}</h3>
        <p className={styles.output}> In {locations[locationIndex]}</p>
           
        </>
    );
}
 
RadioResult.propTypes = {
    locationIndex : PropTypes.string,
    title : PropTypes.string.isRequired,
    locations : PropTypes.array.isRequired
}
export default RadioResult;
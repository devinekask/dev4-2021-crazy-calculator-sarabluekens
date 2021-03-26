import React from 'react';
import PropTypes from "prop-types";

import styles from "./Slider.module.css";

const SliderResult = ({age, title, number}) => {
    return ( 
        <> 
            <h3>{title}</h3>
            <span className={styles.output}>Died at {age} {age < 2 ? "year" : "years"} {number === 66 && "😈"}old. </span>
        </>
    );
}
SliderResult.propTypes = {
    age : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    number : PropTypes.number.isRequired
}
export default SliderResult;
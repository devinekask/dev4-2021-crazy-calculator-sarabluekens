import React from 'react';
import DropdownOption from './DropdownOption';
import PropTypes from "prop-types";
import styles from "./Text.module.css";


const Dropdown = ({label, list, type, value, onDropdownChange}) => {
    return (  
        <>
            
            <label htmlFor={type}  className ={styles.formLabel}> {label} </label>
                <select name={type} id={type} value={value} onChange={(e) => onDropdownChange(e.target.value) }>
                    {list.map(item => 
                        <DropdownOption key={item.points} points={item.points} description={item.description} />)}
                </select>


        </>
    );
}

Dropdown.propTypes = {
    label : PropTypes.string.isRequired,
    list : PropTypes.array.isRequired,
    type : PropTypes.string.isRequired,
    value : PropTypes.number.isRequired,
    onDropdownChange : PropTypes.func.isRequired
}
export default Dropdown;



import React from 'react';
import RadioOption from './RadioOption';
import PropTypes from "prop-types";
import styles from "./Radio.module.css";


const Radio = ({list, onRadioChange}) => {
    return (  
        <div className ={styles.formItem}>
        <label htmlFor="fear" > True horror: select your biggest fear</label> <br/>
           {list.map(item => 
                <RadioOption key={item.index} label={item.label}  index={item.index} description={item.description} onRadioChange={onRadioChange}/>

            )}
        
        </div>
    );
}
Radio.propTypes = {
    list : PropTypes.array.isRequired,
    value : PropTypes.string,
    onRadioChange : PropTypes.func.isRequired
}
export default Radio;
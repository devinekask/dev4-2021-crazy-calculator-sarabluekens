import React from 'react';
import RadioOption from './RadioOption';
import PropTypes from "prop-types";


const Radio = ({list, value, onRadioChange}) => {
    return (  
        <>
        <label htmlFor="fear"> True horror: select your biggest fear</label> 
           {list.map(item => 
                <RadioOption key={item.index} label={item.label} index={item.index} value={value} description={item.description} onRadioChange={onRadioChange}/>

            )}
        
        </>
    );
}
Radio.propTypes = {
    list : PropTypes.array.isRequired,
    value : PropTypes.string,
    onRadioChange : PropTypes.func
}
export default Radio;
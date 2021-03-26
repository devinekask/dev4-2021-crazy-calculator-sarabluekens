import React from 'react';
import RadioOption from './RadioOption';

const Radio = ({list, value, onRadioChange}) => {
    return (  
        <>
        <label htmlFor="fear"> True horror: select your biggest fear</label> 
           {list.map(item => 
                <RadioOption key={item.label} label={item.label} description={item.description} value={value} onRadioChange={onRadioChange}/>
            )}
        </>
    );
}
 
export default Radio;
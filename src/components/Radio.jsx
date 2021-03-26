import React from 'react';
import RadioOption from './RadioOption';

const Radio = ({list, value, onRadioChange}) => {
    return (  
        <>
        <label htmlFor="fear"> True horror: select your biggest fear</label> 
           {list.map(item => 
                <RadioOption key={item.index} label={item.label} index={item.index} description={item.description} value={value} onRadioChange={onRadioChange}/>
            )}
        </>
    );
}
 
export default Radio;
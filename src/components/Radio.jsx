import React from 'react';
import RadioOption from './RadioOption';

const Radio = ({list}) => {
    return (  
        <>
        <label htmlFor="fear"> True horror: select your biggest fear</label> 
           {list.map(item => 
                <RadioOption label={item.label} description={item.description}/>
            )}
        </>
    );
}
 
export default Radio;
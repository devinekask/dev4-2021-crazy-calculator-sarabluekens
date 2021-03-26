import React from 'react';
import DropdownOption from './DropdownOption';

const Dropdown = ({label, list, type, value, onDropdownChange}) => {
    return (  
        <>
            
            <label htmlFor={type}> {label} </label>
                <select name={type} id={type} value={value} onChange={(e) => onDropdownChange(e.target.value) }>
                    {list.map(item => 
                        <DropdownOption key={item.points} points={item.points} description={item.description} />)}
                </select>


        </>
    );
}
 
export default Dropdown;



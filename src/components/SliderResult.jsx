import React from 'react';

const SliderResult = ({age, title, number}) => {
    return ( 
        <> 
            <h3>{title}</h3>
            <p>You will die at the age of: {age} {age < 2 ? "year" : "years"} {number === 66 && "😈"}. </p>
        </>
    );
}
 
export default SliderResult;
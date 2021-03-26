import React from 'react';

const SliderResult = ({age, title}) => {
    return ( 
        <> 
            <h3>{title}</h3>
            <p>You will die at the age of: {age} {age < 2 ? "year" : "years"} {age === 66 && '😈 sneakyyyy'}. </p>
        </>
    );
}
 
export default SliderResult;
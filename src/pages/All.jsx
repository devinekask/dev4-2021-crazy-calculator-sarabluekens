import React from 'react';
import PropTypes from "prop-types";
const All = ({ways, locations}) => {
    return ( 
        <>
            <section className = "form"> 
                <h3>Name</h3>
                <p> The name is based on the inputfield Name. If the name is Benoit or Simon, there is a special extra 😉</p>
            </section>
            <section className = "form"> 
                <h3>Age</h3>
                <p> The age is based on the slider input. It then follows a formula to convert the number to a semi-random age. <br/> 
                    The unlucky number 66 also has something extra/</p>
            </section>
            <section className = "form"> 
                <h3> Locations to die</h3>
                <ul>
                    {locations.map(location => (
                        <li key={location}>At {location}</li>
    
                    ))}
                </ul>
            </section>
            <section className = "form"> 
                <h3> Ways to die</h3>
                <ul>
                    {ways.map(way => (
                        <li key={way}>{way}</li>
    
                    ))}
                </ul>
            </section>
        </>
     );
}
 
All.propTypes = {
    ways : PropTypes.array.isRequired,
    locations : PropTypes.array.isRequired,
    subtitle : PropTypes.string
}
export default All;
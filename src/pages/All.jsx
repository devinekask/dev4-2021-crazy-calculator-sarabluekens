import React from 'react';
import PropTypes from "prop-types";
import styles from "./All.module.css";

const All = ({ways, locations}) => {
    return ( 
        <div className ={styles.styling}>
            <section > 
                <h3 className ={styles.title}>Name</h3>
                <p className ={styles.text}> The name is based on the inputfield Name. If the name is Benoit or Simon, there is a special extra 😉</p>
            </section>
            <section className = "form"> 
                <h3 className ={styles.title}>Age</h3>
                <p className ={styles.text}> The age is based on the slider input. It then follows a formula to convert the number to a semi-random age. <br/> 
                    The unlucky number 66 also has something extra/</p>
            </section>
            <section className = "form"> 
                <h3 className ={styles.title}> Locations to die</h3>
                <ul>
                    {locations.map(location => (
                        <li key={location} className ={styles.text} >At {location}</li>
    
                    ))}
                </ul>
            </section>
            <section className = "form"> 
                <h3 className ={styles.title}> Ways to die</h3>
                <ul>
                    {ways.map(way => (
                        <li key={way}  className ={styles.text}>{way}</li>
    
                    ))}
                </ul>
            </section>
        </div>
     );
}
 
All.propTypes = {
    ways : PropTypes.array.isRequired,
    locations : PropTypes.array.isRequired,
    subtitle : PropTypes.string
}
export default All;
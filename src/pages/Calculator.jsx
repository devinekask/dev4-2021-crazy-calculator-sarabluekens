import React, { useState } from 'react';
import Text from '../components/Text';
import Slider from '../components/Slider';
import Radio from '../components/Radio';
import Dropdown from '../components/Dropdown';
import SliderResult from '../components/SliderResult';
import DropdownResult from '../components/DropdownResult';
import RadioResult from '../components/RadioResult';
import TextResult from '../components/TextResult';
import PropTypes from "prop-types";
import styles from "./Calculator.module.css";


const Calculator = ({ways, locations, subtitle}) => {
    const [number, setNumber] = useState(0); 
    const [name, setName] = useState(" "); 
    const [killDropdown, setKillDropdown] = useState(0);
    const [dumpDropdown, setDumpDropdown] = useState(0);
    const [keepDropdown, setKeepDropdown] = useState(0);
    const [radio, setRadio] = useState();

    const kill = [
        {
            points : 0,
            description : "Make a choice"
            
        },
        {
            points : 1,
            description : "Six weeks old puppy"
        },
        {
            points : 2,
            description : "Baby Bambi"
        },
        {
            points : 3,
            description: "Three legged squirrel"
        }
    ]

    const dump = [
        {
            points : 0,
            description : "Make a choice"
        },
        {
            points : 1,
            description : "Two months old kitten"
        },
        {
            points : 2,
            description : "Foal you got as a birthay gift"
        },
        {
            points : 3,
            description: "Polka Dot Stingray"
        }
    ]

    const keep = [
        {
            points : 0,
            description : "Make a choice"
        },
        {
            points : 1,
            description : "Flesheating bacteria"
        },
        {
            points : 2,
            description : "Gut worms"
        },
        {
            points : 3,
            description: "Skin mites"
        }
    ]

    const fear = [
        {
            label : "dark",
            description : "The dark",
            index : 0
            
        },
        {
            label : "needles",
            description : "Needles",
            index : 1
        },
        {
            label : "space",
            description : "Thight spaces",
            index : 2
        },
        {
            label : "spiders",
            description : "Spiders",
            index : 3
        },
        {
            label : "code",
            description : " Failed to compile ",
            index : 4
        }
    ]

    const amount = parseInt(number);
    const age = (amount%2)=== 0 ? amount * 6/3.5239 : amount * 8/5.231 + 28 ;

    let wayIndex;
    const points = parseInt(killDropdown) + parseInt(keepDropdown) + parseInt(dumpDropdown);
   parseInt(points);
    if (name.includes( 'Benoit')|| name.includes( 'benoit') || name.includes( 'simon') || name.includes( 'Simon')) {
        wayIndex = 4;
    }
    else if(points < 3) {
        wayIndex = 0;
    }
    else if (points >= 3 && points < 5){
        wayIndex = 1;
    }
    else  if( points >= 5) {
        wayIndex = points -4;
    }
    
    let locationIndex = radio;

    return (
        <div className ={styles.flex}>
            <section className ={styles.styling}>
                <h2 className ={styles.title}>Fill in these fields and find out!</h2>
                <form className ={styles.form}> 
                    < Text value={name} onNameChange={(value => setName(value))}/>
                    < Slider value={parseInt(number)} onNumberChange={(value) => setNumber(value)}  />
                    <Radio list={fear} value={radio} onRadioChange={(value) => setRadio(value)}/>

                    <h3 > Choose a Kill, Dump and Keep:</h3>
                    < Dropdown type="kill" label=" Kill:" list={kill} value={parseInt(killDropdown)} onDropdownChange={(value) => setKillDropdown(value)} /> <br/>
                    < Dropdown type="dump" label="Dump:" list={dump} value={parseInt(dumpDropdown)} onDropdownChange={(value) => setDumpDropdown(value)} /> <br/>
                    < Dropdown type="keep" label="Keep:" list={keep} value={parseInt(keepDropdown)} onDropdownChange={(value) => setKeepDropdown(value)} /> <br/>
                </form>
            </section>

            <section className ={styles.styling}>
                <h2 className ={styles.title}> In Loving memory of </h2>
                <TextResult name={name}/>
                <SliderResult title="Age" age={Math.floor(age)} number={amount}/>
                <RadioResult title="Died" locations={locations} locationIndex={locationIndex} />
                <DropdownResult title="Cause" ways={ways} index={wayIndex} />
             
            </section>
        </div>
    );
};

Calculator.propTypes = {
    ways : PropTypes.array.isRequired,
    locations : PropTypes.array.isRequired
}
export default Calculator;

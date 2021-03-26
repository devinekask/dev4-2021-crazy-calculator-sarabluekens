import React, { useState } from 'react';
import Text from './Text';
import Slider from './Slider';
import Radio from './Radio';
import Dropdown from './Dropdown';
import SliderResult from './SliderResult';
import DropdownResult from './DropdownResult';
import RadioResult from './RadioResult';


const Calculator = () => {
    const [number, setNumber] = useState(0); 
    const [name, setName] = useState(""); 
    const [killDropdown, setKillDropdown] = useState(0);
    const [dumpDropdown, setDumpDropdown] = useState(0);
    const [keepDropdown, setKeepDropdown] = useState(0);
    const [radio, setRadio] = useState();
    const locations = [ "park", "toilet", "bed", "sbg"];

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
            result : 1
            
        },
        {
            label : "needles",
            description : "Needles",
            result : 2
        },
        {
            label : "space",
            description : "Thight spaces",
            result : 3
        },
        {
            label : "spiders",
            description : "Spiders",
            result : 4
        },
        {
            label : "code",
            description : " `Failed to compile`",
            result : 5
        }
    ]

    const age = (number%2)=== 0 ? number * 6/3.5239 : number * 8/5.231 + 28 ;

    const points = parseInt(killDropdown) + parseInt(keepDropdown) + parseInt(dumpDropdown);
    console.log(points);
    const index = points;

   


   
    
    return (
        <>
            <section className = "form">
                <h2>Fill in this form and discover your faith, if you dare...</h2>
                <form> 
                    < Text value={name} onNameChange={(value => setName(value))}/>
                    < Slider value={number} onNumberChange={(value) => setNumber(value)}  />
                    <Radio list={fear} value={radio} onRadioChange={(value) => setRadio(value)}/>
                    < Dropdown type="kill" label="I will Kill my:" list={kill} value={killDropdown} onDropdownChange={(value) => setKillDropdown(value)} />
                    <p>Added penaltypoints: + {killDropdown}</p>
                    < Dropdown type="dump" label=", dump my:" list={dump} value={dumpDropdown} onDropdownChange={(value) => setDumpDropdown(value)} />
                    <p>Added penaltypoints: + {dumpDropdown}</p>
                    < Dropdown type="keep" label="And I want to keep my:" list={keep} value={keepDropdown} onDropdownChange={(value) => setKeepDropdown(value)} />
                    <p>Added penaltypoints: + {keepDropdown}</p>
                </form>
            </section>

            <section className = "form">
                <h2> Hello there, {name} </h2>
                <p>Are you ready to face <span>death?</span></p>
               
                <SliderResult title="Age of death: " age={age}/>
                <RadioResult result={radio} />
                <DropdownResult  />
                <p> {locations[index]}</p>
            </section>
        </>
    );
};

export default Calculator;
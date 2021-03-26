import React, { useState } from 'react';
import Text from './Text';
import Slider from './Slider';
import Radio from './Radio';
import Dropdown from './Dropdown';
import { reactComponent as Kitten } from '../assets/img/kitten.png';


const Form = () => {
    const [number, setNumber] = useState(0); 
    const [name, setName] = useState("");
    const [killDropdown, setKillDropdown] = useState("Make a choice")
    const [dumpDropdown, setDumpDropdown] = useState("Make a choice")
    const [keepDropdown, setKeepDropdown] = useState("Make a choice")

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


    return (
        <section className = "form">
           <h2>Fill in this form and discover your faith, if you dare...</h2>

            <form>
                < Text value={name} onNameChange={(value => setName(value))}/>
                <p>Hello There: {name}</p>
                < Slider value={number} onNumberChange={(value) => setNumber(value)}  />
                < Radio />
                < Dropdown type="kill" label="I will Kill my:" list={kill} value={killDropdown} onDropdownChange={(value) => setKillDropdown(value)} />
                <p>Added penaltypoints: + {killDropdown}</p>
                < Dropdown type="dump" label=", dump my:" list={dump} value={dumpDropdown} onDropdownChange={(value) => setDumpDropdown(value)} />
                <p>Added penaltypoints: + {dumpDropdown}</p>
                < Dropdown type="keep" label="And I want to keep my:" list={keep} value={keepDropdown} onDropdownChange={(value) => setKeepDropdown(value)} />
                <p>Added penaltypoints: + {keepDropdown}</p>

            </form>
        </section>
    );
};

export default Form;
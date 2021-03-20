import React from 'react';

const Form = () => {
    return (
        <section className = "form">
            <p>Find out how you die</p>
            <form >
                <label>Name: </label>
                <input  type="text" id="name" name="name"placeholder="First Name"   />
               
                <p > Keep-Ditch-Kill:</p> 
                
                <label for="keep"> I want to keep my:</label>
                <select name="keep" id="keep">
                    <option value="lice">Lice</option>
                    <option value="vleesetende">carnivorous bacteria</option>
                    <option value="worms">Gut worms</option>
                    <option value="mites">Skin mites</option>
                </select>

                <label for="ditch">Ditch my</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>

                <label for="kill">And I will Kill my</label>
                <select name="kill" id="kill">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
<label for="cars">Choose a car:</label>


            </form>
        </section>
    );
};

export default Form;
import React from 'react';
import Option from './Option';
import kitten from '../assets/img/kitten.png';

const Form = () => {

    const handleChangeNumber = () => {

    }

    return (
        <section className = "form">
            <p>Find out how you die</p>
            <form>
                <label>Name: </label>
                <input  type="text" id="name" name="name"placeholder="First Name"   />
               
                <label htmlFor="number">What is your unluckiest number?</label>
                <input type="number" min="0" max="9999" value="1" />
               
                <br/>
                <label htmlFor="fear"> True horror</label> 

                <br/>
                <input type="radio" id="dark" name="fear" value="dark"/>
                <label htmlFor="dark">The dark</label><br/>

                <input type="radio" id="needles" name="fear" value="needles"/>
                <label htmlFor="needles">Needles</label><br/>

                <input type="radio" id="space" name="fear" value="space"/>
                <label htmlFor="space">Thight spaces</label><br/>

                <input type="radio" id="spspidersace" name="fear" value="spiders"/>
                <label htmlFor="spiders">Spiders</label><br/>

                <input type="radio" id="code" name="fear" value="code"/>
                <label htmlFor="code">"Failed to compile"</label><br/>
                <p > Keep-Ditch-Kill</p> 
                <img src={kitten} alt="Two months old kitten" width="54"/>

                <label htmlFor="kill"> I will Kill my: </label>
                <select name="kill" id="kill">
                    <option value="" disabled selected>Make a choice</option>
                    <option value="puppy">Six weeks old puppy</option>
                    <option value="bambi">Baby Bambi</option>
                    <option value="squirrel">Three legged squirrel</option>
                </select>

                <label htmlFor="ditch"> Dump my: </label>
                <select name="dump" id="dump">
                    <option value="" disabled selected>Make a choice</option>
                    <Option item="kitten" url={kitten} description="Two months old kitten" />
                    <option value="kitten">Two months old kitten</option>
                    <option value="foal">First ever foal</option>
                    <option value="fish">Polka Dot Stingray</option>
                </select>

                <label htmlFor="keep">And I want to keep my: </label>
                <select name="keep" id="keep">
                    <option value="" disabled selected>Make a choice</option>
                    <option value="flesh">Flesheating bacteria</option>
                    <option value="worms">Gut worms</option>
                    <option value="mites">Skin mites</option>
                </select>

            </form>
        </section>
    );
};

export default Form;
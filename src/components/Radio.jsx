import React from 'react';

const Radio = () => {
    return (  
        <>
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
        </>
    );
}
 
export default Radio;
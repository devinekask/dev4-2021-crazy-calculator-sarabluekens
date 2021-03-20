import React from 'react';

const Form = () => {
    return (
        <section className = "form">
            <p>form</p>
            <form  onSubmit={handleSubmitPost}>
                <input  type="text" id="description" name="description"
                    placeholder="Write a description" value={description}  />
                <button>post</button>
            </form>
        </section>
    );
};

export default Form;
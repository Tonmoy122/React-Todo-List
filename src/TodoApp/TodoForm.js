import React from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
const TodoForm = (props) => {
    return (
        <>
            <form className='todoForm'>
                <input type="text"
                    placeholder='Enter Item'
                    value={props.input}
                    onChange={(e) => props.setInput(e.target.value)}
                />



                <button><BsPlusCircleFill /></button>
            </form>
        </>
    );
};

export default TodoForm;
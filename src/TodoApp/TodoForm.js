import React from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
const TodoForm = () => {
    return (
        <>
            <form className='todoForm'>
                <input type="text" placeholder='Enter Item' />
                <button><BsPlusCircleFill /></button>
            </form>
        </>
    );
};

export default TodoForm;
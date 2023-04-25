import React from 'react';
import { MdOutlineEditRoad } from 'react-icons/md'
import { TiDelete } from 'react-icons/ti'
const TodoList = (props) => {
    return (
        <>
            <ol>
                <div className='todoList'>
                    <span className='delete'>
                        <TiDelete /> {" "}
                    </span>{" "}
                    <span className='edit'>
                        <MdOutlineEditRoad />
                    </span>
                    <li>{props.input}</li>

                </div>
                <li>Buy Butter</li>
            </ol>
        </>
    );
};

export default TodoList;

{/* <MdOutlineEditRoad /> <TiDelete /> <li>Buy Egg</li>
                <MdOutlineEditRoad /> <TiDelete />  <li>buy chicken</li> */}
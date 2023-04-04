import React from 'react';
import { MdOutlineEditRoad } from 'react-icons/md'
import { TiDelete } from 'react-icons/ti'
const TodoList = () => {
    return (
        <>
            <ol>
                <MdOutlineEditRoad /> <TiDelete />  <li>Buy Butter</li>
                <MdOutlineEditRoad /> <TiDelete /> <li>Buy Egg</li>
                <MdOutlineEditRoad /> <TiDelete />  <li>buy chicken</li>
            </ol>
        </>
    );
};

export default TodoList;
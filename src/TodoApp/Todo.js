import React from 'react';
import "./Todo.css";
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useState } from 'react';

const Todo = () => {

    const [input, setInput] = useState("")

    return (
        <>

            <div className='todo'>
                <h1>Todo App</h1>

                <TodoForm input={input} setInput={setInput}></TodoForm>

                <TodoList input={input}></TodoList>
            </div>

        </>
    );
};

export default Todo;
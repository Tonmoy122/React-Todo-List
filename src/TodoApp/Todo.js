import React from 'react';
import "./Todo.css";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
    return (
        <>

            <div className='todo'>
                <h1>Todo App</h1>
                <TodoForm ></TodoForm>
                <TodoList></TodoList>
            </div>

        </>
    );
};

export default Todo;
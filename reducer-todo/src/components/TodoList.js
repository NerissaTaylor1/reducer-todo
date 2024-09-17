import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
    console.log("props.todos", props.todos);
    return (
        <div>
            {props.todos.map(todo => (
                <Todo key={todo.id} {...todo} completed={todo.completed} toggleComplete={props.toggleComplete} handleCompleted={props.handleCompleted} />
            ))}

        </div>
    )
}

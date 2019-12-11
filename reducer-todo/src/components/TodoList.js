import React from 'react'

export default function TodoList(props) {
    return (
        <div>
            {props.todos && props.todos.map(todo => (
                <TodoList key={todo.id} todos={todo} />
            ))}
        </div>
    )
}

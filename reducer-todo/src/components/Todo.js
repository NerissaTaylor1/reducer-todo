import React from 'react'

export default function Todo(props) {
    const { id, toggleComplete, item, completed } = props;

    return (
        <div className={completed ? 'completed' : 'none'}
            onClick={() => toggleComplete(id)}>
            {item}

        </div>
    )
}

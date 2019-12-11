import React, { useState, useReducer } from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import { reducer, initialState } from "./reducers/reducers";
function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState("");


  const addTodo = item => {
    const newTodo = {
      id: new Date(),
      item: "",
      completed: false
    }
    setNewTodo([...state.todos], item)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(addTodo)
    setNewTodo('');
  }

  const toggleComplete = id => dispatch({ type: 'TOGGLE_COMPLETE', id: id })
  const clearCompleted = () => dispatch({ type: 'CLEAR_COMPLETED' });
  const handleChanges = e => {
    setNewTodo(e.target.value);
  };
  const handleCompleted = (e) => {
    e.preventDefault();
    clearCompleted();
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

        <input className="todo"
          type="text"
          name={newTodo}
          value={newTodo}
          onChange={handleChanges} />
        <button onClick={() => {
          dispatch({ type: "ADD_TODO", payload: newTodo })
        }}>Add Todo</button>
        <button onClick={handleCompleted}>Clear Completed</button>



        <TodoList todos={state.todos} toggleComplete={toggleComplete} handleCompleted={handleCompleted} />

      </form></div>
  )
}

export default App;

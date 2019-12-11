import './App.css';
import TodoList from "./components/TodoList";
import React, { useState, useReducer } from 'react';
import { reducer, initialState } from "./reducers/reducers";
function App() {

  const [todos, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = item => {
    const newTodo = {
      id: new Date(),
      item: "",
      completed: false
    }
    setNewTodo([...todos], item)
  }
  const handleChanges = e => {
    setNewTodo(e.target.value);
  };
  return (
    <div className="App">




      <h2> {todos.item}</h2>
      <input className="todo" type="text"
        name={addTodo}
        value={newTodo}
        onChange={handleChanges} />
      <button onClick={() => {
        dispatch({ type: "ADD_TODO", payload: newTodo })
      }}>Add Todo</button>
    </div>
  )
}

export default App;

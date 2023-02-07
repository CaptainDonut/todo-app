import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [todo, setTodo] = useState(""); //todo = value in input field. setTodo = function that updates todo value.
  const [todos, setTodos] = useState<{ text: string, done: boolean }[]>([]); // visible list of todos. Hold both text and done states to keep track.

  // -- Submit --
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { //react hook
    e.preventDefault(); //don't refresh page
    setTodos([{ text: todo, done: false }, ...todos]) // latest added appear first
    setTodo(""); //reset after each submit
  };

  // -- Remove --
  const handleRemove = (index: number) => { //react hook, list index
    let currentTodos: { text: string, done: boolean }[] = [...todos]; //get the todos
    currentTodos.splice(index, 1); //remove 
    setTodos(currentTodos); //update state
  };

  // -- Done --
  const handleDone = (index: number) => {
    let currentTodos: { text: string, done: boolean }[] = [...todos]; //get the todos
    currentTodos[index].done = !currentTodos[index].done;
    setTodos(currentTodos);
  };


  // Return the site:
  return (
    <div className="min-h-full flex flex-col items-baseline py-12 sm:px-6 lg:px-8 space-y-4">

      <h1 className="text-3xl font-bold underline">
        Todo app
      </h1>

      {/* form */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            type="text"
            value={todo}
            onChange={e => setTodo(e.target.value)}
            className="input-css" placeholder="Add Todo" aria-label="Todo" />
          <button type="submit" className="add-button">
            Add entry
          </button>
        </div>
      </form>

      {/* list */}
      <ul className="list-disc space-y-4">
        {/* map loops over array and render each todo to <li> elements. line through if marked as complete */}
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.done ? "line-through" : "none" }}>
            {todo.text}
            <button type="button" className="done-button"
              onClick={() => handleDone(index)}> Mark as done </button>
            <button type="button" className="delete-button"
              onClick={() => handleRemove(index)}> Delete </button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default App;
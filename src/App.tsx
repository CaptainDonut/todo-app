import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [todo, setTodo] = useState(""); // State for holding value in input field
  const [todos, setTodos] = useState<{ text: string, done: boolean }[]>([]); // State that holds the list of todos

  // --Form submit handler--
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent refreshing
    setTodos([{ text: todo, done: false }, ...todos]) // Add the new todo at the top of the list
    setTodo(""); // Reset input after submit
  };

  // --Remove button handler--
  const handleRemove = (index: number) => {
    let currentTodos: { text: string, done: boolean }[] = [...todos]; // Copy the current list of todos
    currentTodos.splice(index, 1); // Remove the todo at this index
    setTodos(currentTodos); // Update the state with the changed list of todos
  };

  // --Done button handler--
  const handleDone = (index: number) => {
    let currentTodos: { text: string, done: boolean }[] = [...todos];
    currentTodos[index].done = !currentTodos[index].done; // Change the done state of this todo
    setTodos(currentTodos);
  };


  // Return the site:
  return (
    <div className="min-h-full flex flex-col items-baseline py-12 sm:px-6 lg:px-8 space-y-4">

      <h1 className="text-3xl font-bold underline">
        Todo app
      </h1>

      {/* Form for adding new todos */}
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

      {/* List displaying all the todos */}
      <ul className="list-disc space-y-4">
        {/* Loop over the list of todos and render them as list items */}
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
import React, { useState } from 'react';


const TodoApp = () => {
  const [todo, setTodo] = useState(""); //todo = value in input field. setTodo = function that updates todo value.
  const [todos, setTodos] = useState<string[]>([]); // visible list of todos


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { //handleSubmit is a react hook 
    e.preventDefault(); //don't refresh page
    setTodos([todo, ...todos]); // latest added appear first
    setTodo(""); //reset after each submit
  };

// Return form
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
        <button type="submit">Add todo entry</button>
      </form>
      <ul>
        {/* map loops over array and render each todo to <li> elements */}
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
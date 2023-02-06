import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [todo, setTodo] = useState(""); //todo = value in input field. setTodo = function that updates todo value.
  const [todos, setTodos] = useState<string[]>([]); // visible list of todos

  // -- Submit --
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { //react hook
    e.preventDefault(); //don't refresh page
    setTodos([todo, ...todos]); // latest added appear first
    setTodo(""); //reset after each submit
  };

// -- Remove --
const handleRemove = (index: number) => { //react hook
  let newTodos: string[] = [...todos]; //get the todos
  newTodos.splice(index, 1); //remove 
  setTodos(newTodos); //update
};


// Return form
  return (
    <div className="min-h-full flex flex-col items-baseline py-12 sm:px-6 lg:px-8 space-y-4">

<h1 className="text-3xl font-bold underline">
      Todo app
    </h1>

    <form onSubmit={handleSubmit} className="w-full max-w-sm">
  <div className="flex items-center border-b border-teal-500 py-2">
    <input
     type="text"
     value={todo}
     onChange={e => setTodo(e.target.value)} 
     className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Add Todo" aria-label="Todo"/>
    <button type="submit" className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
      Add entry
    </button>
  </div>
</form>
      <ul className ="list-disc space-y-4">
        {/* map loops over array and render each todo to <li> elements */}
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800" 
              onClick={() => handleRemove(index)}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
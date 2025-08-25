import React from 'react'
import { useState } from 'react'
import TodoItem from './components/TodoItem'

const App = () => {
 const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTodo = {
      id: Date.now(),
      task: task,
      completed: false,
    };

    // Functional update (best practice)
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, newTask)=>{
    setTodos((prevTodos)=>(
      prevTodos.map((todo)=>
      todo.id === id ? {...todo, task: newTask} : todo)
    ))
  }
  return (
     <div className="container">
      <div className="todo-box">
        <h1>Todo App</h1>

        {/* ✅ Use form for better accessibility */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            placeholder="Enter task"
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>

        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={handleDelete}
            onEdit = {handleEdit} />
          ))}
        </ul>
      </div>
    </div>
  );

}

export default App
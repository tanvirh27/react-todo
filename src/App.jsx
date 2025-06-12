import { React, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoList from "./components/TodoList";
import CompletedList from "./components/CompletedList";
import TodoInput from "./components/TodoInput";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { task: "Complete React project", completed: false },
    { task: "Review code for pull request", completed: false },
    { task: "Attend team meeting at 3 PM", completed: false },
    { task: "Update documentation", completed: false },
  ]);

  const addTodo = (task) => {
    setTodos([...todos, { task, completed: false }]);
  };

  const toggleComplete = (index) => {
    console.log("index", index);
    setTodos((todos) =>
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const completedTasks = todos.filter((todo) => todo.completed);

  return (
    <>
      <header className="bg-gray-100 p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-800">Todo App</h1>
      </header>

      <div className="mx-auto">
        <div className="w-[60%] items-center mx-auto">
          <TodoInput onAdd={addTodo}></TodoInput>
          <div className="flex bg-amber-700 p-4">
            <TodoList
              todos={todos}
              description="All Tasks"
              onToggle={toggleComplete}
            />
            <CompletedList
              todos={completedTasks}
              description="Completed Task"
              onToggle={toggleComplete}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import "./App.css";

function MyButton() {
  return (
    <button onClick={() => setCount((count) => count + 1)}>count is 0</button>
  );
}
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <header class="bg-gray-100 p-6 shadow-sm">
        <h1 class="text-2xl font-semibold text-gray-800">Todo App</h1>
      </header>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </>
  );
}

export default App;

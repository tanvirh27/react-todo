import React from "react";

const TodoInput = () => {
  return (
    <div className="flex flex-col items-center pt-12 px-4 ">
      <ul className="list-none w-3xl">
        <li className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Add a new task"
            className="flex-grow p-2 border border-gray-300 rounded"
          />
          <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
            Add Task
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TodoInput;

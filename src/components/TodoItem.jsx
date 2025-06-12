import React, { useState } from "react";

const TodoItem = ({ task, onToggle }) => {
  return (
    <>
      <li className="">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span
          className={`text-gray-700 ${task.completed ? "line-through" : ""}`}
        >
          {task.task}
        </span>
      </li>
    </>
  );
};

export default TodoItem;

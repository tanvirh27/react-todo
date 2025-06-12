import React, { useState } from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ description, todos, onToggle }) => {
  return (
    <>
      <div className="pt-12 px-4">
        <div className=" bg-white rounded shadow-md p-10">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            {description}
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            { todos.filter((item) => !item.completed).length === 0
              ? "All Tasks Completed"
              : ""  
            }
            </p>

          <ul className="space-y-4 list-none">
            {todos.map((item, index) =>
              !item.completed ? (
                <TodoItem
                  task={item}
                  key={index}
                  onToggle={() => onToggle(index)}
                />
              ) : null
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoList;

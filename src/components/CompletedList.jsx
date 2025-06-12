import React from "react";
import TodoItem from "./TodoItem.jsx";

const CompletedList = ({ description, todos, onToggle }) => {
  return (
    <>
      <div className="pt-12 px-4">
        <div className=" bg-white rounded shadow-md p-10">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            {description}
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            {todos.length === 0 ? "No Task Completed" : ""}
          </p>

          <ul className="space-y-4 list-none">
            {todos.map((item, index) => (
              <TodoItem task={item} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CompletedList;

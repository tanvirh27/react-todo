import React from "react";

const TodoInput = ({ onAdd }) => {
  const [value, setValue] = React.useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    if (value.trim()) {
      // Logic to add the task
      onAdd(value.trim());
      setValue(""); // Clear input after adding
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };
  return (
    <div className="flex py-3">
      <input
        type="text"
        placeholder="Add a new task"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-[70%] border border-gray-300 rounded pl-3"
      />
      <button
        className="w-[30%] ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Add Task
      </button>
    </div>
  );
};

export default TodoInput;

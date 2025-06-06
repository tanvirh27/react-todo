import React, { useState } from 'react';

const TodoItem = ({ task }) => {
    const [completed, setCompleted] = useState(task.completed);
    const handleChange = () => {
        setCompleted(!completed);
    }

    return (
        <>
            <li className="flex items-start">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={handleChange}
                    className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">
                  {task.task} 
                </span>
            </li>
        </>
    );

};

export default TodoItem;

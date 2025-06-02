import React from 'react';

const TodoItem = () => {
    return (
        <>
            <li className="flex items-start">
                <input
                    type="checkbox"
                    className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">
                  Meeting with Alex about AI course launch sdf fasdfasdf 
                </span>
            </li>
        </>
    );

};

export default TodoItem;

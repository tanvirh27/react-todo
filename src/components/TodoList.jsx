import React from 'react';
import TodoItem from "./TodoItem.jsx";

const TodoList = () => {
    const description = "Organize your daily tasks by maintaining them from here";
    return (
        <>
            <div className="min-h-screen flex flex-col items-center pt-12 px-4">
                <div className="w-full max-w-3xl bg-white rounded shadow-md p-10">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6">All Tasks</h1>

                    <p className="text-lg text-gray-600 mb-8">
                        {description}
                    </p>

                    <ul className="space-y-4 list-none">
                        {[...Array(4)].map((_, index) => (
                            <TodoItem key={index} />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TodoList;

"use client";
// src/App.tsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/lib/redux/store";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiSquareCheck } from "react-icons/ci";
import { CiStop1 } from "react-icons/ci";
import {
  addTodo,
  removeTodo,
  toggleComplete,
} from "@/lib/redux/slicers/TodoListSlicer";

function TodoList() {
  // Initialize Redux dispatch hook
  const dispatch = useDispatch();

  // Retrieve todos from Redux state using the useSelector hook
  const todos = useSelector((state: RootState) => state.todo.list);

  // State to manage the value of the new todo input
  const [newTodo, setNewTodo] = useState("");

  // Function to handle adding a new todo
  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: Date.now(),
        text: newTodo,
        completed: false,
      }),
    );
    setNewTodo(""); // Clear the input after adding a new todo
  };

  // Function to handle removing a todo
  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  // Function to handle toggling the completion status of a todo
  const handleToggleComplete = (id: number) => {
    dispatch(toggleComplete(id));
  };

  return (
    <section className="flex h-full w-full select-text flex-col justify-between gap-4 break-words rounded-lg bg-zinc-950 p-6 text-xl shadow-md shadow-green-950 transition-all duration-1000  hover:shadow-none">
      <ul className="flex w-full flex-col justify-between gap-4 overflow-y-auto">
        {todos.map((todo: any) => (
          <li
            key={todo.id}
            className={`flex w-full justify-between gap-4 rounded-lg bg-white p-2 ${
              todo.completed ? "bg-white bg-opacity-20" : ""
            }`}
          >
            <span
              className={`rounded-lg p-2 ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.text}
            </span>
            <span className="flex gap-2 text-3xl">
              <button
                onClick={() => handleToggleComplete(todo.id)}
                className="transition-all duration-500"
              >
                {todo.completed ? <CiSquareCheck /> : <CiStop1 />}
              </button>
              <button
                onClick={() => handleRemoveTodo(todo.id)}
                className="text-red-900 transition-all duration-500 hover:text-red-950"
              >
                <FaRegTrashAlt />
              </button>
            </span>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <input
          onChange={(e: any) => setNewTodo(e.target.value)}
          value={newTodo}
          placeholder="Enter Todo"
          type="text"
          name="todo"
        />
        <button onClick={handleAddTodo} className="w-full bg-white p-2">
          Add Todo
        </button>
      </div>
    </section>
  );
}

export default TodoList;

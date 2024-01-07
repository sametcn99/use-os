// Import necessary functions and types from the Redux Toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single Todo item
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Define the interface for the entire Todo state
interface TodoState {
  list: Todo[]; // An array to store the list of Todo items
  value: boolean; // A boolean to store the open/close state of the Todo list
}

// Define the initial state for the Todo feature
const initialState: TodoState = {
  list: [], // Initial list is empty
  value: false, // Initial isOpen is false
};

// Create a Redux slice for managing the Todo feature
const todoSlice = createSlice({
  name: "todos", // Name of the slice, used to identify actions and reducers
  initialState, // Initial state for this slice
  reducers: {
    // Reducer function to add a new Todo item to the list
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.list.push(action.payload); // Push the new Todo to the list
    },
    setTodoListOpen: (state) => {
      // Toggle the boolean value when setOpen is dispatched
      state.value = !state.value;
      console.log(`Todo List open state is set ${state.value}`);
    },
    // Reducer function to remove a Todo item from the list by its id
    removeTodo: (state, action: PayloadAction<number>) => {
      // Filter out the Todo item with the specified id from the list
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },

    // Reducer function to toggle the 'completed' status of a Todo item by its id
    toggleComplete: (state, action: PayloadAction<number>) => {
      // Find the Todo item with the specified id in the list
      const todo = state.list.find((todo) => todo.id === action.payload);

      // If the Todo item is found, toggle its 'completed' status
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

// Export the individual action creators generated by the slice
export const { addTodo, removeTodo, toggleComplete, setTodoListOpen } =
  todoSlice.actions;

const todoReducer = todoSlice.reducer;
// Export the reducer function generated by the slice
export default todoReducer;

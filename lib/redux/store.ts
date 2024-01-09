// Import the necessary functions and types from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import welcomeReducer from "./slicers/WelcomeSlicer";
import ticTacToeReducer from "./slicers/TicTacToeSlicer";
import timeReducer from "./slicers/WidgetSlicer";
import todoReducer from "./slicers/TodoListSlicer";
import settingsReducer from "./slicers/SettingsSlicer";
import terminalReducer from "./slicers/TerminalSlicer";

// Combine the individual reducers into a root reducer using combineReducers
// The keys in the resulting state object will correspond to the names given to the individual reducers
const rootReducer = combineReducers({
  // Add the individual reducers here
  welcomeIsOpen: welcomeReducer,
  ticTacToeIsOpen: ticTacToeReducer,
  time: timeReducer,
  todo: todoReducer,
  settings: settingsReducer,
  terminal: terminalReducer,
});

// Configure the Redux store using the rootReducer
// configureStore is a function provided by Redux Toolkit that simplifies the store setup
const reduxStore = configureStore({
  reducer: rootReducer, // Set the root reducer for the store
});

// Define types for better TypeScript support:

// Define RootState type using the ReturnType utility type to infer the state shape from the root reducer
export type RootState = ReturnType<typeof reduxStore.getState>;

// Define AppDispatch type representing the store's dispatch function
export type AppDispatch = typeof reduxStore.dispatch;

// Export the configured Redux store as the default export of this module
export default reduxStore;

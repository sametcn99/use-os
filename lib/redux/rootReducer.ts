// Import the combineReducers function from Redux Toolkit to combine multiple reducers into a single root reducer
import { combineReducers } from "@reduxjs/toolkit";
import welcomeReducer from "./slicers/WelcomeSlicer";
import ticTacToeReducer from "./slicers/TicTacToeSlicer";
import timeReducer from "./slicers/WidgetSlicer";
import todoReducer from "./slicers/TodoListSlicer";
import settingsReducer from "./slicers/SettingsSlicer";

// Combine the individual reducers into a root reducer using combineReducers
// The keys in the resulting state object will correspond to the names given to the individual reducers
const rootReducer = combineReducers({
  // Add the individual reducers here
  welcomeIsOpen: welcomeReducer,
  ticTacToeIsOpen: ticTacToeReducer,
  time: timeReducer,
  todo: todoReducer,
  settings: settingsReducer,
});

// Export the combined root reducer as the default export of this module
export default rootReducer;

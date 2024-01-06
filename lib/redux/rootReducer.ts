// Import the combineReducers function from Redux Toolkit to combine multiple reducers into a single root reducer
import { combineReducers } from "@reduxjs/toolkit";

// Combine the individual reducers into a root reducer using combineReducers
// The keys in the resulting state object will correspond to the names given to the individual reducers
const rootReducer = combineReducers({});

// Export the combined root reducer as the default export of this module
export default rootReducer;

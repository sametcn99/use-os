// Import createSlice from Redux Toolkit for creating a slice of the Redux store
import { createSlice } from "@reduxjs/toolkit";

// Define the type for the state
interface settingsState {
  value: boolean;
}

// Create a slice using createSlice
const settingsSlice = createSlice({
  name: "settings", // Name of the slice, used as the key in the root reducer
  initialState: { value: false } as settingsState, // Initial state for this slice
  reducers: {
    setSettingsOpen: (state) => {
      // Toggle the boolean value when setOpen is dispatched
      state.value = !state.value;
      console.log(`Settings open state is set ${state.value}`);
    },
  },
});

// Export the increment and decrement action creators for dispatching the corresponding actions
export const { setSettingsOpen } = settingsSlice.actions;

// Export the reducer function generated by createSlice as the default export of this module
const settingsReducer = settingsSlice.reducer;
export default settingsReducer;
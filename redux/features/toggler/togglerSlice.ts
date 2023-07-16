import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TogglerState = {
  value: boolean;
};

const initialState = {
  active: value,
} as TogglerState;

export const toggler = createSlice({
  name: "toggler",
  initialState,
  reducers: {
    isOpen: () => initialState,
    toggle: (state) => {
      state.value = !state.value;
    },
  
  },
});

export const {
    isOpen,
    toggle
} = toggler.actions;
export default toggler.reducer;
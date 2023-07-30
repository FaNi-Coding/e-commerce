import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TogglerState = {
  active: boolean;
};

const initialState = {
  active: false,
} as TogglerState;

export const toggler = createSlice({
  name: "toggler",
  initialState,
  reducers: {
    isOpen: () => initialState,
    toggle: (state) => {
      state.active = !state.active
    },
  
  },
});

export const {
    isOpen,
    toggle
} = toggler.actions;
export default toggler.reducer;
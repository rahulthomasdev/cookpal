import { createSlice } from "@reduxjs/toolkit";

const hasRespondedSlice = createSlice({
  name: "greeting",
  initialState: {
    value: false,
  },
  reducers: {
    setHasResponded: (state) => {
      state.value = true;
    },
  },
});
export const setHasResponded = hasRespondedSlice.actions;

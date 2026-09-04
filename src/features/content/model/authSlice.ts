import { createSlice } from "@reduxjs/toolkit";
import type { contentState } from "../types";
import { getNav } from "./authThunks";

const initialState: contentState = {
  nav: null,
  status: "idle",
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.status = "loading";
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getNav.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getNav.fulfilled, (state, action) => {
        state.status = "loaded";
        state.nav = action.payload;
      })
      .addCase(getNav.rejected, (state) => {
        state.status = "loaded";
      });
  },
});

export const { setIsLoading } = contentSlice.actions;

export default contentSlice.reducer;

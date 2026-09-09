import { createSlice } from "@reduxjs/toolkit";
import type { ProjectState } from "../types";
import { getProjects } from "./projectsThunks";

const initialState: ProjectState = {
  projects: null,
  status: "idle",
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.status = "loading";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.status = "loaded";
        state.projects = action.payload;
      })
      .addCase(getProjects.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { setIsLoading } = projectsSlice.actions;

export default projectsSlice.reducer;

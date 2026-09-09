import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProjectsService } from "../services/projects.service";

export const getProjects = createAsyncThunk<
  Awaited<ReturnType<typeof getProjectsService>>,
  void,
  { rejectValue: string }
>("projects/getProjects", async (_, { rejectWithValue }) => {
  try {
    const data = await getProjectsService();

    return data;
  } catch (error) {
    // const errorMessage = getAuthErrorMessage(error as Error);
    console.log(error);
    return rejectWithValue("error");
  }
});

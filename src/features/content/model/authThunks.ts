import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNavService } from "../services/content.service";

export const getNav = createAsyncThunk<
  Awaited<ReturnType<typeof getNavService>>,
  void,
  { rejectValue: string }
>("content/getNav", async (_, { rejectWithValue }) => {
  try {
    const data = await getNavService();

    return data;
  } catch (error) {
    // const errorMessage = getAuthErrorMessage(error as Error);
    console.log(error);
    return rejectWithValue("error");
  }
});

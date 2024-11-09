import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "campers",
  initialState: {
    // items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => builder.addCase((state, action) => {}),
});

export default slice.reducer;

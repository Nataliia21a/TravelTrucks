import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations";

const slice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    page: 1,
    limit: 4,
    selectedCamper: null,
    total: 0,
    loading: false,
    error: false,
  },
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        const newItems = action.payload.items;
        const uniqueItems = newItems.filter(
          (item) =>
            !state.items.some((existingItem) => existingItem.id === item.id)
        );
        state.items.push(...uniqueItems);

        state.total = action.payload.total;
        state.loading = false;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
        state.loading = false;
      })
      .addCase(fetchCamperById.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const { incrementPage } = slice.actions;
export default slice.reducer;

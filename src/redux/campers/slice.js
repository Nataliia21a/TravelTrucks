import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCamperById,
  fetchCampers,
  fetchCampersByLocation,
} from "./operations";

const slice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    filteredItems: [],
    page: 1,
    limit: 4,
    selectedCamper: null,
    location: "",
    total: 0,
    loading: false,
    error: false,
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = false;
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
      .addCase(fetchCampersByLocation.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCampersByLocation.fulfilled, (state, action) => {
        state.filteredItems = action.payload.items;
        state.total = action.payload.total;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchCampersByLocation.rejected, (state) => {
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

export const { incrementPage, setLocation, clearItems } = slice.actions;
export default slice.reducer;

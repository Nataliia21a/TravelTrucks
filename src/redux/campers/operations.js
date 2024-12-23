import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(`/campers?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCampersByLocation = createAsyncThunk(
  "campers/fetchCampersByLocation",
  async (location, thunkAPI) => {
    try {
      const response = await axios.get(`/campers?location=${location}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCampersByEquipment = createAsyncThunk(
  "campers/fetchCampersByEquipment",
  async ({ equipment, state }, thunkAPI) => {
    try {
      const response = await axios.get(`/campers?${equipment}=${state}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${camperId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
